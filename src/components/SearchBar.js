import styled from "styled-components";
import { IconButton, TextField } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { GrowDiv } from "./FlexDiv";

const SearchBarDiv = styled(GrowDiv)`
    display: flex;
    align-items: center;
    justify-content: center;
`;

const GrowTextField = styled(TextField)`
    flex: 1 0 auto;
`;

export default function SearchBar() {
    return (
        <SearchBarDiv>
            <GrowTextField
                id="search-bar"
                label="Search"
                variant="filled" />
            <IconButton>
                <SearchIcon />
            </IconButton>
        </SearchBarDiv>
    );
}