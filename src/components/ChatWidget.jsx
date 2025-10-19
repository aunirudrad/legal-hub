import axios from "axios";
import { useEffect, useRef, useState } from "react";
import { FiMessageSquare } from "react-icons/fi";
import { IoMdClose } from "react-icons/io";
import ReactMarkdown from "react-markdown";

export default function ChatWidget() {
    const [messages, setMessages] = useState([
        { sender: "bot", text: "Hi! This is your assistant from LEGALHUB. May I know your name?" }
    ]);
    const [question, setQuestion] = useState("");
    const [open, setOpen] = useState(false);
    const [step, setStep] = useState(0);
    const [userInfo, setUserInfo] = useState({ name: "", caseType: "", location: "" });
    const [attorneys, setAttorneys] = useState([]);
    const [blogData, setBlogData] = useState([]);

    const inputRef = useRef(null);
    const chatRef = useRef(null);

    // 🔹 Load JSON data from public folder
    useEffect(() => {
        async function loadData() {
            try {
                const [att, blogs] = await Promise.all([
                    fetch("/data/attorneys.json").then((res) => res.json()),
                    fetch("/data/blogData.json").then((res) => res.json()),
                ]);
                setAttorneys(att);
                setBlogData(blogs);
            } catch (err) {
                console.error("Error loading JSON data:", err);
            }
        }
        loadData();
    }, []);

    // 🔹 Auto scroll on new messages
    useEffect(() => {
        if (chatRef.current) chatRef.current.scrollTop = chatRef.current.scrollHeight;
    }, [messages, open]);

    // 🔹 Auto focus when chat opens
    useEffect(() => {
        if (open && inputRef.current) inputRef.current.focus();
    }, [open]);

    // 🔹 Close with Escape key
    useEffect(() => {
        const onKey = (e) => e.key === "Escape" && setOpen(false);
        window.addEventListener("keydown", onKey);
        return () => window.removeEventListener("keydown", onKey);
    }, []);

    // 🔹 Handle message sending
    async function generateAnswer(e) {
        e.preventDefault();
        if (!question.trim()) return;

        const userMessage = { sender: "user", text: question };
        setMessages((prev) => [...prev, userMessage]);
        setQuestion("");

        // Guided info collection before Gemini call
        if (step === 0) {
            setUserInfo({ ...userInfo, name: question });
            setMessages((prev) => [
                ...prev,
                { sender: "bot", text: `Nice to meet you, ${question}! What type of legal case are you consulting about?` },
            ]);
            setStep(1);
            return;
        }

        if (step === 1) {
            setUserInfo({ ...userInfo, caseType: question });
            setMessages((prev) => [
                ...prev,
                { sender: "bot", text: "Got it. Which city or region are you located in?" },
            ]);
            setStep(2);
            return;
        }

        if (step === 2) {
            const updatedUser = { ...userInfo, location: question };
            setUserInfo(updatedUser);
            setMessages((prev) => [
                ...prev,
                { sender: "bot", text: `Thanks, ${updatedUser.name}! Let’s continue with your consultation.` },
            ]);
            setStep(3);
            return;
        }

        // After info collection → send context to Gemini
        try {
            const context = `
        You are a professional legal assistant from LEGALHUB.
        User Details:
        - Name: ${userInfo.name}
        - Case Type: ${userInfo.caseType}
        - Location: ${userInfo.location}

        Attorneys: ${JSON.stringify(attorneys)}
        Blog Insights: ${JSON.stringify(blogData)}

        Based on this information, answer the following question:
        "${userMessage.text}"
      `;

            const response = await axios({
                url: "https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=AIzaSyDR7pkcTDsdEkxxyLgpBKCTU6rEnTXeC9E",
                method: "post",
                data: { contents: [{ parts: [{ text: context }] }] },
            });

            const botReply =
                response.data?.candidates?.[0]?.content?.parts?.[0]?.text ||
                "Sorry, I couldn’t process that right now.";

            setMessages((prev) => [...prev, { sender: "bot", text: botReply }]);
        } catch (error) {
            console.error("Error:", error);
            setMessages((prev) => [
                ...prev,
                { sender: "bot", text: "Something went wrong. Please try again." },
            ]);
        }
    }

    return (
        <>
            {/* Floating Button */}
            <button
                type="button"
                onClick={() => setOpen((v) => !v)}
                aria-label={open ? "Close chat" : "Open chat"}
                className="fixed bottom-8 right-8 z-50 grid h-14 w-14 place-content-center rounded-full bg-blue-600 text-white shadow-xl transition-transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-blue-200"
            >
                {open ? <IoMdClose className="h-6 w-6" /> : <FiMessageSquare className="h-6 w-6" />}
            </button>

            {/* Chat Window */}
            {open && (
                <div className="fixed bottom-28 right-8 z-50 w-[22rem] max-w-[calc(100vw-2rem)] rounded-2xl border border-slate-200 bg-white shadow-2xl flex flex-col">
                    {/* Header */}
                    <div className="flex items-center justify-between border-b border-slate-200 bg-slate-50 px-4 py-3">
                        <div>
                            <p className="text-sm font-semibold text-slate-800">LEGALHUB Chat</p>
                            <p className="text-xs text-slate-500">Available 24/7 for your legal questions</p>
                        </div>
                        <button
                            type="button"
                            onClick={() => setOpen(false)}
                            className="rounded-md p-1.5 text-slate-500 hover:bg-slate-100"
                            aria-label="Close chat"
                        >
                            <IoMdClose className="h-5 w-5" />
                        </button>
                    </div>

                    {/* Messages */}
                    <div
                        ref={chatRef}
                        className="flex-1 overflow-y-auto bg-white p-4 space-y-3 scroll-smooth"
                        style={{ maxHeight: "380px", minHeight: "380px" }}
                    >
                        {messages.map((msg, index) => (
                            <div
                                key={index}
                                className={`max-w-[85%] px-3 py-2 rounded-2xl text-sm whitespace-pre-wrap ${msg.sender === "bot"
                                        ? "bg-slate-100 text-slate-800"
                                        : "bg-blue-600 text-white ml-auto"
                                    }`}
                            >
                                <ReactMarkdown>{msg.text}</ReactMarkdown>
                            </div>
                        ))}
                    </div>

                    {/* Input */}
                    <form
                        onSubmit={generateAnswer}
                        className="flex items-center gap-2 border-t border-slate-200 bg-white p-3"
                    >
                        <input
                            ref={inputRef}
                            type="text"
                            value={question}
                            onChange={(e) => setQuestion(e.target.value)}
                            placeholder="Type a message…"
                            className="flex-1 rounded-xl border border-slate-300 px-3 py-2 text-sm placeholder:text-slate-400 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-200"
                        />
                        <button
                            type="submit"
                            className="rounded-xl bg-blue-600 px-3 py-2 text-sm font-medium text-white shadow hover:bg-blue-700"
                        >
                            Send
                        </button>
                    </form>
                </div>
            )}
        </>
    );
}
