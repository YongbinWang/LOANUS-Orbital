import { TextField } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

export default function SearchBar() {
    return (
        <div>
            <TextField
                id="search-bar"
                hiddenLabel
                defaultValue="Search"
                variant="filled" />
            <SearchIcon />
        </div>
    );
}