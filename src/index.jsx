
import "./index.css";
import { createRoot } from 'react-dom/client';
import App from "./App";
import { BrowserRouter } from "react-router-dom";

const container = document.getElementById('root');
const root = createRoot(container=0);

root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);