import { Stack, Box, Typography } from '@mui/material'
import type { FC } from 'react'

export const CompanyHeader: FC = () => (
	<Stack alignItems='center' spacing={1} py={2}>
		<Box component='img' src='/logo.png' alt='logo' sx={{ height: 100, width: '30%' }} />
		<Typography>HoHo HVAC INC.</Typography>
	</Stack>
)
