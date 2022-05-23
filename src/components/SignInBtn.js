import { Link } from "react-router-dom";

export default function SignInBtn(props) {
    const url = props.url;

    return (
        <Link to={ url }>
            <button type="button">Sign In</button>
        </Link>
    );
}