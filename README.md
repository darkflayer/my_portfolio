# 🚀 Hemant Singh - Portfolio Website

A modern, responsive portfolio website showcasing my skills, projects, and experience as a Software Developer. Built with cutting-edge technologies and deployed on Render.

## ✨ Live Demo

🌐 **Portfolio**:https://my-portfolio-a5g7.onrender.com

## 🎯 Features

### �� **Modern Design**
- **Dark Theme**: Elegant black and dark yellow color scheme
- **Responsive Design**: Fully responsive across all devices
- **Smooth Animations**: Framer Motion powered animations
- **Interactive UI**: Hover effects and micro-interactions

### 📱 **Sections**
- **Hero Section**: Eye-catching introduction with call-to-action
- **About**: Personal story and background
- **Skills**: Categorized technical skills with progress bars
- **Projects**: Showcase of featured projects with live demos
- **Experience**: Professional journey and internships
- **Education**: Academic background and achievements
- **Contact**: Contact form with email integration

### 🔧 **Technical Features**
- **Contact Form**: Functional contact form with email notifications
- **Resume Download**: PDF resume generation and download
- **Database Integration**: PostgreSQL with Drizzle ORM
- **Email Service**: Nodemailer integration for contact notifications
- **Real-time Updates**: Live data fetching with React Query

## 🛠️ Tech Stack

### **Frontend**
- **React 18** - Modern React with hooks
- **TypeScript** - Type-safe development
- **Tailwind CSS** - Utility-first CSS framework
- **Radix UI** - Accessible component primitives
- **Framer Motion** - Smooth animations
- **React Query** - Server state management
- **React Hook Form** - Form handling with validation

### **Backend**
- **Node.js** - JavaScript runtime
- **Express.js** - Web application framework
- **TypeScript** - Type-safe backend development
- **Drizzle ORM** - Type-safe database queries
- **PostgreSQL** - Relational database (Supabase)
- **Nodemailer** - Email service integration

### **Development & Deployment**
- **Vite** - Fast build tool and dev server
- **ESBuild** - Fast TypeScript bundling
- **Render** - Cloud hosting platform
- **Supabase** - Database and authentication
- **Git** - Version control

## 🚀 Getting Started

### Prerequisites
- Node.js (v18 or higher)
- npm or yarn
- PostgreSQL database (Supabase recommended)

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/portfolio-website.git
   cd portfolio-website
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   Create a `.env` file in the root directory:
   ```env
   # Database
   DATABASE_URL=your_supabase_connection_string
   
   # Email Configuration
   CONTACT_EMAIL=your_email@gmail.com
   EMAIL_FROM=your_email@gmail.com
   SMTP_HOST=smtp.gmail.com
   SMTP_PORT=587
   SMTP_USER=your_email@gmail.com
   SMTP_PASS=your_app_password
   
   # Frontend (if deploying separately)
   VITE_API_URL=http://localhost:5000
   ```

4. **Set up the database**
   ```bash
   npm run db:push
   ```

5. **Run the development server**
   ```bash
   npm run dev
   ```

6. **Open your browser**
   Navigate to `http://localhost:5000`

## 📁 Project Structure

├── client/ # React frontend
│ ├── src/
│ │ ├── components/ # React components
│ │ ├── hooks/ # Custom React hooks
│ │ ├── lib/ # Utilities and constants
│ │ └── pages/ # Page components
│ └── index.html
├── server/ # Express backend
│ ├── index.ts # Server entry point
│ ├── routes.ts # API routes
│ ├── storage.ts # Database operations
│ └── vite.ts # Vite integration
├── shared/ # Shared types and schemas
│ └── schema.ts # Database schemas
├── migrations/ # Database migrations
└── dist/ # Build output





## 🚀 Deployment

### Render Deployment

1. **Connect your GitHub repository** to Render
2. **Create a new Web Service**
3. **Configure environment variables** in Render dashboard
4. **Set build command**: `npm run build`
5. **Set start command**: `npm start`

### Environment Variables for Production

In your Render dashboard, add these environment variables:

```env
DATABASE_URL=your_supabase_connection_string
CONTACT_EMAIL=your_email@gmail.com
EMAIL_FROM=your_email@gmail.com
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=your_email@gmail.com
SMTP_PASS=your_app_password
NODE_ENV=production
```

## 🔧 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm start` - Start production server
- `npm run check` - TypeScript type checking
- `npm run db:push` - Push database schema changes

## �� Contact Form Setup

The contact form requires email configuration. For Gmail:

1. **Enable 2-Factor Authentication**
2. **Generate App Password**
3. **Use App Password** in `SMTP_PASS`

## �� Customization

### Personal Information
Edit `client/src/lib/constants.tsx` to update:
- Personal details
- Skills and experience
- Projects
- Social links

### Styling
- **Colors**: Modify Tailwind config in `tailwind.config.ts`
- **Theme**: Update color scheme in components
- **Animations**: Customize Framer Motion animations

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## �� Acknowledgments

- **Radix UI** for accessible components
- **Framer Motion** for smooth animations
- **Tailwind CSS** for utility-first styling
- **Drizzle ORM** for type-safe database queries
- **Render** for reliable hosting

## �� Contact

- **Email**: rautanhemu@gmail.com
- **LinkedIn**: [Hemant Singh](https://www.linkedin.com/in/hemant-singh-b48815239/)
- **GitHub**: [@darkflayer](https://github.com/darkflayer)
- **Portfolio**: [https://my-portfolio-a5g7.onrender.com](https://my-portfolio-a5g7.onrender.com)

---

⭐ **Star this repository if you found it helpful!**



![Screenshot (1328)](https://github.com/user-attachments/assets/62310bb1-b70b-424b-a845-a2db19a7856c)
![Screenshot (1331)](https://github.com/user-attachments/assets/ddb754b1-b0b1-421e-a963-4a90978a2c55)
![Screenshot (1330)](https://github.com/user-attachments/assets/fc982462-6163-4739-a398-dd77f5d082b8)
![Screenshot (1329)](https://github.com/user-attachments/assets/580bb4ae-0086-4d56-9c1d-38f43ef102bc)

