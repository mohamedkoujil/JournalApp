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
import { SideBarItem } from "./SideBarItem";

export const SideBar = ({
  drawerWidth = 240,
  open,
  toggleOpen,
  navbarHeight,
}) => {
  const user = useSelector((state) => state.auth);
  const { notes } = useSelector((state) => state.journal);
  return (
    <Box
      component="nav"
      //width borders roundeed
      sx={{
        width: { sm: drawerWidth },
        flexShrink: { sm: 0 },
        zIndex: 1,
        marginTop: { xs: 8.5, sm: 0 },
      }}
      className="animate__animated animate__slideInLeft animate__faster"
      display={
        open
          ? "block"
          : {
              xs: "none",
              sm: "block",
            }
      }
    >
      <Drawer
        variant="permanent"
        open
        sx={{
          //display: { xs: "none", sm: "block" },
          "& .MuiDrawer-paper": { boxSizing: "border-box", width: drawerWidth },
        }}
      >
        <Grid2
          display="flex"
          alignItems="center"
          sx={{
            padding: 1.5,
            zIndex: 1,
            //backgroundColor: "rgba(38, 34, 84, 0.23)",
            borderBottom: "1px solid #e0e0e0",
          }}
          //at the top wheen scroll down
          position="sticky"
          top={0}
        >
          <Grid2 item="true" marginRight={3}>
            <Avatar src={user.photoURL} />
          </Grid2>
          <Grid2 item="true">
            <Typography variant="h6" noWrap component="div">
              {user.displayName}
            </Typography>
          </Grid2>
        </Grid2>
        <List>
          {notes.length != 0 ? (
            notes.map((note) => (
              <SideBarItem key={note.id} {...note} toggleOpen={toggleOpen} />
            ))
          ) : (
            <ListItem>
              <ListItemText primary="No hay notas" />
            </ListItem>
          )}
        </List>
      </Drawer>
    </Box>
  );
};
