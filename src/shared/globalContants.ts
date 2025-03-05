import { createTheme } from '@mui/material/styles'
import colors from './colors'
import { orange } from '@mui/material/colors'

export const defaultTheme = createTheme(
	{
		direction: 'ltr',
		typography: {
			fontFamily: 'Cabin Variable',
			button: {
				textTransform: 'none'
			}
		},
		palette: {
			mode: 'dark',
			primary: {
				main: colors.brandPrimary
			},
			secondary: {
				main: colors.brandSecondary
			},
			background: {
				default: colors.white
			},
			text: {
				primary: colors.white
				// primary: '#F40'
			}
		},
		components: {
			MuiAppBar: {
				defaultProps: {
					color: 'default'
				}
			},
			MuiSkeleton: {
				defaultProps: {
					animation: 'wave'
				}
			},
			MuiDialog: {
				defaultProps: {
					disableEscapeKeyDown: true
				}
			},
			MuiButton: {
				defaultProps: {
					disableRipple: true
				},
				styleOverrides: {
					root: {}
				}
			}
		}
	}
	// datePickerLocaleMap[currentLanguage], // x-date-pickers translations,
	// coreLocaleMap[currentLanguage] // core translations
)
