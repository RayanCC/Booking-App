import { Drawer } from '@mui/material'

import type { FC, ReactNode } from 'react'

type LeftDrawerProps = {
	children?: ReactNode
	drawerWidth?: number
}

const LeftDrawer: FC<LeftDrawerProps> = ({ children = null, drawerWidth = 200 }) => {
	return (
		<Drawer
			variant='permanent'
			anchor='left'
			slotProps={{
				paper: {
					elevation: 1,
					sx: {
						width: drawerWidth,
						boxSizing: 'border-box',
						backgroundColor: theme => theme.palette.primary.main
					}
				}
			}}
			sx={{
				width: drawerWidth,
				flexShrink: 0
			}}
		>
			{children}
		</Drawer>
	)
}

export default LeftDrawer
