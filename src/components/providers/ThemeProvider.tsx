import type { ReactNode } from 'react'
import { ThemeProvider as MuiThemeProvider } from '@mui/material/styles'
import CssBaseline from '@mui/material/CssBaseline'
import GlobalStyles from '@mui/material/GlobalStyles'
import { defaultTheme } from '../../shared/globalContants'

const globalStyles = (
	<GlobalStyles
		styles={{
			fieldset: {
				border: 'none',
				padding: 0,
				margin: 0
			}
		}}
	/>
)

type ThemeProviderProps = {
	children?: ReactNode
}

const ThemeProvider = ({ children }: ThemeProviderProps) => {
	return (
		<MuiThemeProvider theme={defaultTheme}>
			<CssBaseline enableColorScheme />
			{globalStyles}
			{children}
		</MuiThemeProvider>
	)
}

export default ThemeProvider
