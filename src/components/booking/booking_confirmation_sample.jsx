import React from "react";
import Header from "../header/header";
import { Box, IconButton, Typography, Button } from "@mui/material";
import { defaultColor } from "../../constant/color_constant";
import ArrowRightOutlinedIcon from "@mui/icons-material/ArrowRightOutlined";
import { useNavigate } from "react-router-dom";
import { useLocation } from 'react-router-dom';
import { useTheme } from '@mui/material/styles';

export default function BookingConfirmationSamplePage() {  
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
                <BookingConfirmationSampleTitle></BookingConfirmationSampleTitle>

                <BookingConfirmationSampleContent></BookingConfirmationSampleContent>
            </Box>
        </>
    );
}

function BookingConfirmationSampleTitle() {
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
            <Typography sx={{ fontSize: "20px" }}>予約確認</Typography>
        </Box>
    );
}

function BookingConfirmationSampleContent() {
    const navigate = useNavigate();
    
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
                <Typography sx={typographyStyle}>予約日: 2000/01/01</Typography>
                <Typography sx={typographyStyle}>行き先: 大分空港行き</Typography>
                <Typography sx={typographyStyle}>時間: 10:00</Typography>
                <Typography sx={typographyStyle}>人数: 1</Typography>
                <Typography sx={typographyStyle}>支払方法: クレジットカード</Typography>
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