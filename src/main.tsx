import { createRoot } from "react-dom/client";
import MainLayout from "./layouts/MainLayout";

// css
import 'bootstrap/dist/css/bootstrap.min.css';

createRoot(document.getElementById("root")!).render(
  <MainLayout/>
);
