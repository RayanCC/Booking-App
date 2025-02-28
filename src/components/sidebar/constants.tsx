// import BuildIcon from "@mui/icons-material/Build";
// import ChatIcon from "@mui/icons-material/Chat";
// import BalanceIcon from "@mui/icons-material/Balance";
// import ExploreIcon from "@mui/icons-material/Explore";
// import InventoryIcon from "@mui/icons-material/Inventory";
// import SellIcon from "@mui/icons-material/Sell";
// import GroupIcon from "@mui/icons-material/Group";
// import FlagCircleIcon from "@mui/icons-material/FlagCircle";
// import AccountCircleRoundedIcon from "@mui/icons-material/AccountCircleRounded";
// import SettingsIcon from "@mui/icons-material/Settings";
import {
	KeyboardDoubleArrowLeft as ArrowLeft,
	Assignment,
	Settings,
	Balance,
	Chat,
	Build,
	Explore,
	Inventory,
	Sell,
	Group,
	FlagCircle as Flag,
	AccountCircleRounded as Account
} from '@mui/icons-material'

import type { SideBarItem } from './types'
import { ReactNode } from 'react'

// export const sidebarItems: {
// 	items: { text: string; icon?: React.ElementType; color?: string }[]
// }[] = [
// 	{
// 		items: [
// 			{ text: 'Default Entity', color: '#14ad21' },
// 			{ text: 'Request', icon: AssignmentIcon }
// 		]
// 	},

// 	{
// 		items: [
// 			{ text: 'Work Orders', icon: BuildIcon },
// 			{ text: 'PMs', icon: ChatIcon }
// 		]
// 	},
// 	{
// 		items: [
// 			{ text: 'Assets', icon: BalanceIcon },
// 			{ text: 'Location', icon: ExploreIcon },
// 			{ text: 'Inventory&Parts', icon: InventoryIcon },
// 			{ text: 'Vendors', icon: SellIcon },
// 			{ text: 'Users', icon: GroupIcon },
// 			{ text: 'Report&KPIs', icon: FlagCircleIcon }
// 		]
// 	},

// 	{
// 		items: [
// 			{ text: 'Rayan Chen', icon: AccountCircleRoundedIcon },
// 			{ text: 'Admin Setting', icon: SettingsIcon }
// 		]
// 	}
// ]

// export const workOrderSection: SideBarItem[] = [
// 	// { title: "Default Entity", color: "#14ad21" },
// 	{ title: 'Request', icon: AssignmentIcon },
// 	{ title: 'Work Orders', icon: BuildIcon },
// 	{ title: 'PMs', icon: ChatIcon }
// ]
// export const managementSection: SideBarItem[] = [
// 	{ title: 'Assets', icon: BalanceIcon },
// 	{ title: 'Location', icon: ExploreIcon },
// 	{ title: 'Inventory&Parts', icon: InventoryIcon },
// 	{ title: 'Vendors', icon: SellIcon },
// 	{ title: 'Users', icon: GroupIcon },
// 	{ title: 'Report&KPIs', icon: FlagCircleIcon }
// ]
export const accountSection: SideBarItem[] = [
	{ title: 'Rayan Chen', iconName: 'account' },
	{ title: 'Admin Setting', iconName: 'settings' }
]

export const iconMapping: Record<string, ReactNode> = {
	arrowLeft: <ArrowLeft sx={{ fontSize: '1.3em' }} />,
	assignment: <Assignment sx={{ fontSize: '1.3em' }} />,
	settings: <Settings sx={{ fontSize: '1.3em' }} />,
	account: <Account sx={{ fontSize: '1.3em' }} />
}
