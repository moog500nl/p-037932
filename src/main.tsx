
// Add caching for static assets
const addCacheHeaders = () => {
  if (import.meta.env.PROD) {
    document.querySelectorAll('link[rel="preload"], img, script').forEach(el => {
      el.setAttribute('crossorigin', 'anonymous');
      el.setAttribute('fetchpriority', 'high');
    });
  }
};
document.addEventListener('DOMContentLoaded', addCacheHeaders);


import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'

createRoot(document.getElementById("root")!).render(<App />);
