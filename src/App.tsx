import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Profile from "./pages/Profile";
import Post from "./pages/Post";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/profile" />} />
        <Route path="/profile" Component={Profile} />
        <Route path="/post" Component={Post} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
