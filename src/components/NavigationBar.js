import styled from "styled-components";
import { Link } from "react-router-dom";
import { ReactComponent as ReactSearchLogo } from "../assets/searchicon.svg";
import { useAuth } from "../database/auth";
import SignInBtn from "./SignInBtn";
import ProfileBtn from "./ProfileBtn";
import { IconButton } from "@mui/material";
import { AddCircleOutline } from "@mui/icons-material";
import SearchIcon from "@mui/icons-material/Search";

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
      { user ? <ProfileBtn> Profile</ProfileBtn> : <SignInBtn url='/signin' /> }
      <IconButton component={ Link } to="/create-request">
        <AddCircleOutline />
      </IconButton>
      <SearchIcon />
    </MainContainer>
  );
}

export default NavigationBar;
