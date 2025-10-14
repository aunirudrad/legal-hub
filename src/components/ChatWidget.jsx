import axios from "axios";
import { useEffect, useRef, useState } from "react";
import { FiMessageSquare } from "react-icons/fi";
import { IoMdClose } from "react-icons/io";

export default function ChatWidget() {
    const [messages, setMessages] = useState([
        { sender: "bot", text: "Hi! This is your assistant from LEGALHUB. How can I help?" }
    ]);
    const [question, setQuestion] = useState("");
    const [open, setOpen] = useState(false);
    const inputRef = useRef(null);
    const chatRef = useRef(null);

    // Auto scroll to bottom on new messages
    useEffect(() => {
        if (chatRef.current) {
            chatRef.current.scrollTop = chatRef.current.scrollHeight;
        }
    }, [messages, open]);

    // Auto focus input when chat opens
    useEffect(() => {
        if (open && inputRef.current) inputRef.current.focus();
    }, [open]);

    // Close with Escape key
    useEffect(() => {
        const onKey = (e) => e.key === "Escape" && setOpen(false);
        window.addEventListener("keydown", onKey);
        return () => window.removeEventListener("keydown", onKey);
    }, []);

    // Send message and get reply
    async function generateAnswer(e) {
        e.preventDefault();
        if (!question.trim()) return;

        const userMessage = { sender: "user", text: question };
        setMessages((prev) => [...prev, userMessage]);
        setQuestion("");

        try {
            const response = await axios({
                url: "https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=AIzaSyDR7pkcTDsdEkxxyLgpBKCTU6rEnTXeC9E",
                method: "post",
                data: {
                    contents: [
                        {
                            parts: [{ text: userMessage.text }]
                        }
                    ]
                }
            });

            const botReply =
                response.data?.candidates?.[0]?.content?.parts?.[0]?.text ||
                "Sorry, I couldn't process that.";

            setMessages((prev) => [...prev, { sender: "bot", text: botReply }]);
        } catch (error) {
            console.error("Error:", error);
            setMessages((prev) => [
                ...prev,
                { sender: "bot", text: "Something went wrong. Please try again." }
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
                            <p className="text-sm font-semibold text-slate-800">Support Chat</p>
                            <p className="text-xs text-slate-500">We usually reply in a few minutes</p>
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

                    {/* Scrollable Chat Messages */}
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
                                {msg.text}
                            </div>
                        ))}
                    </div>

                    {/* Input Box */}
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
