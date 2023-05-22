import Todo from "./components/Todo/Todo";
import Form from "./components/Auth/Form";
import About from "./components/About";
import NotFound from "./components/NotFound";
import SignUp from "./components/Auth/SignUp";
import Layout from "./components/Layout";
import { Route } from "react-router-dom";
import { Routes } from "react-router-dom";
import "./App.scss";
import { useAuth } from "./hooks/useContex";
function App() {
  const { user, logIn, logOut } = useAuth();
  return (
    <div className="list-route">
      {user ? (
        <button onClick={logOut}>Sign out</button>
      ) : (
        <button onClick={logIn}>Sign In</button>
      )}
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<About />} />
          <Route path="/todo" element={<Todo />} />
          <Route path="/login" element={<Form />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </div>
  );
}
export default App;
