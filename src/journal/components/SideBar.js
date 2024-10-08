import { TurnedInNot } from "@mui/icons-material";
import {
  Avatar,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Toolbar,
  Typography,
  Grid2,
} from "@mui/material";
import { Box } from "@mui/system";
import { useSelector } from "react-redux";

export const SideBar = ({ drawerWidth = 240 }) => {
  const user = useSelector((state) => state.auth);
  console.log(user);

  return (
    <Box
      component="nav"
      sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
    >
      <Drawer
        variant="permanent"
        open
        sx={{
          display: { xs: "none", sm: "block" },
          "& .MuiDrawer-paper": { boxSizing: "border-box", width: drawerWidth },
        }}
      >
        <Grid2
          display="flex"
          alignItems="center"
          sx={{
            padding: 1,
          }}
        >
          <Grid2 item="true" marginRight={3}>
            <Avatar src={user.photoURL} />
          </Grid2>
          <Grid2 item="true">
            <Typography variant="h6" noWrap component="div">
              {user.displayName}
            </Typography>
          </Grid2>

          {/* pfp */}
        </Grid2>
        <List>
          {["January", "February", "March", "April"].map((text, index) => (
            <ListItem key={text} disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  <TurnedInNot />
                </ListItemIcon>
                <Grid2 container>
                  <ListItemText primary={text} />
                  <ListItemText secondary="Secondary text Secondary" />
                </Grid2>
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Drawer>
    </Box>
  );
};
