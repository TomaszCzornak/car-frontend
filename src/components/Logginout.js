import React, {useState} from "react";
import {Logout} from "@mui/icons-material";


function Loggingout() {

    const [isAuthenticated, setAuth] = useState(true);

    const logouted = () => {
        sessionStorage.removeItem("jwt");
        setAuth(false);
        window.location.href = 'https://localhost:3006';

    }
    return (
        <div>
            <Logout alignItems="right" onClick={logouted} style={{cursor: 'pointer'}}/>

        </div>
    );

}

export default Loggingout;