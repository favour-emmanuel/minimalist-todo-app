import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import SignIn from "./components/SignIn";
import Login from "./components/Login";
import TodoList from "./pages/TodoList";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route index path="/" element={<HomePage />}></Route>
        <Route path="signIn" element={<SignIn />} />
        <Route path="logIn" element={<Login />} />
        <Route path="/todo" element={<TodoList />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
