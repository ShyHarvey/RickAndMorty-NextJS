import { Layout } from '@/components/layout/Layout'
import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { AnimatePresence } from 'framer-motion'
import { useRouter } from 'next/router'


export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter()
  const pageKey = router.asPath
  return (
    <Layout>
      <AnimatePresence initial={false} mode="wait">
        <Component key={pageKey} {...pageProps} />
      </AnimatePresence>
    </Layout>
  )
}
