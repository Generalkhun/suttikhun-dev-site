import React from 'react'

interface Props {
  Component: typeof React.Component
  pageProps: {}
}
function MyApp({ Component, pageProps }: Props) {
  return (
    <Component {...pageProps} />
  )
}

export default MyApp