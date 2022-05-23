import styled from "styled-components";
import { useAuth } from "../database/auth";

const ContainerStyle = styled.div`
  background-color: aliceblue;
`;

function SignInPage() {
  const { signInWithGoogle } = useAuth();

  return (
    <ContainerStyle>
      <button onClick={signInWithGoogle}>Sign In</button>
    </ContainerStyle>
  );
}

export default SignInPage;
