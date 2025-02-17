## 🎯 **Project Overview**  
This **To-Do List** app allows users to:
- ✅ **Fetch** tasks from the [JSONPlaceholder API](https://jsonplaceholder.typicode.com/todos)  
- ✅ **Add new tasks** with an input field  
- ✅ **Mark tasks as completed**  
- ✅ **Delete tasks**  
- ✅ **Filter tasks**: `All`, `Completed`, `Pending`  
- ✅ **Persist user tasks** in **Local Storage**  
- ✅ **Use modern UI elements & animations**  
- ✅ **Enhance UX with `react-icons` for a better design**  

---

## 🛠 **Tech Stack**
- **React.js** (Functional Components + Hooks)  
- **TypeScript** (Strong Type Safety)  
- **Axios** (Fetching data from API)  
- **Local Storage** (Persisting user tasks)  
- **CSS** (Custom styling & animations)  
- **React Icons** (For enhanced UI)  

---

## 🚀 **Installation & Setup**
1️⃣ Clone the Repo  
```bash
git clone https://github.com/your-repo/todo-app.git
cd todo-app
```

2️⃣ Install Dependencies  
```bash
npm install
```

3️⃣ Run the Application  
```bash
npm start
```
The app will launch at `http://localhost:3000`

---

## 📌 **Folder Structure**
```
todo-app/
│── public/
│── src/
│   ├── components/
│   │   ├── TaskItem.tsx
│   │   ├── TaskList.tsx
│   │   ├── TaskForm.tsx
│   ├── pages/
│   │   ├── TodoPage.tsx
│   ├── utils/
│   │   ├── localStorage.ts
│   ├── types.ts
│   ├── App.tsx
│   ├── index.tsx
│   ├── styles.css
│── package.json
│── tsconfig.json
│── .gitignore
│── README.md
```

---

## 💡 **Features Implemented**
### 📨 **Fetching Data from API**
We fetch initial tasks from the [JSONPlaceholder API](https://jsonplaceholder.typicode.com/todos?_limit=5).  

### 📝 **Adding Tasks**
Users can enter a task and click the **`Add (+)`** button to store it in local state & local storage.

### ✅ **Mark Task as Completed**
Users can **mark tasks complete** using the ✅ **check icon**, which visually updates in the UI.

### ❌ **Deleting Tasks**
Users can **permanently delete** tasks using the **trash bin icon 🗑**.

### 🔎 **Filtering Tasks**
Switch between `ALL | COMPLETED | PENDING` using **filter buttons** (`FaList`, `FaCheckCircle`, `FaTimesCircle`).

### 💾 **Local Storage Persistence**
Tasks **persist across page refreshes**, thanks to **localStorage**.

### 🎨 **Theme & UI Enhancements**
✔ **Rounded Buttons, Hover Effects & Transitions**  
✔ **Icons for Actions (Using `react-icons`)**  
✔ **Task Items have a Unique Look (Completed vs Uncompleted)**  

---

## 📌 **Key Libraries Used**
| Dependency  | Purpose |
|------------|---------|
| **React.js** | UI framework |
| **TypeScript** | Strong typing |
| **Axios** | For fetching tasks |
| **React Icons** | Adding icons |
| **LocalStorage** | Data persistence |

---

## 💻 **How to Contribute**
1️⃣ Fork the repository  
2️⃣ Create a new branch (`git checkout -b feature-name`)  
3️⃣ Make your changes  
4️⃣ Commit your changes (`git commit -m 'Added new feature'`)  
5️⃣ Push to GitHub (`git push origin feature-name`)  
6️⃣ Open a Pull Request 🚀  

---

## 🏆 **Credits**
Built by **Faisal Seraj** 
**Contact me:** ✉ [faisalseraj47@gmail.com](mailto:faisalseraj47@gmail.com)  
