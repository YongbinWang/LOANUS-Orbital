import styled from "styled-components";
import { TextField } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

const SearchBarDiv = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`;

export default function SearchBar() {
    return (
        <SearchBarDiv>
            <TextField
                id="search-bar"
                hiddenLabel
                defaultValue="Search"
                variant="filled" />
            <SearchIcon />
        </SearchBarDiv>
    );
}