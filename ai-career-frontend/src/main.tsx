import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { AppProvider } from "./context/AppContext.tsx";
import { GoogleOAuthProvider } from "@react-oauth/google";

export const server = "http://localhost:5000";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <AppProvider>
      <GoogleOAuthProvider clientId="775024413451-aa4i4ur4pu6fgs39es5seno24mhsv5f2.apps.googleusercontent.com">
        <App />
      </GoogleOAuthProvider>
    </AppProvider>
  </StrictMode>
);
