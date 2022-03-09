import { useEffect } from "react"

import { AppProps } from "next/app"

import "./../styles/global.css"
import Layout from "./../components/Layout"

export default function MyApp({ Component, pageProps }: AppProps) {
  useEffect(() => {
    // eslint-disable-next-line no-console
    console.info(
      `%cℹ️ App version: %c${process.env.NEXT_PUBLIC_APP_VERSION}`,
      "color: dodgerblue;",
      "font-weight: 700; color: royalblue"
    )
  }, [])

  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}
