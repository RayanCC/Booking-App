import { Drawer } from '@mui/material'

import type { FC, ReactNode } from 'react'

type LeftDrawerProps = {
	children?: ReactNode
}

const LeftDrawer: FC<LeftDrawerProps> = ({ children = null }) => {
	return (
		<Drawer
			variant='permanent'
			anchor='left'
			sx={{
				width: 200
				// '& .MuiDrawer-paper': {
				// 	width: 200,
				// 	backgroundColor: '#1a237e'
				// },
				// '& .MuiListItemText-root': {
				// 	color: 'white'
				// }
			}}
		>
			{children}
		</Drawer>
	)
}

export default LeftDrawer
