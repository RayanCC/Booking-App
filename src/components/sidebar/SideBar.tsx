import {
	List,
	ListItem,
	ListItemButton,
	ListItemText,
	Divider,
	ListItemIcon,
	Box,
	Stack,
	Typography
} from '@mui/material'
import { mainSection, requestSection } from './constants'
import { accountSection } from './constants'
import { CompanyHeader } from './components/CompanyHeader'

import type { FC } from 'react'
import LeftDrawer from '../layouts/LeftDrawer'
import SideBarItem from './components/SideBarItem'

const Sidebar: FC = () => {
	return (
		<LeftDrawer drawerWidth={400}>
			{/* Company Info Display */}
			<CompanyHeader />
			<Divider />
			{/* Feature List */}
			<Box
				sx={{
					display: 'flex',
					flexDirection: 'column',
					flex: '1',
					overflowY: 'hidden',
					maxHeight: 'calc(100vh - 150px)'
				}}
			>
				<Box
					component='header'
					sx={{
						display: 'flex',
						flexDirection: 'column',
						flex: '1',
						overflowY: 'auto',
						maxHeight: 'calc(100vh - 150px)',
						paddingBottom: '40px'
					}}
				>
					<List sx={{ width: '100%' }} disablePadding>
						{requestSection.map(item => (
							<SideBarItem item={item} />
						))}
					</List>
				</Box>
				{/* <FeatureList /> */}

				<Box sx={{ flexGrow: 1 }}>
					<List sx={{ width: '100%' }} disablePadding>
						{mainSection.map(item => (
							<SideBarItem item={item} />
						))}
					</List>
				</Box>

				{/* Footer */}
				<Divider />
				<Box component='footer'>
					<List sx={{ width: '100%' }} disablePadding>
						{accountSection.map(item => (
							<SideBarItem item={item} />
						))}
						{/*
					<ListItem aria-label={t('auth.signOut')} component='div' disablePadding>
					<LogoutButton />
					</ListItem> */}
					</List>
					<Divider />
					<SideBarItem item={{ title: 'Collapse sidebar', iconName: 'arrowLeft' }} />
				</Box>
			</Box>
		</LeftDrawer>
	)
}

export default Sidebar
