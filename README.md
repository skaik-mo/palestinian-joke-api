# Palestinian Joke API — The Chance World Cup

[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)
[![Deployment Status](https://img.shields.io/badge/Deployment-Live-brightgreen.svg)]()

A lightweight, deployed API and interactive web application built for **The Chance World Cup (Round 1 Task)**. This project connects to an LLM via OpenRouter to dynamically generate context-aware jokes strictly in the local Palestinian dialect based on a single user-provided keyword.

---

## 🎭 Web Interface

When opening the root URL (`/`), an interactive, responsive Palestinian dialect comedy UI (**بارق**) is presented. Users can enter any word or pick a suggested topic to get an instant joke with smooth animations, copy buttons, and real-time feedback.

---

## 🔌 API Integration & Usage

### Live Endpoint
* **Method:** `GET`
* **Path Pattern:** `/api/mohammed-skaik/joke`

### Request Parameters
| Parameter | Type | Required | Description |
| :--- | :--- | :--- | :--- |
| `word` | String | Yes | Single Arabic keyword for the joke (e.g. `قهوة`, `مدرسة`, `شغل`) |

### Example Request
```bash
GET https://<deployed-url>/api/mohammed-skaik/joke?word=قهوة
```

### Example JSON Response
```json
{
  "success": true,
  "joke": "مرة قهوة راحت تتقدم لشاي، قالها أبوها: لسه بدري عليكي تغلي! 😂"
}
```

---

## 🛠️ Tech Stack

* **Runtime:** Node.js (ES Modules)
* **Framework:** Express.js
* **AI Provider:** OpenRouter API (Multi-model fallback)
* **Frontend:** Vanilla HTML5 / CSS3 / JavaScript (Served directly from `public/`)

---

## 📁 Project Structure

```text
joke-api/
├── public/
│   └── index.html          # Interactive comedy web UI
├── src/
│   ├── config/
│   │   └── env.js          # Environment configuration
│   ├── controllers/
│   │   └── joke.controller.js
│   ├── middlewares/
│   │   ├── errorHandler.js
│   │   └── notFound.js
│   ├── routes/
│   │   └── joke.routes.js
│   ├── utils/
│   │   ├── joke.service.js
│   │   └── prompt.builder.js
│   └── app.js              # Express app with static & API routing
├── index.js                # Server entry point
├── vercel.json             # Vercel deployment config
├── .gitignore
├── package.json
└── README.md
```

---

## 🚀 Setup & Local Development

### 1. Clone repository & install dependencies
```bash
git clone git@github.com:skaik-mo/joke-api.git
cd joke-api
npm install
```

### 2. Configure Environment Variables
Create `.env.development.local`:
```env
PORT=3000
NODE_ENV=development
OPENROUTER_API_KEY=your_openrouter_api_key_here
```

### 3. Run Locally
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) to see the web UI, or test the API at:
[http://localhost:3000/api/mohammed-skaik/joke?word=مدرسة](http://localhost:3000/api/mohammed-skaik/joke?word=مدرسة)

---

## ☁️ Deployment (Getting a Live URL)

### Option A: Render (Recommended for Express)
1. Go to [Render Dashboard](https://dashboard.render.com/) and click **New Web Service**.
2. Connect your GitHub repository: `skaik-mo/joke-api`.
3. Set the following settings:
   - **Environment:** `Node`
   - **Build Command:** `npm install`
   - **Start Command:** `npm start`
4. Add Environment Variable:
   - `OPENROUTER_API_KEY`: *(Your OpenRouter API key)*
5. Click **Deploy Web Service**. Render will generate a public live URL (e.g. `https://joke-api-xxxx.onrender.com`).

### Option B: Vercel
1. Import the repository in [Vercel](https://vercel.com/new).
2. Add the environment variable `OPENROUTER_API_KEY`.
3. Click **Deploy**. Vercel uses `vercel.json` to deploy automatically.