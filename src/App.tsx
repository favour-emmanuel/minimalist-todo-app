import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import SignIn from "./components/Signin";
import Login from "./components/Login";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route index path="/" element={<HomePage />}></Route>
        <Route path="signIn" element={<SignIn />} />
        <Route path="logIn" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
