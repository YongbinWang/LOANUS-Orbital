import styled from "styled-components";
import { Link } from "react-router-dom";
import { useAuth } from "../database/auth";
import SignInBtn from "./SignInBtn";
import ProfileBtn from "./ProfileBtn";
import CreateBtn from "./CreateBtn";
import SearchBar from "./SearchBar";
import { Button } from "@mui/material";

const MainContainer = styled.nav`
  background-color: #2d3c4a;
  height: 10vh;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 0ex 1ex;
`;

const NavLink = styled(Link)`
  color: white;
  flex: 0 1 auto;
  padding: 0ex 1ex;
`;

const HomeBtn = styled(Button)`
  flex: 0 1 auto;
  color: white;
`;

function NavigationBar() {
  const { user } = useAuth();
  return (
    <MainContainer>
      <HomeBtn component={ Link } to="/home">Home Page</HomeBtn>
      <SearchBar />
      <CreateBtn />
      { user ? <ProfileBtn> Profile</ProfileBtn> : <SignInBtn url='/signin' /> }
    </MainContainer>
  );
}

export default NavigationBar;
