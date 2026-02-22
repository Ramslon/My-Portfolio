# My Portfolio

A personal developer portfolio built with React, Vite, Tailwind CSS, and Framer Motion.

## Features

- Responsive single-page layout
- Dark/light theme toggle
- Hero section with animated profile card
- About, Experience, Education, Skills, Projects, Blog, Testimonials, Interests, and Contact sections
- Project filtering by category (`Web`, `Mobile`, `Full Stack`)
- Animated UI elements and smooth in-view transitions
- Contact form integration with EmailJS

## Tech Stack

- React
- Vite
- Tailwind CSS
- Framer Motion
- React Icons
- EmailJS

## Getting Started

### 1) Clone the repository

```bash
git clone https://github.com/Ramslon/My-Portfolio.git
cd My-Portfolio
```

### 2) Install dependencies

```bash
npm install
```

### 3) Run the development server

```bash
npm run dev
```

Open the local URL shown in your terminal.

## Build for Production

```bash
npm run build
```

Preview production build locally:

```bash
npm run preview
```

## Environment Variables (EmailJS)

Create a `.env` file in the project root:

```env
VITE_EMAILJS_SERVICE_ID=your_service_id
VITE_EMAILJS_TEMPLATE_ID=your_template_id
VITE_EMAILJS_PUBLIC_KEY=your_public_key
```

Restart the dev server after updating environment variables.

## Customization

- Update personal content in `src/components/*`
- Replace profile image at `src/assets/profile.jpg`
- Update social links in `src/components/Hero.jsx`
- Add/edit projects in `src/components/Projects.jsx`
- Add/edit blog posts in `src/components/Blog.jsx`

## License

This project is for personal portfolio use.
