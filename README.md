# TechLearn QOTD Challenge 🚀

Hi there! 👋 This is my submission for the Frontend Technical Task. 

The goal was to design a **Question of the Day (QOTD)** page that doesn't just look good, but actually motivates students to build a daily coding habit.

**[👉 View the Live Demo Here](https://your-vercel-link-goes-here.app)**

---

## 💡 My Thought Process

### 1. The "Monotone Blue" Challenge
The prompt asked for a monotone blue theme. My first thought was, *"How do I make this look professional, not boring?"* I took inspiration from modern code editors like VS Code and Linear. I used:
- **Dark Navy** for the code areas (to reduce eye strain).
- **Bright Royal Blue** strictly for the primary action ("Submit").
- **Soft Slate/Grey** for secondary text so the page doesn't feel cluttered.

### 2. Solving the "Habit" Problem
The biggest challenge in EdTech is retention. Why should a student come back tomorrow? I built the UI around three psychological triggers:
* **The Streak (Loss Aversion):** I placed a "🔥 12 Day Streak" badge right in the header. It's the first thing you see. Students hate breaking a streak.
* **The Reward (Dopamine):** When you hit submit, I added a confetti explosion. It’s a small detail, but it makes the success moment feel "earned."
* **The Trigger:** A "Notify Me" card in the sidebar effectively asks the user permission to remind them tomorrow.

### 3. Layout Strategy
I went with a **Split-Pane Layout**.
* **Desktop:** Left side for reading, Right side for coding. This is the industry standard (LeetCode, HackerRank), so it prepares students for real interviews.
* **Mobile:** I noticed many students read problems on their commute. On mobile, I stacked the layout so the *Problem Statement* comes first. You can read the question easily on a phone, even if you wait to code it later on a laptop.

---

## 🛠 The Tech Stack
I chose tools that allow for speed without sacrificing performance:

* **Next.js 14 (App Router):** Overkill for a single page? Maybe. But it ensures the page loads instantly (SSR) and gives me a solid structure if we expanded this into a full platform.
* **Tailwind CSS:** Essential for the 24-hour timeline. It let me tweak the "Monotone Blue" shades instantly without fighting with a CSS file.
* **Lucide React:** For clean, consistent iconography.
* **Canvas Confetti:** Because every win deserves a celebration! 🎉

---

## 🚧 What I'd Improve (With more time)
Since I built this within the 24-hour window, there are a few things I'd love to polish if this were going into production:

1.  **The Code Editor:** Currently, it's a styled `textarea`. It works for a demo, but in a real app, I would implement **Monaco Editor** (the engine behind VS Code) for line numbers and syntax highlighting.
2.  **API Integration:** Right now the data is static. I'd love to connect the "Run" button to an execution API (like Piston) to actually compile the code.
3.  **Keyboard Shortcuts:** Adding `Cmd+Enter` to submit code would be a great UX power-user feature.

---

## 💻 How to Run This Locally

If you want to poke around the code yourself:

1.  Clone the repo:
    ```bash
    git clone [https://github.com/your-username/qotd-platform.git](https://github.com/your-username/qotd-platform.git)
    ```
2.  Install packages:
    ```bash
    npm install
    ```
3.  Fire it up:
    ```bash
    npm run dev
    ```
4.  Open http://localhost:3000

---

*Thanks for the opportunity! I really enjoyed thinking through the UX for this one.*