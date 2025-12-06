# ⏳ Easy Countdown Timer with Alerts

A simple, interactive web-based countdown timer built with vanilla JavaScript. This project demonstrates how to handle time intervals, request browser permissions, and trigger audio/visual alerts.

![Project Preview]
<img width="1914" height="922" alt="image" src="https://github.com/user-attachments/assets/771f31ec-d97b-41f1-bebe-72a12c6c41a2" />

## 🚀 Features

* **Custom Input:** Users can enter any duration in seconds.
* **Live Countdown:** Real-time display updating every second.
* **Audio Alert:** Plays a sound effect when the timer hits zero.
* **Desktop Notification:** Sends a browser notification (even if the tab is in the background) when time is up.

## 🛠️ Tech Stack

* **HTML5** - Structure and input forms.
* **CSS3** - Styling for the timer display and buttons.
* **JavaScript (ES6)** - Logic for the timer and API integration.

## 🧠 Key Learnings & APIs Used

This project focuses on the following JavaScript concepts:

1.  **`setInterval` & `clearInterval`**: Used to create the countdown loop and stop it precisely at 0.
2.  **Notification API**:
    * Requesting permission: `Notification.requestPermission()`
    * Triggering the alert: `new Notification("Time is up!")`
3.  **Audio Object**:
    * Loading and playing sound: `new Audio('sound.mp3').play()`

## 📂 Project Structure

```text
├── index.html      # Main HTML structure
├── style.css       # Styling for the application
├── script.js       # Timer logic and API handling
├── alert.mp3       # Sound file for the alarm
└── README.md       # Project documentation
