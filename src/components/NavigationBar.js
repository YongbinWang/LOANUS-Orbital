import styled from "styled-components";
import { Link } from "react-router-dom";
import { ReactComponent as ReactSearchLogo } from "../assets/searchicon.svg";
import { useAuth } from "../database/auth";
import SignInBtn from "./SignInBtn";
import ProfileLink from "./ProfileLink";
import { IconButton } from "@mui/material";
import { AddCircleOutline } from "@mui/icons-material";

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

const SearchIcon = styled(ReactSearchLogo)``;

function NavigationBar() {
  const { user } = useAuth();
  return (
    <MainContainer>
      <NavLink to="/home">Home Page</NavLink>
      { user ? <ProfileLink> Profile</ProfileLink> : <SignInBtn url='/signin' /> }
      <IconButton component={ Link } to="/create-request">
        <AddCircleOutline />
      </IconButton>
      <SearchIcon></SearchIcon>
    </MainContainer>
  );
}

export default NavigationBar;
