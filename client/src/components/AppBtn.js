import { IconButton } from "@mui/material";
import styled from "styled-components";
import AppIcon from "./AppIcon";

const TallIconBtn = styled(IconButton)`
    display: flex;
    align-self: stretch;
`;

export default function AppBtn(props) {
    const { component, to, color, dark, iconStyles } = props;

    return (
        <TallIconBtn component={component} to={to} color={color}>
          <AppIcon dark={dark} iconStyles={iconStyles} />
        </TallIconBtn>
    );
}