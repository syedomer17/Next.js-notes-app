# 📝 Quick Notes

A clean, modern note-taking web app built with **Next.js 15**, **TypeScript**, **Tailwind CSS**, and **MongoDB**.  
It supports server-side rendering (SSR), dynamic theming, and persistent storage (no localStorage).

![Next.js](https://img.shields.io/badge/Next.js-000?logo=next.js&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?logo=typescript&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/TailwindCSS-06B6D4?logo=tailwindcss&logoColor=white)
![MongoDB](https://img.shields.io/badge/MongoDB-47A248?logo=mongodb&logoColor=white)

---

## ✨ Features

✅ Create, edit, and delete notes  
✅ Server-side rendered notes list  
✅ Responsive, accessible UI  
✅ Styled with Tailwind CSS  
✅ Type-safe with TypeScript  
✅ MongoDB for persistent storage  

---

## 🚀 Getting Started

### 1️⃣ Clone the repository

```bash
git clone git@github.com:syedomer17/Next.js-notes-app.git
cd Next.js-notes-app.git && cd my-notes
````

### 2️⃣ Install dependencies

```bash
npm install
```

### 3️⃣ Create `.env`

Create a `.env` file in the root:

```
MONGODB_URI=mongodb+srv://<username>:<password>@cluster.mongodb.net/notes
NEXT_PUBLIC_BASE_URL=http://localhost:3000
```

> **Note:** Replace `<username>` and `<password>` with your MongoDB credentials.

### 4️⃣ Run the dev server

```bash
npm run dev
```

Visit [http://localhost:3000](http://localhost:3000).

---

## 🗂️ Folder Structure

```
/
├── app/
│   ├── components/
│   │   ├── NoteCard.tsx
│   │   └── ThemeToggle.tsx
│   ├── api/
│   │   └── notes/
│   │       ├── [id]/
│   │       │   └── route.ts
│   │       └── route.ts
│   ├── notes/
│   │   ├── page.tsx
│   │   └── new/
│   │       └── page.tsx
│   ├── page.tsx
│   └── globals.css
├── lib/
│   └── mongodb.ts
├── models/
│   └── Note.ts
├── package.json
├── tailwind.config.ts
└── tsconfig.json
```

---

## 🛠️ Tech Stack

* **Next.js 15** — App Router, SSR, API Routes
* **TypeScript**
* **Tailwind CSS**
* **MongoDB**

---
