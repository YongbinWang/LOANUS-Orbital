import { Button } from "@mui/material";
import styled from "styled-components";
import { useAuth } from "../database/auth";

const ContainerStyle = styled.div`
  background-color: aliceblue;
`;

function SignInPage() {
  const { signInWithGoogle } = useAuth();

  return (
    <ContainerStyle>
      <Button onClick={ signInWithGoogle }>Sign In</Button>
    </ContainerStyle>
  );
}

export default SignInPage;
