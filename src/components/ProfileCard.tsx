import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { Profile } from "../types";
import TestIds from "../test-ids";
import CardMedia from "@mui/material/CardMedia";
import Box from "@mui/material/Box";

export type ProfileCardProps = {
  profile: Profile;
};

export default function ProfileCard({ profile }: ProfileCardProps) {
  return (
    <Card sx={{ mb: 3 }} data-testid={TestIds.profile}>
      <Box sx={{ display: "flex" }}>
        <Box sx={{ width: 80, pl: 2, pt: 2, pb: 1 }}>
          <CardMedia
            data-testid={TestIds.profileAvatar}
            component="img"
            sx={{ width: "100%" }}
            image={profile.avatar}
          />
        </Box>
        <Box sx={{ flex: 1 }}>
          <CardHeader
            title={
              <span data-testid={TestIds.profileFullname}>
                {profile.fullname}
              </span>
            }
            subheader={
              <span data-testid={TestIds.profileUsername}>
                @{profile.username}
              </span>
            }
          />
        </Box>
      </Box>
      <CardContent>
        <Typography
          data-testid={TestIds.profileBio}
          variant="body2"
          color="text.secondary"
        >
          {profile.bio}
        </Typography>
      </CardContent>
    </Card>
  );
}
