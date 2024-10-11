import { TurnedInNot } from "@mui/icons-material";
import {
  Grid2,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import { useMemo } from "react";
import { useDispatch } from "react-redux";
import { setActiveNote } from "../../store/journal/journalSlice";

export const SideBarItem = ({
  title = "",
  body,
  id,
  date,
  imageUrls = [],
  toggleOpen,
}) => {
  const dispatch = useDispatch();

  const onClick = () => {
    dispatch(setActiveNote({ title, body, id, date, imageUrls }));
    toggleOpen();
  };

  const newTitle = useMemo(() => {
    return title.length > 17 ? title.slice(0, 17) + "..." : title;
  });

  const newBody = useMemo(() => {
    return body.length > 37 ? body.slice(0, 37) + "..." : body;
  });

  return (
    <ListItem disablePadding sx={{ borderBottom: "1px solid #e0e0e0" }}>
      <ListItemButton onClick={onClick}>
        <ListItemIcon>
          <TurnedInNot />
        </ListItemIcon>
        <Grid2
          container
          display="flex"
          wrap="nowrap"
          justifyContent="flex-start"
          flexDirection="column"
          sx={{ height: 65 }}
        >
          <ListItemText primary={newTitle} />
          <ListItemText secondary={newBody} />
        </Grid2>
      </ListItemButton>
    </ListItem>
  );
};
