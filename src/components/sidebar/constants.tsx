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

export const requestSection: SideBarItem[] = [
	{ title: 'Default Entity' },
	{ title: 'Request', iconName: 'assignment' }
]

export const mainSection: SideBarItem[] = [
	{ title: 'Work Orders', iconName: 'build' },
	{ title: 'PMs', iconName: 'chat' },
	{ title: 'Assets', iconName: 'balance' },
	{ title: 'Location', iconName: 'explore' },
	{ title: 'Iventory&Parts', iconName: 'inventory' },
	{ title: 'Vendor', iconName: 'sell' },
	{ title: 'Users', iconName: 'group' },
	{ title: 'Report&KPIs', iconName: 'flag' }
]

export const accountSection: SideBarItem[] = [
	{ title: 'Rayan Chen', iconName: 'account' },
	{ title: 'Admin Setting', iconName: 'settings' }
]

export const iconMapping: Record<string, ReactNode> = {
	arrowLeft: <ArrowLeft sx={{ fontSize: '1.3em' }} />,
	assignment: <Assignment sx={{ fontSize: '1.3em' }} />,
	settings: <Settings sx={{ fontSize: '1.3em' }} />,
	account: <Account sx={{ fontSize: '1.3em' }} />,
	balance: <Balance sx={{ fontSize: '1.3em' }} />,
	chat: <Chat sx={{ fontSize: '1.3em' }} />,
	build: <Build sx={{ fontSize: '1.3em' }} />,
	explore: <Explore sx={{ fontSize: '1.3em' }} />,
	inventory: <Inventory sx={{ fontSize: '1.3em' }} />,
	sell: <Sell sx={{ fontSize: '1.3em' }} />,
	group: <Group sx={{ fontSize: '1.3em' }} />,
	flag: <Flag sx={{ fontSize: '1.3em' }} />
}
