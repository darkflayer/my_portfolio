# 🚀 Portfolio Deployment Guide

## **Deployment Strategy**
- **Backend:** Render (Express.js server)
- **Frontend:** Vercel (React app)
- **Database:** Supabase (already configured)

---

## **Step 1: Prepare GitHub Repository**

### **Upload the FULL repository to GitHub**
Upload the entire `ProfessionalShowcase` folder, not just specific directories.

**Repository Structure:**
```
ProfessionalShowcase/
├── client/          (React frontend)
├── server/          (Express backend)
├── shared/          (Shared schemas)
├── package.json     (Root dependencies)
├── vite.config.ts   (Build config)
└── ... (other config files)
```

---

## **Step 2: Deploy Backend to Render (FIRST)**

### **Why Backend First?**
You need the backend URL to configure the frontend's API calls.

### **Render Deployment Steps:**

1. **Go to [Render.com](https://render.com)** and sign up/login
2. **Click "New +" → "Web Service"**
3. **Connect your GitHub repository**
4. **Configure the service:**
   - **Name:** `your-portfolio-backend`
   - **Root Directory:** Leave empty (uses root)
   - **Runtime:** `Node`
   - **Build Command:** `npm install && npm run build`
   - **Start Command:** `npm start`
   - **Plan:** Free (or paid if needed)

5. **Add Environment Variables:**
   ```
   DATABASE_URL=your_supabase_postgres_url
   CONTACT_EMAIL=your_email@gmail.com
   EMAIL_FROM=your_email@gmail.com
   SMTP_HOST=smtp.gmail.com
   SMTP_PORT=587
   SMTP_USER=your_email@gmail.com
   SMTP_PASS=your_app_password
   NODE_ENV=production
   ```

6. **Deploy!** Render will give you a URL like: `https://your-portfolio-backend.onrender.com`

---

## **Step 3: Deploy Frontend to Vercel**

### **Vercel Deployment Steps:**

1. **Go to [Vercel.com](https://vercel.com)** and sign up/login
2. **Click "New Project"**
3. **Import your GitHub repository**
4. **Configure the project:**
   - **Framework Preset:** `Vite`
   - **Root Directory:** `client`
   - **Build Command:** `npm run build`
   - **Output Directory:** `dist/public`
   - **Install Command:** `npm install`

5. **Add Environment Variables:**
   ```
   VITE_API_URL=https://your-portfolio-backend.onrender.com
   ```
   (Replace with your actual Render backend URL)

6. **Deploy!** Vercel will give you a URL like: `https://your-portfolio.vercel.app`

---

## **Step 4: Test Your Deployment**

### **Test Contact Form:**
- Go to your Vercel frontend URL
- Navigate to the Contact section
- Submit a test message
- Check if you receive the email notification

### **Test Resume Download:**
- Click the "Download Resume" button
- Verify the PDF downloads correctly

### **Test Database:**
- Check your Supabase dashboard to see if contact submissions are being stored

---

## **Step 5: Custom Domain (Optional)**

### **Vercel Custom Domain:**
1. Go to your Vercel project dashboard
2. Click "Settings" → "Domains"
3. Add your custom domain (e.g., `portfolio.yourname.com`)
4. Follow the DNS configuration instructions

---

## **Troubleshooting**

### **Common Issues:**

1. **Backend not responding:**
   - Check Render logs for errors
   - Verify environment variables are set correctly
   - Ensure database connection is working

2. **Frontend can't reach backend:**
   - Verify `VITE_API_URL` is set correctly in Vercel
   - Check if backend URL is accessible in browser
   - Ensure CORS is configured properly

3. **Contact form not working:**
   - Check browser console for errors
   - Verify email credentials in Render environment variables
   - Check Supabase database connection

4. **Resume download failing:**
   - Ensure resume file is uploaded to `server/public/resume/`
   - Check file permissions and path

---

## **Environment Variables Reference**

### **Backend (Render):**
```
DATABASE_URL=postgresql://username:password@host:port/database
CONTACT_EMAIL=your_email@gmail.com
EMAIL_FROM=your_email@gmail.com
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=your_email@gmail.com
SMTP_PASS=your_app_password
NODE_ENV=production
```

### **Frontend (Vercel):**
```
VITE_API_URL=https://your-backend-name.onrender.com
```

---

## **Final URLs**

After deployment, you'll have:
- **Frontend:** `https://your-portfolio.vercel.app`
- **Backend:** `https://your-backend-name.onrender.com`
- **Database:** Your Supabase dashboard

---

**🎉 Congratulations! Your portfolio is now live!** 