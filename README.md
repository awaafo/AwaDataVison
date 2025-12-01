AwaDataVison Analytics - SWE Capstone Project

A professional data visualization and analytics dashboard with AI-powered insights. Upload CSV files and generate interactive charts with automated data analysis.
🚀 Live Demo

Deployed Link: [Your Vercel URL Here]
✨ Features

Core Functionality

* 📊 CSV Data Upload: Drag-and-drop or click to upload CSV files
* 📋 Interactive Data Table: View uploaded data with sortable columns
* 📈 Dynamic Visualizations:
    * Bar Chart for primary data visualization
    * Line Chart for trend analysis
* 🤖 AI-Powered Insights: Generate intelligent data summaries and recommendations using Google Gemini
* ⚠️ Error Handling: Graceful handling of invalid files, empty data, and API errors
* 📱 Responsive Design: Optimized for desktop, tablet, and mobile devices
* ♿ Accessibility: WCAG compliant with proper ARIA labels and keyboard navigation
Professional Polish

* Custom favicon and branding
* Professional footer with contact information
* Modern UI with smooth animations
* Dark theme optimized for data visualization
🛠️ Tech Stack

* Frontend: React 18, TypeScript, Vite
* Styling: Tailwind CSS, shadcn/ui components
* Charts: Recharts
* Backend: Supabase
* AI Integration: Google Gemini API
* Deployment: Vercel
📋 Capstone Requirements Checklist

* ✅ Deployment: Publicly accessible via Vercel
* ✅ Data Upload: CSV file upload with table rendering
* ✅ Visualization: Bar and Line charts using uploaded data
* ✅ AI/Insights: AI-powered data analysis and insights
* ✅ Error Handling: Comprehensive error handling for files, data, and API
* ✅ Responsive Design: Mobile and desktop optimized
* ✅ Accessibility: Keyboard navigation, ARIA labels, color contrast
* ✅ Professional Polish: Custom favicon, footer with contact info
* ✅ Documentation: Complete README with setup and features
* ✅ Code Quality: Organized, commented, no console errors
🚀 Getting Started

Prerequisites

* Node.js 18+ and npm installed
* Git installed
Installation

1. Clone the repository:
git clone https://github.com/awaafo/data-analysis-dashboard-Awa.git
cd data-analysis-dashboard-Awa

2. Install dependencies:
npm install

3. Create a .env file in the root directory with your Supabase credentials:
VITE_SUPABASE_PROJECT_ID=your_project_id
VITE_SUPABASE_PUBLISHABLE_KEY=your_publishable_key
VITE_SUPABASE_URL=your_supabase_url

4. Start the development server:
npm run dev

5. Open http://localhost:5173 in your browser
📖 Usage

1. Upload Data:
    * Drag and drop a CSV file or click "Select File"
    * Supported format: CSV files with headers
2. View Data:
    * Browse your data in the interactive table
    * Click column headers to sort
3. Analyze Visualizations:
    * View Bar Chart for categorical comparisons
    * View Line Chart for trends
4. Generate Insights:
    * Click "Generate AI Insights"
    * Review AI-powered analysis and recommendations
📁 Project Structure

├── public/
│   └── favicon.png
├── src/
│   ├── components/
│   │   ├── ChartsDisplay.tsx    # Chart visualizations
│   │   ├── DataTable.tsx        # Sortable data table
│   │   ├── FileUpload.tsx       # CSV upload component
│   │   ├── Footer.tsx           # Professional footer
│   │   └── InsightsPanel.tsx    # AI insights display
│   ├── pages/
│   │   └── Index.tsx            # Main dashboard page
│   └── integrations/
│       └── supabase/            # Backend integration
├── supabase/
│   └── functions/
│       └── generate-insights/   # AI edge function
└── README.md

🎨 Sample Data Format

Your CSV should have headers in the first row:
Name,Value,Category,Date
Product A,150,Electronics,2024-01-15
Product B,230,Clothing,2024-01-16
Product C,180,Electronics,2024-01-17

🚀 Deployment

This project is deployed on Vercel:
1. Push code to GitHub
2. Connect repository to Vercel
3. Deploy automatically on push
4. Environment variables are managed in Vercel dashboard
👥 Author

Awa Afo
* Email: hireawaafo@gmail.com
* GitHub: @awaafo
* LinkedIn: Awa Afo
📄 License

This project was created as part of a Software Engineering Capstone Project.
🙏 Acknowledgments

* UI components from shadcn/ui
* Charts powered by Recharts
* AI powered by Google Gemini API
