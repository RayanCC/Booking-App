import { Stack, Box, Typography, List, Divider } from '@mui/material'
import type { FC } from 'react'
import { requestSection } from '../constants'
import SideBarItem from './SideBarItem'

export const CompanyHeader: FC = () => (
	<Stack alignItems='center' pt={2} sx={{ border: '2px solid #f40', flex: 1 }}>
		{/* <Box component='img' src='/logo.png' alt='logo' sx={{ height: 100, width: '30%' }} /> */}
		<Box component='img' src='/logo.png' alt='logo' sx={{ maxWidth: 150, aspectRatio: 1 }} />
		<Typography>HoHo HVAC INC.</Typography>
		<Typography sx={{ fontWeight: 'bold', color: 'green', py: 1 }}>Default Entity</Typography>
		<List sx={{ width: '100%', border: '5px solid yellow' }} disablePadding>
			{requestSection.map(item => (
				<SideBarItem item={item} />
			))}
		</List>
		<Divider />
	</Stack>
)
