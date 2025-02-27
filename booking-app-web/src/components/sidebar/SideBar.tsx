import {
  Drawer,
  List,
  ListItemButton,
  ListItemText,
  Divider,
  ListItemIcon,
} from "@mui/material";
import KeyboardDoubleArrowLeftIcon from "@mui/icons-material/KeyboardDoubleArrowLeft";

const Sidebar: React.FC = () => {
  return (
    <Drawer
      variant="permanent"
      anchor="left"
      sx={{ "& .MuiDrawer-paper": { backgroundColor: "#1976d2" } }}
    >
      <List>
        <ListItemButton>
          <ListItemText primary="LOGO" />
        </ListItemButton>
        <ListItemButton>
          <ListItemText primary="HoHo Canada Ltd." />
        </ListItemButton>
        <Divider />
        <ListItemButton>
          <ListItemText primary="Default Entity" />
        </ListItemButton>
        {[
          "Requests",
          "Work Orders",
          "PMs",
          "Assets",
          "Locations",
          "Inventory & Parts",
          "Vendors",
          "Users",
          "Reports & KPIs",
          "Rayan Chen",
          "Admin Settings",
        ].map((text) => (
          <ListItemButton key={text}>
            <ListItemText primary={text} />
          </ListItemButton>
        ))}
      </List>
      <Divider />
      <ListItemButton>
        <ListItemIcon>
          <KeyboardDoubleArrowLeftIcon />
          <ListItemText primary="Collapse sidebar" />
        </ListItemIcon>
      </ListItemButton>
    </Drawer>
  );
};

export default Sidebar;
