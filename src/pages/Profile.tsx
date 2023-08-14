import Container from "@mui/material/Container";
import PostCard from "../components/PostCard";
import { useFetch } from "../hooks/useFetch";
import { Post, Profile as ProfileDto } from "../types";
import { Virtuoso } from "react-virtuoso";
import ProfileCard from "../components/ProfileCard";

function Profile() {
  const { data: posts, loading } = useFetch<Post[]>("/posts.json");

  if (loading || !posts) {
    return null;
  }

  const profile: ProfileDto = {
    username: "dapplets",
    fullname: "Dapplets Project",
    avatar: "/favicon.svg",
    bio: "Dapplets Project is an open-source Augmented Web platform for building decentralized applications (dapplets), powered by crypto technologies.",
  };

  return (
    <Container sx={{ mt: 10 }} maxWidth="sm">
      <ProfileCard profile={profile} />
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
