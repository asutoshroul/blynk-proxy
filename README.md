---

# ⚡ Blynk Proxy Server

A minimal, production-ready **Node.js + Express** proxy server deployed on **Render** to enable **secure, CORS-compliant API access** from front-end applications (like GitHub Pages) to the **Blynk Cloud**.

---

## 🌐 Live Deployment

**Proxy URL**  
[https://blynk-proxy.onrender.com](https://blynk-proxy.onrender.com)

> ✅ This link is used by frontend apps to access Blynk data.  
> ⚠️ Visiting this URL directly shows:  
> `Cannot GET /`  
> — which is **expected** and means the server is running fine. The root route `/` is intentionally not defined, since the server is designed to respond only to API requests like `/get`.

---

## 🔧 What This Proxy Does

GitHub Pages (or any static frontend) cannot directly fetch data from Blynk Cloud APIs due to CORS restrictions. This proxy bridges that gap by:

- Forwarding GET requests from frontend to the Blynk API.
- Injecting your secret Blynk **token server-side** so it’s never exposed in the frontend.
- Enabling safe, real-time data fetches from virtual pins (`V0`, `V1`, etc.).

---

## 🔄 How It Works

A frontend app (like the one below) can send a request like:

```http
GET https://blynk-proxy.onrender.com/get?V0
```

And the proxy automatically converts it to:

```http
GET https://blynk.cloud/external/api/get?token=YOUR_TOKEN&V0
```

✅ Response is then sent back to the frontend.

---

## 📦 Available Routes

| Route                | Method | Description                                   |
|---------------------|--------|-----------------------------------------------|
| `/get?Vx`            | GET    | Fetches value of a Blynk virtual pin (e.g., V0) |

> Replace `Vx` with any virtual pin (e.g., `V0`, `V1`, `V2`, ...)

---

## 🔐 Security & Deployment Notes

- Your Blynk token is securely stored in the server code.
- This server is hosted on [Render](https://render.com).
- No authentication is used here, so avoid exposing sensitive data through virtual pins.

---

## 🔗 Used In

🎯 **Frontend App:**  
[Smart Energy Meter UI on GitHub Pages](https://asutoshroul.github.io/smart-energy-meter)

🔌 **Backend Proxy:**  
[https://blynk-proxy.onrender.com](https://blynk-proxy.onrender.com)

---

## 🧠 FAQ

### 💭 Why do I see `Cannot GET /` on the Render link?

That’s perfectly normal. The server is meant to handle only `/get` requests. It has **no homepage**, so visiting the base URL gives this default message. No changes are needed if everything works.

---

## 👨‍💻 Tech Stack

- **Node.js** – runtime environment  
- **Express.js** – backend framework  
- **Axios** – for making HTTP requests  
- **Render** – used to host the server online, auto-updates when you push code to GitHub

---

## 💡 Purpose

Due to CORS (Cross-Origin Resource Sharing) limitations on the Blynk Cloud API, direct requests from a browser-based frontend are often blocked. This proxy acts as an intermediary to forward frontend requests to Blynk servers securely.

---

## 📄 License

This project is licensed under the MIT License. Feel free to use and adapt.

---
