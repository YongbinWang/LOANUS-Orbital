import { Link } from "react-router-dom";

export default function SignInBtn() {
    return (
        <Link to="/signin">
            <button type="button">Sign In</button>
        </Link>
    );
}