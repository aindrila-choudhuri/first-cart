import React from "react"

import Meta from "./../layout/Meta"
import Main from "./../templates/Main"
import { AppConfig } from "./../utils/AppConfig"

const ErrorPage = () => {
  return (
    <Main
      meta={
        <Meta title={`404 Page Not Found | ${AppConfig.title}`} isNoIndex />
      }
    >
      Error
    </Main>
  )
}

export default ErrorPage
