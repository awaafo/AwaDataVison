
---

# **AwaDataVison Analytics – SWE Capstone Project**

A professional **data visualization and analytics dashboard** with **AI-powered insights**. Upload CSV files and instantly generate interactive charts with automated data analysis.

---

## 🚀 **Live Demo**

**Deployed Link:** [https://awa-data-vison.vercel.app](https://awa-data-vison.vercel.app)

---

## ✨ **Features**

### **Core Functionality**

* 📊 **CSV Data Upload** – Drag-and-drop or click to upload CSV files
* 📋 **Interactive Data Table** – Sortable, clean table rendering
* 📈 **Dynamic Visualizations**

  * **Bar Chart** for primary data visualization
  * **Line Chart** for trend analysis
* 🤖 **AI-Powered Insights** – Smart summaries and recommendations using **Google Gemini**
* ⚠️ **Error Handling** – Invalid file detection, empty data checks, API error handling
* 📱 **Responsive Design** – Works seamlessly on **desktop, tablet, and mobile**
* ♿ **Accessibility** – WCAG-compliant labels, keyboard navigation, and color contrast


---

## 🛠️ **Tech Stack**

* **Frontend:** React 18, TypeScript, Vite
* **Styling:** Tailwind CSS, shadcn/ui
* **Charts:** Recharts
* **Backend:** Supabase
* **AI Integration:** Google Gemini API
* **Deployment:** Vercel

---

## 📋 **Capstone Requirements Checklist**

* ✅ **Deployment** – Publicly accessible via Vercel
* ✅ **Data Upload** – CSV upload + table rendering
* ✅ **Visualization** – Bar & Line charts
* ✅ **AI/Insights** – AI-generated data analysis
* ✅ **Error Handling** – For files, data, and API
* ✅ **Responsive Design** – Desktop + mobile
* ✅ **Accessibility** – ARIA labels & keyboard navigation
* ✅ **Professional Polish** – Favicon + footer
* ✅ **Documentation** – Complete README with demo link
* ✅ **Code Quality** – Organized, readable, and clean

---

## 🚀 **Getting Started**

### **Prerequisites**

* **Node.js 18+**
* **npm**
* **Git**

---

### **Installation**

1. **Clone the repository**

   ```bash
   git clone https://github.com/awaafo/data-analysis-dashboard-Awa.git
   cd data-analysis-dashboard-Awa
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Create a `.env` file** with your Supabase credentials:

   ```
   VITE_SUPABASE_PROJECT_ID=your_project_id
   VITE_SUPABASE_PUBLISHABLE_KEY=your_publishable_key
   VITE_SUPABASE_URL=your_supabase_url
   ```

4. **Start the development server**

   ```bash
   npm run dev
   ```

5. Open **[http://localhost:5173](http://localhost:5173)** in your browser.

---

## 📖 **Usage**

1. **Upload Data**

   * Drag-and-drop CSV or click **"Select File"**
   * CSV must contain headers

2. **View Data**

   * Explore the **interactive, sortable table**

3. **Analyze Visualizations**

   * **Bar Chart** for category comparisons
   * **Line Chart** for trend analysis

4. **Generate AI Insights**

   * Click **“Generate AI Insights”**
   * Review intelligent summaries & recommendations

---

## 📁 **Project Structure**

```
├── public/
│   └── favicon.png
├── src/
│   ├── components/
│   │   ├── ChartsDisplay.tsx      # Chart visualizations
│   │   ├── DataTable.tsx          # Sortable data table
│   │   ├── FileUpload.tsx         # CSV upload component
│   │   ├── Footer.tsx             # Footer UI
│   │   └── InsightsPanel.tsx      # AI insights display
│   ├── pages/
│   │   └── Index.tsx              # Main dashboard page
│   └── integrations/
│       └── supabase/              # Backend integration
├── supabase/
│   └── functions/
│       └── generate-insights/     # AI edge function
└── README.md
```

---

## 🎨 **Sample Data Format**

Your CSV should include headers:

```
Name,Value,Category,Date
Product A,180,Electronics,2025-01-19
Product B,230,Clothing,2024-01-16
Product C,180,Electronics,2023-06-17
```

---

## 🚀 **Deployment**

This project is deployed on **Vercel**.

1. Push code to GitHub
2. Connect repo to Vercel
3. Auto-deploy on push
4. Add environment variables in Vercel dashboard

---

## 👥 **Author**

**Awa Afo**

* 📧 Email: **[hireawaafo@gmail.com](mailto:hireawaafo@gmail.com)**
* 🐙 GitHub: **@awaafo**
* 💼 LinkedIn: **Awa Afo**

---

## 📄 **License**

This project was created as part of a **Software Engineering Capstone Project**.

---

## 🙏 **Acknowledgments**

* UI components from **shadcn/ui**
* Charts powered by **Recharts**
* AI powered by **Google Gemini API**

