import { ReactNode } from "react"

import Meta from "./../layout/Meta"
import { AppConfig } from "./../utils/AppConfig"

interface MainProps {
  meta?: ReactNode
}

const Main: React.FC<MainProps> = (props) => {
  const { meta, children } = props

  return (
    <>
      <div className="antialiased w-full">
        {meta ?? (
          <Meta title={AppConfig.title} description={AppConfig.description} />
        )}
        {children}
      </div>
    </>
  )
}

export default Main
