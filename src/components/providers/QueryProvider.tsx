import type { ReactNode } from 'react'
import { QueryClientProvider, QueryClient, keepPreviousData } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import { AxiosError } from 'axios'

export const statusCodes = [408, 413, 429, 502, 503, 504]

const queryClient = new QueryClient({
	defaultOptions: {
		queries: {
			retry: (failureCount, error) => {
				if (error instanceof AxiosError) {
					// TODO: add retry logic here
				}
				return false
			},
			placeholderData: keepPreviousData,
			staleTime: 60 * 1000, // 60 seconds
			gcTime: 1000 * 60 * 60 * 24 // 24 hours
		}
	}
})

type QueryClientProviderProps = {
	children?: ReactNode
}

const QueryProvider = ({ children }: QueryClientProviderProps) => (
	<QueryClientProvider client={queryClient}>
		<ReactQueryDevtools position='right' />
		{children}
	</QueryClientProvider>
)

export default QueryProvider
