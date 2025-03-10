import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import { OtpContetProvider } from "../contentProvider/Otp.content.jsx";
import {LoggedInUserContentProvider} from "../contentProvider/LoggedinUser.content.jsx";

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <LoggedInUserContentProvider>
      <OtpContetProvider>
        <App />
      </OtpContetProvider>
    </LoggedInUserContentProvider>
  </BrowserRouter>
);
