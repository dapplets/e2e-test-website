import Container from "@mui/material/Container";
import PostCard from "../components/PostCard";
import { useFetch } from "../hooks/useFetch";
import { Post } from "../types";
import { useParams } from "react-router-dom";

function Profile() {
  const { postId } = useParams();
  const { data: posts, loading } = useFetch<Post[]>("/posts.json");

  if (loading || !posts) {
    return null;
  }

  const post = posts.find((x) => x.id === postId);

  if (!post) {
    return null;
  }

  return (
      <Container sx={{ mt: 10 }} maxWidth="sm">
        <PostCard post={post} />
      </Container>
  );
}

export default Profile;
