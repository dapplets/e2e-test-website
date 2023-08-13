import Layout from "../components/Layout";
import PostCard from "../components/PostCard";
import { useFetch } from "../hooks/useFetch";
import { Post } from "../types";

function Profile() {
  const { data: posts, loading } = useFetch<Post[]>("/posts.json");

  if (loading) {
    return "loading"
  }

  return (
    <Layout>
      {posts && posts.map((post) => <PostCard key={post.id} post={post} />)}
    </Layout>
  );
}

export default Profile;
