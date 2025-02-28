import {
	List,
	ListItem,
	ListItemButton,
	ListItemText,
	Divider,
	ListItemIcon,
	Box,
	Stack
} from '@mui/material'
import { accountSection } from './constants'

import type { FC } from 'react'
import LeftDrawer from '../layouts/LeftDrawer'
import SideBarItem from './components/SideBarItem'

const Sidebar: FC = () => {
	return (
		<LeftDrawer drawerWidth={400}>
			{/* Company Info Display */}
			<Box></Box>
			<Divider />
			{/* Feature List */}
			{/* <FeatureList /> */}
			<Box sx={{ flex: 1, border: '2px solid green' }}></Box>
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
			{/* <List>
				<ListItemButton sx={{ justifyContent: 'center' }}>
					<Box
						component='img'
						src='/logo.png'
						alt='logo'
						sx={{
							width: 65,
							height: 65
						}}
					/>
				</ListItemButton>
				<ListItemButton sx={{ justifyContent: 'center', textAlign: 'center' }}>
					<ListItemText primary='HoHo Canada Ltd.' />
				</ListItemButton>
				<Divider />

				{sidebarItems.map((section, index) => (
					<Box key={index} mb={2}>
						{section.items.map(({ text, icon: Icon, color }) => (
							<ListItemButton
								key={text}
								sx={{
									display: 'flex',
									alignItems: 'center',
									justifyContent: 'center',
									mb: text === 'Report&KPIs' ? 6 : 0
								}}
							>
								{Icon && <Icon sx={{ color: 'white' }} />}{' '}
								<ListItemText
									primary={text}
									sx={{
										minWidth: 'auto',
										display: 'flex',
										textAlign: 'center',
										alignItems: 'center',
										justifyContent: 'center'
									}}
									slotProps={{
										primary: { style: { color: color || 'white' } }
									}}
								/>
							</ListItemButton>
						))}
					</Box>
				))}
			</List>
			<Divider />
			<ListItemButton>
				<ListItemIcon>
					<KeyboardDoubleArrowLeftIcon />
					<ListItemText primary='Collapse sidebar' />
				</ListItemIcon>
			</ListItemButton> */}
		</LeftDrawer>
	)
}

export default Sidebar
