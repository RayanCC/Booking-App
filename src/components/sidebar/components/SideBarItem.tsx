import { ListItem, ListItemButton, ListItemIcon, ListItemText, Typography } from '@mui/material'
import { iconMapping } from '../constants'
import type { FC } from 'react'
import type { SideBarItem } from '../types'

type SideBarItemProps = {
	item: SideBarItem
}
const SideBarItem: FC<SideBarItemProps> = ({ item }) => {
	const { title, iconName, path = '/' } = item

	return (
		<ListItem component='div' disablePadding sx={{ px: 6, py: 1 }}>
			<ListItemButton>
				<ListItemIcon sx={{ color: 'white', fontSize: 28 }}>{iconMapping[iconName]}</ListItemIcon>
				<ListItemText
					primary={title}
					slotProps={{
						primary: {
							sx: {
								fontWeight: 'bold',
								ml: theme => theme.spacing(3),
								color: title === 'Default Entity' ? 'green' : 'inherit'
							} // spacing text margin left 8*3 px
						}
					}}
				/>
			</ListItemButton>
		</ListItem>
	)
}

export default SideBarItem
