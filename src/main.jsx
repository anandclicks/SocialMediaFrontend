import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import { OtpContetProvider } from '../contentProvider/Otp.content.jsx'

createRoot(document.getElementById('root')).render(
   <BrowserRouter>
   <OtpContetProvider>
    <App />
   </OtpContetProvider>
   </BrowserRouter>
)
