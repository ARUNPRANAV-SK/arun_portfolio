# Arun Pranav SK - Electronics & Communication Engineering Portfolio

A modern, colorful, highly responsive, and premium personal portfolio website designed for **Arun Pranav SK**, an Electronics and Communication Engineering (ECE) student specializing in Embedded Systems, IoT, Antenna Design, and Raspberry Pi automation.

Developed using **Next.js 15 (App Router)**, **TypeScript**, **Tailwind CSS**, and **Framer Motion**.

---

## 🚀 Key Features

* **High-Tech Aesthetic**: Features a sleek dark theme overlayed with responsive engineering grids and glowing mesh gradients (cyan, purple, and blue).
* **Interactive Hero Section**: Contains a dynamic, custom typing effect highlighting core engineering disciplines and a rotating, animated radial overlay enclosing the profile image.
* **Chronological ECE Timeline**: Combines academic qualifications (B.E. ECE at Dr. N.G.P IT) and technical internships (Robomiracle Technologies) along with key achievements.
* **Modular Projects Grid**: Detailed project cards with custom icons, status badges ("Designed & Fabricated", "Completed"), and a full-overlay specifications modal.
* **Custom Skills Dashboard**: Interactive tab-controlled skill bars (Technical Skills, Software/Tools, and Soft Skills) that animate when scrolled into view.
* **Interactive Contact Form**: A glassmorphic feedback form with live validations and a success state featuring a celebration burst of `canvas-confetti`.
* **Complete SEO Optimization**: Configured metadata, Open Graph cards, and search tags tailored to hardware and systems engineering keywords.

---

## 🛠️ Tech Stack & Packages

* **Framework**: Next.js 15.5 (App Router)
* **Language**: TypeScript
* **Styling**: Tailwind CSS v4 & PostCSS
* **Animations**: Framer Motion
* **Icons**: Lucide React
* **Effects**: Canvas Confetti

---

## 💻 Running Locally

### 1. Prerequisites
Ensure you have **Node.js LTS** (v18.18+ or v24.x) and **npm** installed on your system.

### 2. Install Dependencies
Run the following command in the project root:
```bash
npm install
```

### 3. Start the Development Server
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser to view the application.

---

## ☁️ Deploying to Vercel

Since the code is already uploaded to your GitHub repository, deploying to Vercel takes less than a minute:

1. **Log in to Vercel**: Go to [Vercel](https://vercel.com/) and sign up or log in using your GitHub account.
2. **Import Project**: Click on **"New Project"** (or **"Add New" -> "Project"**).
3. **Connect Repository**: Import the `arun_portfolio` repository from your GitHub account lists.
4. **Deploy**: Leave all settings (Framework Preset will automatically detect Next.js) as default and click **"Deploy"**.
5. **Continuous Deployment**: Any changes you commit and push to the `main` branch of your GitHub repository will automatically build and update the live website!

---

## 📂 Project Structure

```text
├── public/                 # Static assets (Resume PDF, Profile picture)
├── src/
│   ├── app/
│   │   ├── globals.css     # Global styles, scrollbars, and grid animations
│   │   ├── layout.tsx      # Entry HTML layout, Google Fonts, and SEO Metadata
│   │   └── page.tsx        # Portfolio core page layout
│   └── components/
│       ├── About.tsx       # Bio & Core Interests cards
│       ├── Certifications.tsx # Professional badges, workshops, & symposia
│       ├── Contact.tsx     # Validated contact form & confetti triggers
│       ├── Footer.tsx      # Social footers & back-to-top buttons
│       ├── Hero.tsx        # Typing effect, profile avatar, & CTA downloads
│       ├── Navbar.tsx      # Active section tracker & mobile hamburger menu
│       ├── Projects.tsx    # Showcase cards & project spec modals
│       ├── Skills.tsx      # Skill-bar tabs & load indicators
│       └── Timeline.tsx    # Education & Internship timeline cards
├── package.json            # Scripts & project dependencies
└── tsconfig.json           # TypeScript configuration configurations
```

---

## 👨‍💻 Author

**Arun Pranav SK**
* Email: [arunpranav.sk@gmail.com](mailto:arunpranav.sk@gmail.com)
* LinkedIn: [linkedin.com/in/arunpranav](https://linkedin.com/in/arunpranav)
* GitHub: [github.com/ARUNPRANAV-SK](https://github.com/ARUNPRANAV-SK)
