import styled from "styled-components";
import NavigationBar from "../components/NavigationBar";

const MainContainer = styled.div`
  background-color: #fafdf3;
`;

function HomePage() {
  return (
    <MainContainer>
      <NavigationBar></NavigationBar>
    </MainContainer>
  );
}

export default HomePage;
