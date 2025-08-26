import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import RegistrationForm from "./components/RegistrationForm";
import formikForm from "./components/formikForm";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<RegistrationForm />} />
        <Route path="/formik" element={<formikForm />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
