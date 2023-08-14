import Container from "@mui/material/Container";
import PostCard from "../components/PostCard";
import { useFetch } from "../hooks/useFetch";
import { Post } from "../types";
import { Virtuoso } from "react-virtuoso";

function Profile() {
  const { data: posts, loading } = useFetch<Post[]>("/posts.json");

  if (loading || !posts) {
    return null;
  }

  return (
    <Container sx={{ mt: 10 }} maxWidth="sm">
      <Virtuoso
        useWindowScroll
        data={posts}
        itemContent={(_, post) => (
          <PostCard
            key={post.id}
            post={post}
            to={`/${post.username}/post/${post.id}`}
          />
        )}
      />
    </Container>
  );
}

export default Profile;
