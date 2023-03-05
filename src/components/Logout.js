import React, {useState} from "react";
import Button from "@mui/material/Button";
import Snackbar from '@mui/material/Snackbar';
import Stack from '@mui/material/Stack';


function Logout() {

    // const [isAuthenticated, setAuth] = useState(false);
    const [open, setOpen] = useState(false);

    const logout = () => {
        sessionStorage.removeItem("jwt");
        // setAuth(false);
    }
    return (
        <div>
            <Stack spacing={2} alignItems='center' mt={2}>
                <Button
                    variant="outlined"
                    color="alert"
                    onClick={logout}>
                    Logout
                </Button>
            </Stack>
            <Snackbar
                open={open}
                autoHideDuration={3000}
                onClose={() => setOpen(false)}
                message="Login failed: Check your username and password"
            />
        </div>
            );

            }
            export default Logout;