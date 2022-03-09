import Wrapper from "./../components/Wrapper"
import Meta from "./../layout/Meta"
import Main from "./../templates/Main"
import { AppConfig } from "./../utils/AppConfig"

const Login: React.FC = () => {
  return (
    <Main meta={<Meta title={AppConfig.title} />}>
      <Wrapper>
        <h1 className="text-3xl font-bold underline">Login Page</h1>
      </Wrapper>
    </Main>
  )
}

export default Login
