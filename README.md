# Health Wiser

### 🔬 A Health-Focused Food Analysis Web App
**Health Wiser** is a web application that helps users analyze food ingredients by scanning barcodes or manually entering product details. It provides insights into the health benefits and risks of food products and suggests alternatives for a healthier lifestyle.

---

## 🚀 Features
### **🔹 User Features:**
- Scan barcodes or manually enter barcode numbers to retrieve product details.
- Convert complex ingredient names into simple, understandable terms.
- Get health benefits and risk analysis based on product ingredients.
- Receive alternative food product suggestions.
- User authentication system (login/signup).

### **🔹 Admin Features:**
- Admin authentication with predefined credentials.
- Manage and update the ingredient database.
- Ensure product details and ingredient analysis remain up-to-date.

---

## 🛠️ Tech Stack
### **Frontend:**
- Next.js
- Tailwind CSS
- Axios
- React Barcode Scanner (Barcode scanning may require manual entry if not working)

### **Backend:**
- Node.js
- Express.js
- MongoDB (MongoDB Atlas for database management)

### **Security Measures:**
- **Authentication:** JWT-based authentication.
- **Password Security:** bcrypt.js for password hashing.
- **Security Enhancements:** HTTPS enforcement, environment variables, and express-rate-limit for API security.

---

## 🌐 Hosting & Deployment
- **Frontend:** Vercel (Recommended)
- **Backend:** Vercel, AWS, DigitalOcean, or Heroku
- **Database:** MongoDB Atlas

---

## 📌 Limitations
- ❌ No AI-powered analysis (yet).
- ❌ Barcode scanner may have issues (manual entry required in some cases).
- ❌ Limited database coverage (depends on admin updates).
- ❌ No real-time product updates.
- ❌ No mobile app (only web access).
- ❌ Internet connection required.

---

## 🔮 Future Improvements
✅ Fix barcode scanning issues.  
✅ Introduce AI-powered food analysis.  
✅ Develop a mobile app with offline access.  
✅ Add smart dietary preferences & personalized alerts.  
✅ Implement an in-house recipe maker for healthy meals.  
✅ Build a community & expert engagement platform.  
✅ Integrate with wearable health devices & smart assistants.  
✅ Rebrand from **Health Wiser** to **Smart Spoon**.  

---

## 🏗️ Installation Guide
### **1️⃣ Clone the Repository**
```sh
 git clone https://github.com/foreshubham/Health-Wiser.git
 cd Health-Wiser
```

### **2️⃣ Install Dependencies**
#### Frontend:
```sh
cd frontend
npm install
```
#### Backend:
```sh
cd backend
npm install
```

### **3️⃣ Set Up Environment Variables**
Create a `.env` file in the `backend` directory and add:
```sh
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key
```

### **4️⃣ Run the Application**
#### Start Backend:
```sh
cd backend
npm start
```
#### Start Frontend:
```sh
cd frontend
npm run dev
```

---


## 🤝 Contributing
We welcome contributions! Feel free to **fork** the repository, make changes, and submit a **pull request**.

---

## 📧 Contact
For any queries or collaborations, reach out via **[foreshubham@gmail.com]** or open an **issue** on GitHub.

---

⭐ **If you like this project, don't forget to star the repo!** ⭐
