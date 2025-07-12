# ♻️ ReWear – Community Clothing Exchange

ReWear is a web-based platform that promotes **sustainable fashion** by enabling users to exchange unused clothing through **direct swaps** or a **point-based redemption system**. The goal is to reduce textile waste and encourage reusability through community-driven garment sharing.

---

## 👥 Team Members

- Yugansh Thacker  
- Momal Makwana  
- Hardeepsinh Jadeja 
- Krish Timbadiya 

---

## 🔍 Overview

ReWear lets users:
- Upload and list clothing items
- Swap items directly or redeem using points
- View item details, track ongoing and completed swaps
- Contribute to reducing textile waste through circular fashion

---

## 🚀 Features

### 👤 User Features
- **Authentication** (Email/Password)
- **Landing Page**
  - Platform intro
  - Calls-to-action: “Start Swapping”, “Browse Items”, “List an Item”
- **User Dashboard**
  - Profile details + points balance
  - Uploaded items
  - Ongoing & completed swaps
- **Item Details Page**
  - Image gallery + description
  - Swap or redeem options
- **Add New Item**
  - Upload images
  - Title, description, category, size, tags, and condition
- **Swap System**
  - Send/Accept/Reject Swap Requests
  - Points-based item redemption

### 🛡️ Admin Features
- Moderate item listings (approve/reject)
- Remove spam/inappropriate content
- View activity logs (pending/approved/cancelled swaps)
- Platform-wide messages/alerts
- Lightweight admin dashboard

---

## 🎨 Mockup

🖼️ [View UI Mockup](https://app.excalidraw.com/l/65VNwvy7c4X/zEqG7IJrg0)

---

## 🧰 Tech Stack

### Frontend
- [Vite](https://vitejs.dev/) – Lightning-fast build tool
- [React](https://reactjs.org/) + [TypeScript](https://www.typescriptlang.org/) – UI & type safety
- [Tailwind CSS](https://tailwindcss.com/) – Utility-first styling
- [shadcn/ui](https://ui.shadcn.dev/) – Accessible & beautiful UI components

### Backend
- [Node.js](https://nodejs.org/) + [Express](https://expressjs.com/) – RESTful API server

### Database
- [PostgreSQL](https://www.postgresql.org/) – Relational database

### Tools
- Git & GitHub – Version control
- Prisma ORM – Database interaction


---

## 📦 Installation

```bash
# Clone the repo
git clone https://github.com/your-username/rewear-platform.git
cd closet-swap-hub

# Install frontend dependencies
npm install
npm run dev

# Install backend dependencies
cd my-app
cd backend
npm install
npm run dev
