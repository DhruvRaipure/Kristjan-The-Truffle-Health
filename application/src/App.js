import DashBoard from "./components/DashBoard";
import MedicalForm from "./components/MedicalForm";
import SignIn from "./components/auth/SignIn";
import SignUp from "./components/auth/SignUp";
import ReactDom from "react-dom/client";
import { auth } from "./firebase_setup/firebase";
import { BrowserRouter, Routes, Route } from "react-router-dom";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SignIn />} />
        <Route path="/signIn" element={<SignIn />} />
        <Route path="/signUp" index element={<SignUp />} />
        <Route path="/dashboard" element={<DashBoard />} />
        <Route path="/newForm" element={<MedicalForm />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
