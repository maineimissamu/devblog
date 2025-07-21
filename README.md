# My Devblog

This is the repository for my blog. When I deploy it, I'll leave the link here. 

## Prerequisites

-Node.js v18+

-npm or yarn

-Git

## Installation Guide

### 1. Clone the repository
```bash
git clone https://github.com/maineimissamu/devblog.git
cd devblog
```

### 2. Configure backend
```bash
cd backend
npm install
cp .env.example .env
npm run dev
```

### 3. Configure Frontend
```bash
cd ../frontend
npm install
npm run dev
```

## Usage

Once the project is installed:

-The backend will run on `http://localhost:3001`
-The frontend will run on `http://localhost:5173`


## Structure of the project

```
devblog/
├── backend/ 
│ ├── server.js # Main server file
│ ├── package.json # Backend dependencies
│ ├── .env.example # Environment variables template
│ ├── .gitignore # Git ignore rules
├── frontend/ 
│ ├── src/
│ │ ├── App.jsx # Main React component
│ │ ├── main.jsx # React entry point
│ │ ├── index.css # Global styles
│ │ └── assets/ # Static assets 
│ ├── public/ 
│ ├── package.json # Frontend dependencies
│ ├── index.html # HTML template
│ ├── vite.config.js # Vite configuration
│ ├── eslint.config.js # ESLint configuration
├── README.md # Project documentation
├── package.json # Root package file
```

## Technologies

**Backend:**
- Express.js
- Node.js

**Frontend:**
- React
- Vite