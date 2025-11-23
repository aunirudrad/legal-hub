# The Legal Hub

A modern, professional law firm website built with React and Vite, featuring a clean design and comprehensive legal services presentation.

## 🌐 Live Demo

**[View Live Site](https://legal-hub.surge.sh/)**

## 📋 Overview

The Legal Hub is a responsive law firm website that showcases legal services, attorney profiles, blog articles, and provides easy client contact options. Built with modern web technologies for optimal performance and user experience.

## ✨ Features

- **Responsive Design**: Fully responsive layout that works on all devices
- **Modern UI/UX**: Clean, professional design with smooth animations
- **Attorney Profiles**: Dedicated section showcasing legal team
- **Blog System**: Dynamic blog with legal articles and insights
- **Contact Forms**: Easy-to-use appointment booking and contact forms
- **Case Studies**: Portfolio of successful legal cases
- **Interactive Chat Widget**: Real-time client communication
- **SEO Optimized**: Built with SEO best practices

## 🛠️ Tech Stack

- **Frontend**: React 18 + Vite
- **Styling**: Tailwind CSS
- **Routing**: React Router DOM
- **Build Tool**: Vite
- **Deployment**: Surge.sh
- **Linting**: ESLint

## 🏗️ Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── AboutIntro.jsx
│   ├── AppointmentForm.jsx
│   ├── BlogCard.jsx
│   ├── BlogSection.jsx
│   ├── CaseStudiesSection.jsx
│   ├── ChatWidget.jsx
│   ├── Footer.jsx
│   ├── HeroSection.jsx
│   ├── Navbar.jsx
│   └── OurAttorneys.jsx
├── pages/               # Page components
│   ├── About.jsx
│   ├── Attorneys.jsx
│   ├── Blog.jsx
│   ├── Contact.jsx
│   └── Home.jsx
├── assets/              # Static assets
├── backend/             # Backend server files
└── App.jsx              # Main application component
```

## 🚀 Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd the-legal-hub
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and visit `http://localhost:5173`

## 📝 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## 🎨 Key Components

### BlogCard
Redesigned with modern Tailwind CSS styling featuring:
- Gradient date badges
- Smooth hover animations
- Interactive elements
- Professional card layout

### HeroSection
Dynamic hero content with:
- Compelling call-to-action
- Professional imagery
- Responsive design

### Attorney Profiles
Comprehensive attorney showcase with:
- Professional photos
- Detailed bios
- Contact information

## 🚀 Deployment

The site is deployed on Surge.sh for fast, reliable hosting:

```bash
npm run build
surge dist/ legal-hub.surge.sh
```

## 📱 Responsive Design

The website is fully responsive and optimized for:
- Desktop (1200px+)
- Tablet (768px - 1199px)
- Mobile (320px - 767px)

## 🔧 Customization

The project uses Tailwind CSS for styling, making it easy to customize:
- Colors and themes in `tailwind.config.js`
- Component styles in individual component files
- Global styles in `src/index.css`

## 📄 License

This project is licensed under the MIT License.

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📞 Contact

For any inquiries about this project, please visit [The Legal Hub](https://legal-hub.surge.sh/) or contact through the website's contact form.
