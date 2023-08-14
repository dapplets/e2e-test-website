import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { Post } from "../types";
import { Link as RouterLink } from "react-router-dom";
import CardActionArea from "@mui/material/CardActionArea";
import TestIds from "../test-ids";

export type PostCardProps = {
  post: Post;
  to?: string;
};

export default function PostCard({ post, ...props }: PostCardProps) {
  return (
    <Card sx={{ mb: 3 }} data-testid={TestIds.post} data-postid={post.id}>
      <CardHeader
        avatar={<Avatar src="/favicon.svg" />}
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title={<span data-testid={TestIds.postFullname}>{post.fullname}</span>}
        subheader={
          <span data-testid={TestIds.postUsername}>@{post.username}</span>
        }
      />
      <CardActionArea
        data-testid={TestIds.postActionArea}
        LinkComponent={RouterLink}
        disableTouchRipple
        disableRipple
        disabled={!props.to}
        {...props}
      >
        {post.image ? (
          <CardMedia
            data-testid={TestIds.postImage}
            component="img"
            height="180"
            image={post.image}
          />
        ) : null}
        <CardContent>
          <Typography
            data-testid={TestIds.postText}
            variant="body2"
            color="text.secondary"
          >
            {post.text}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions disableSpacing>
        <IconButton data-testid={TestIds.postLikeButton}>
          <FavoriteIcon />
        </IconButton>
        <IconButton data-testid={TestIds.postShareButton}>
          <ShareIcon />
        </IconButton>
      </CardActions>
    </Card>
  );
}
