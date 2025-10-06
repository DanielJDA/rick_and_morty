import type { AppProps } from 'next/app'
import '@/styles/globals.css'
import { FavoritesProvider } from '@/components/FavoritesContext'
import HeaderBar from '@/components/HeaderBar'

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <FavoritesProvider>
      <HeaderBar />
      <Component {...pageProps} />
    </FavoritesProvider>
  )
}
