import Wrapper from "./Wrapper"
import Meta from "./../layout/Meta"
import Main from "./../templates/Main"
import { AppConfig } from "./../utils/AppConfig"

import Footer from "./Footer"
import Navbar from "./TopNavbar"

const Layout = ({ children }: any) => {
  return (
    <Main meta={<Meta title={AppConfig.title} />}>
      <Wrapper>
        <Navbar />
        {children}
        <Footer />
      </Wrapper>
    </Main>
  )
}

export default Layout
