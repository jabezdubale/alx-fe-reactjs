import "./App.css";
import {
  BrowserRouter as router,
  Routes,
  Route,
  BrowserRouter,
} from "react-router-dom";
import RegistrationForm from "./components/RegistrationForm ";
import FormikForm from "./components/FormikForm";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<RegistrationForm />} />
          <Route path="/formik" element={<FormikForm />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
