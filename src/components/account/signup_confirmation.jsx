import React from "react";
import Header from "../header/header";
import { Box, IconButton, Typography, Button } from "@mui/material";
import { defaultColor } from "../../constant/color_constant";
import ArrowRightOutlinedIcon from "@mui/icons-material/ArrowRightOutlined";
import { useNavigate } from "react-router-dom";
import TextField from "@mui/material/TextField";
import { useState } from "react";
import { useLocation } from 'react-router-dom';
import { useTheme } from '@mui/material/styles';

export default function SignupConfirmationPage() {  
    return (
        <>
            <Box
                sx={{
                    display: "flex",
                    flexDirection: "column",
                    height: "100%",
                }}
            >
                <Header />
                {/* ヘッダーが89.4% */}
                <SignupConfirmationTitle></SignupConfirmationTitle>

                <SignupConfirmationContent></SignupConfirmationContent>
            </Box>
        </>
    );
}

function SignupConfirmationTitle() {
    return (
        <Box
            sx={{
                height: "10%",
                bgcolor: "orange",
                borderTop: "1px solid black",
                borderBottom: "1px solid black",
                padding: "16px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
            }}
        >
            <Typography sx={{ fontSize: "20px" }}>アカウント確認</Typography>
        </Box>
    );
}

function SignupConfirmationContent() {
    const navigate = useNavigate();
    const location = useLocation();
    const { email, name, nameKana, userID, password } = location.state;

    const [showPassword, setShowPassword] = useState(false);

    const handleShowPassword = () => {
        setShowPassword(!showPassword);
    };
    
    const theme = useTheme();
    
    const typographyStyle = {
        marginBottom: 2,
    };

    return (
        <Box 
            sx={{ 
                height: "100%", 
                bgcolor: defaultColor,
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-around',
                alignItems: 'center',
            }}
        >
            <Box 
                sx={{ 
                    width: 'max-content', 
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'flex-start',
                }}
            >
                <Typography sx={typographyStyle}>お名前: {name}</Typography>
                <Typography sx={typographyStyle}>お名前 (カナ): {nameKana}</Typography>
                <Typography sx={typographyStyle}>メールアドレス: {email}</Typography>
                <Typography sx={typographyStyle}>ユーザID: {userID}</Typography>
                <Typography sx={typographyStyle}>パスワード: {showPassword ? password : '*'.repeat(password.length)}</Typography>
                <Button onClick={handleShowPassword} sx={{ marginTop: 2 }}>{showPassword ? 'Hide Password' : 'Show Password'}</Button>
            </Box>
            <Box
                sx={{
                    textAlign: "center",
                    height: "17%",
                    paddingTop: "30px",
                }}
            >
                <Button
                    type="button"
                    onClick={() =>
                        // welcome.jsxに遷移
                        navigate("../")
                    }
                    sx={{
                        textAlign: "center",
                        height: "100%",
                        width: "150%",
                        bgcolor: "orange",
                        color: "white",
                    }}
                >
                    ホーム
                </Button>
            </Box>
        </Box>
    );
}