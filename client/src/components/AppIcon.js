import { ReactComponent as DarkAppIcon } from "../assets/loanus-icon-dark.svg";
import { ReactComponent as LightAppIcon } from "../assets/loanus-icon-light.svg";
import styled from "styled-components";

const DarkTallAppIcon = styled(DarkAppIcon)`
    align-self: stretch;
`;

const LightTallAppIcon = styled(LightAppIcon)`
    align-self: stretch;
`;

export default function AppIcon(props) {
    const { dark } = props;
    if (dark) {
        return (
            <DarkTallAppIcon/>
        );
    }
    <LightTallAppIcon/>
}