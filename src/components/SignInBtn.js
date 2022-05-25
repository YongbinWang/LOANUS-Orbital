import { Button } from "@mui/material";
import { Link } from "react-router-dom";

export default function SignInBtn(props) {
    const url = props.url;

    return (
        <Button variant="contained" component={ Link } to={ url }>
            Sign In
        </Button>
    );
}