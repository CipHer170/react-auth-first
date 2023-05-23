import Todo from "./components/Todo/Todo";
import LoginForm from "./components/Auth/LoginForm";
import About from "./components/About";
import NotFound from "./components/NotFound";
import SignUp from "./components/Auth/SignUp";
import Layout, { Private1, Private2, Private3 } from "./components/Layout";
import { Navigate, Outlet, Route } from "react-router-dom";
import { Routes } from "react-router-dom";
import "./App.scss";
import { useAuth } from "./hooks/useContex";
import Table from "./components/table.jsx/Table";
function App() {
  const { user } = useAuth();
  return (
    <div className="list-route">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<About />} />
          <Route element={<ProtectedRoute user={user} />}>
            <Route path="/todo" element={<Todo />} />
            <Route path="/private1" element={<Private1 />} />
            <Route path="/private2" element={<Private2 />} />
            <Route path="/private3" element={<Private3 />} />
            <Route path="/table" element={<Table />} />
          </Route>
          <Route path="/signup" element={<SignUp />} />
          <Route path="/login" element={<LoginForm />} />
          <Route path="/login" element={<LoginForm />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </div>
  );
}
export default App;

export const ProtectedRoute = ({ user, children, redirectPath = "/" }) => {
  if (!user) {
    return <Navigate to={redirectPath} replace />;
  }
  return children ? children : <Outlet />;
};
