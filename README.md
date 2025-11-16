# 🗳️ VoteChain

A beginner-friendly React project for secure and transparent elections. Built with React and Bootstrap.

## 🚀 Live Demo

[Click here to view the site](https://rachadT.github.io/votechain)

## 📸 Screenshot

![Homepage](./src/assets/home-screenshot.png)

## 🛠️ Tech Stack

- React
- Bootstrap
- React Router
- GitHub Pages

## 📦 How to Run Locally

To run this project on your machine:

```bash
npm install
npm start
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## 🌐 How to Deploy

To deploy this project to GitHub Pages:

1. Install GitHub Pages:
   ```bash
   npm install gh-pages --save-dev
   ```

2. Add this to `package.json`:
   ```json
   "homepage": "https://rachadT.github.io/votechain"
   ```

3. Add these scripts:
   ```json
   "predeploy": "npm run build",
   "deploy": "gh-pages -d build"
   ```

4. Run:
   ```bash
   npm run deploy
   ```

Your site will be live at:  
[https://rachadT.github.io/votechain](https://rachadT.github.io/votechain)

## 📁 Folder Structure

```
src/
├── components/     # components like Navbar, Footer
├── pages/          # Static pages: Home, About, Services, Contact, Candidate
├── assets/         # Images like background.png and home-screenshot.png
├── App.js          # Main app component with routing
```

## ✍️ Author

Created by [Rachad](https://github.com/rachadT)