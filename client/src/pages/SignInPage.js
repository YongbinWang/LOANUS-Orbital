import styled from "styled-components";
import SignInCard from "../components/SignInCard";

const ContainerStyle = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  height: 100vh;
  background-color: aliceblue;
`;

function SignInPage() {

  return (
    <ContainerStyle>
      <SignInCard />
    </ContainerStyle>
  );
}

export default SignInPage;
