import { List, ListItemButton, ListItemText, Divider, ListItemIcon, Box } from '@mui/material'
import KeyboardDoubleArrowLeftIcon from '@mui/icons-material/KeyboardDoubleArrowLeft'
import { sidebarItems } from './sidebarItems'

import type { FC } from 'react'
import LeftDrawer from '../layouts/LeftDrawer'

const Sidebar: FC = () => {
	return (
		<LeftDrawer>
			<List>
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
			</ListItemButton>
		</LeftDrawer>
	)
}

export default Sidebar
