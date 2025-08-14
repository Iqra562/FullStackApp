import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { QueryClient, QueryClientProvider } from 'react-query'
import Login from './pages/Login'

function App() {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        refetchOnWindowFocus: false,
        refetchOnmount: false,
        refetchOnReconnect: false,
        retry: 0,
        staleTime: 5 * 1000, //cache expiry time
      },
    },
  });
 
  return (
    <>
      <QueryClientProvider client={queryClient}>
       <Login/>
      </QueryClientProvider>
    </>
  )
}

export default App
