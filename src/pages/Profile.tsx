import Container from "@mui/material/Container";
import Layout from "../components/Layout";
import PostCard from "../components/PostCard";
import { useFetch } from "../hooks/useFetch";
import { Post } from "../types";
import { Virtuoso } from "react-virtuoso";

function Profile() {
  const { data: posts, loading } = useFetch<Post[]>("/posts.json");

  if (loading || !posts) {
    return "loading";
  }

  return (
    <Layout>
      <Container sx={{ mt: 10 }} maxWidth="sm">
        <Virtuoso
          useWindowScroll

          data={posts}
          itemContent={(_, post) => <PostCard key={post.id} post={post} />}
        />
      </Container>x
    </Layout>
  );
}

export default Profile;
