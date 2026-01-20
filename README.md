# Student Orientation System IA (SOSI) 🚀

SOSI is an intelligent platform designed to help students discover their ideal academic and career paths through AI-powered analysis of their school reports and transcripts.

## 🌟 Key Features

- **Automated Transcript Analysis**: Upload school reports in PDF or image format.
- **AI-Powered Insights**: Uses intelligent algorithms to extract academic performance and behavioral comments.
- **Soft Skills Mapping**: Visualizes key traits like rigor, critical thinking, leadership, and creativity.
- **Personalized Recommendations**: Suggests matching fields of study (e.g., Law, Economics) based on the student's unique profile.
- **Multilingual Support**: Interactive interface supporting multiple languages.

## 🏗️ Technical Architecture

The project is built with a modern decoupled architecture:

### Frontend (React + Vite)
- **Framework**: React 19
- **Bundler**: Vite
- **Routing**: React Router 7
- **Styling**: Vanilla CSS (Modern design)
- **State Management**: Context API (for localization)

### Backend (FastAPI)
- **Language**: Python 3
- **Framework**: FastAPI
- **Engine**: Custom analysis logic (simulated OCR & NLP for profile matching)
- **CORS**: Configured for seamless communication with the frontend

## 🚀 Getting Started

### Prerequisites
- Node.js (v18+)
- Python (3.9+)

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/Eliott243/student_orientation_ia.git
   cd student_orientation_ia
   ```

2. **Frontend Setup**
   ```bash
   cd client
   npm install
   npm run dev
   ```

3. **Backend Setup**
   ```bash
   cd ../server
   # Create a virtual environment
   python -m venv venv
   source venv/bin/scripts/activate  # On Windows: .\venv\Scripts\activate
   pip install fastapi uvicorn python-multipart
   uvicorn app.main:app --reload
   ```

## 🛠️ Usage

1. Open your browser and navigate to `http://localhost:5173`.
2. Click on the **Upload** section.
3. Select a school report (PDF or Image).
4. Wait for the AI analysis to complete.
5. Explore your **Soft Skills Radar** and **Match Recommendations**.

## 📄 License
Custom project by Eliott243.

---
*Empowering the next generation with data-driven orientation.*
