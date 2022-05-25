import styled from "styled-components";
import { Link } from "react-router-dom";
import { useAuth } from "../database/auth";
import SignInBtn from "./SignInBtn";
import ProfileBtn from "./ProfileBtn";
import CreateBtn from "./CreateBtn";
import SearchBar from "./SearchBar";

const MainContainer = styled.nav`
  background-color: #2d3c4a;
  width: 100vw;
  height: 10vh;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

const NavLink = styled(Link)`
  color: white;
`;

function NavigationBar() {
  const { user } = useAuth();
  return (
    <MainContainer>
      <NavLink to="/home">Home Page</NavLink>
      <SearchBar />
      <CreateBtn />
      { user ? <ProfileBtn> Profile</ProfileBtn> : <SignInBtn url='/signin' /> }
    </MainContainer>
  );
}

export default NavigationBar;
