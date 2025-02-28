import AssignmentIcon from "@mui/icons-material/Assignment";
import BuildIcon from "@mui/icons-material/Build";
import ChatIcon from "@mui/icons-material/Chat";
import BalanceIcon from "@mui/icons-material/Balance";
import ExploreIcon from "@mui/icons-material/Explore";
import InventoryIcon from "@mui/icons-material/Inventory";
import SellIcon from "@mui/icons-material/Sell";
import GroupIcon from "@mui/icons-material/Group";
import FlagCircleIcon from "@mui/icons-material/FlagCircle";
import AccountCircleRoundedIcon from "@mui/icons-material/AccountCircleRounded";
import SettingsIcon from "@mui/icons-material/Settings";

export const sidebarItems: {
  items: { text: string; icon?: React.ElementType; color?: string }[];
}[] = [
  {
    items: [
      { text: "Default Entity", color: "#14ad21" },
      { text: "Request", icon: AssignmentIcon },
    ],
  },

  {
    items: [
      { text: "Work Orders", icon: BuildIcon },
      { text: "PMs", icon: ChatIcon },
    ],
  },
  {
    items: [
      { text: "Assets", icon: BalanceIcon },
      { text: "Location", icon: ExploreIcon },
      { text: "Inventory&Parts", icon: InventoryIcon },
      { text: "Vendors", icon: SellIcon },
      { text: "Users", icon: GroupIcon },
      { text: "Report&KPIs", icon: FlagCircleIcon },
    ],
  },

  {
    items: [
      { text: "Rayan Chen", icon: AccountCircleRoundedIcon },
      { text: "Admin Setting", icon: SettingsIcon },
    ],
  },
];
