<h1># 💬 Real-Time Chat Application</h1>

A **feature-rich real-time chat application** built using **Node.js, Express, WebSockets, and MongoDB**. Users can **sign up, log in, and chat in real-time** with message history stored in MongoDB.

---

## 🚀 Features  

✅ **User Authentication** (Signup/Login with encrypted passwords)  
✅ **Real-time Messaging** (WebSockets for instant chat)  
✅ **Chat History Storage** (MongoDB to save messages)  
✅ **Secure & Scalable** (Password encryption & optimized backend)  
✅ **Responsive UI** (Mobile-friendly, modern chat design)  
✅ **Logout Functionality** (Securely logs out users)  

---

## 📂 Project Structure  

```
/chat-app
│── /public
│   │── auth.html       # User authentication page (Signup/Login)
│   │── index.html      # Chat room UI
│   │── styles.css      # Frontend styles
│   │── auth.js         # Handles user authentication
│   │── script.js       # Handles real-time chat
│── server.js           # Backend server with WebSocket and MongoDB
│── package.json        # Dependencies & project info
│── README.md           # Project documentation
```

---

## 🛠️ **Installation & Setup**  

### 1️⃣ **Clone the Repository**  
```sh
git clone <repository-url>
cd chat-app
```

### 2️⃣ **Install Dependencies**  
```sh
npm install express ws mongoose bcryptjs cors
```

### 3️⃣ **Start MongoDB**  
Make sure **MongoDB** is running:  
```sh
mongod
```

### 4️⃣ **Run the Server**  
```sh
node server.js
```

### 5️⃣ **Open in Browser**  
- Open **`auth.html`** to **Signup/Login**  
- After logging in, you will be redirected to **`index.html`** to **start chatting** 🎉  

---

## 🖥️ **Usage**  

1. **User Registration & Login**  
   - New users must sign up  
   - Returning users log in with credentials  

2. **Real-time Chatting**  
   - Send and receive messages **instantly**  
   - Messages are saved in **MongoDB**  

3. **Logout**  
   - Click the **Logout** button to securely exit  

---

## ⚙️ **Technologies Used**  

🔹 **Frontend:** HTML, CSS, JavaScript  
🔹 **Backend:** Node.js, Express, WebSockets  
🔹 **Database:** MongoDB (Mongoose for data storage)  
🔹 **Authentication:** Encrypted passwords (bcryptjs)  

---

## 🔥 **Future Enhancements**  

🔜 **Typing Indicators** (Show when a user is typing)  
🔜 **File Sharing** (Send images, videos, and documents)  
🔜 **Multiple Chat Rooms** (Users can create/join different chat rooms)  

---

## 👨‍💻 **Developer Notes**  

This project follows **best practices** for real-time web applications.  
If you face any issues, feel free to **open an issue** or contribute!  

---

## 📜 **License**  
This project is **open-source** under the **MIT License**.  

---

### 🎉 **Now, Enjoy Your Real-Time Chat Application!** 🚀  
