import { ListItem, ListItemButton, ListItemIcon, ListItemText } from '@mui/material'
import { iconMapping } from '../constants'
import type { FC } from 'react'
import type { SideBarItem } from '../types'

type SideBarItemProps = {
	item: SideBarItem
}
const SideBarItem: FC<SideBarItemProps> = ({ item }) => {
	const { title, iconName, path = '/' } = item

	return (
		<ListItem component='div' disablePadding>
			<ListItemButton>
				<ListItemIcon sx={{ color: 'white', fontSize: 28 }}>{iconMapping[iconName]}</ListItemIcon>
				<ListItemText
					primary={title}
					slotProps={{
						primary: {
							sx: {
								fontWeight: 'bold',
								ml: theme => theme.spacing(3),
							} // spacing text margin left 8*3 px
						}
					}}
				/>
			</ListItemButton>
		</ListItem>
	)
}

export default SideBarItem
