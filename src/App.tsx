import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Profile from "./pages/Profile";
import Post from "./pages/Post";
import Layout from "./components/Layout";

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Navigate to="/dapplets" />} />
          <Route path="/:profile" Component={Profile} />
          <Route path="/:profile/post/:postId" Component={Post} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
