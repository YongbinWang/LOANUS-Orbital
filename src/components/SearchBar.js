import styled from "styled-components";
import { TextField } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

const SearchBarDiv = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 1ex;
    flex: 1 0 auto;
`;

const GrowTextField = styled(TextField)`
    flex: 1 0 auto;
`;

export default function SearchBar() {
    return (
        <SearchBarDiv>
            <GrowTextField
                id="search-bar"
                hiddenLabel
                defaultValue="Search"
                variant="filled" />
            <SearchIcon />
        </SearchBarDiv>
    );
}