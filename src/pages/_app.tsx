import { Layout } from '@/components/layout/Layout'
import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { AnimatePresence } from 'framer-motion'
import { useRouter } from 'next/router'


export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter()
  const pageKey = router.pathname
  return (
    <Layout>
      <AnimatePresence mode="popLayout">
        <Component key={pageKey} {...pageProps} />
      </AnimatePresence>
    </Layout>
  )
}
