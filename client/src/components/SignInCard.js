import { Box, Button, Card, FormControl, IconButton, InputAdornment, InputLabel, Link, OutlinedInput, Typography } from "@mui/material";
import Visibility from '@mui/icons-material/Visibility';
import styled from "styled-components";
import { useAuth } from "../database/auth";
import { VisibilityOff } from "@mui/icons-material";
import { useState } from "react";
import GoogleIcon from '@mui/icons-material/Google';

const FlexCard = styled(Card)`
    display: flex;
    flex-direction: column;
    align-items: center;
    align-self: center;
    padding: 1em 1ex;
    gap: 1em;
`;

const WideBox = styled(Box)`
    display: flex;
    justify-content: space-between;
    flex-basis: 100%;
    flex-direction: row;
    align-self: stretch;
`;

const WideBtn = styled(Button)`
    align-self: stretch;
`;

const WideFormControl = styled(FormControl)`
    align-self: stretch;
`;

export default function SignInCard() {
    const { signInWithGoogle } = useAuth();
    const [values, setValues] = useState({
        showPassword: false,
    });
    
    const handleClickShowPassword = () => {
        setValues({
            showPassword: !values.showPassword,
        });
    };
    
    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };

    return (
      <FlexCard component="form" color="secondary">
          <Typography variant="body1">Log in to your account</Typography>
          <WideFormControl required variant="outlined">
              <InputLabel htmlFor="email">Email</InputLabel>
              <OutlinedInput
                required
                id="email"
                variant="outlined"
                label="Email" />
          </WideFormControl>
          <WideFormControl required variant="outlined">
              <InputLabel htmlFor="password">Password</InputLabel>
              <OutlinedInput
                id="password"
                type={values.showPassword ? "text" : "password"}
                endAdornment={
                    <InputAdornment position="end">
                        <IconButton
                          onClick={handleClickShowPassword}
                          onMouseDown={handleMouseDownPassword}
                          edge="end">
                              {values.showPassword ? <VisibilityOff /> : <Visibility />}
                          </IconButton>
                    </InputAdornment>
                }
                label="Password"
                />
          </WideFormControl>
          <WideBtn
            id="signin"
            type="submit"
            variant="contained"
            color="success">Sign In</WideBtn>
          <Typography variant="body1">OR</Typography>
          <WideBtn variant="contained" startIcon={<GoogleIcon />} onClick={signInWithGoogle}>Sign in with Google</WideBtn>
          <WideBox>
              <Link component={Link} to="#">Can't log in?</Link>
              <Link component={Link} to="#">Create an account</Link>
          </WideBox>
      </FlexCard>  
    );
}