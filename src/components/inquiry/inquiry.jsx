import React from "react";
import Header from "../header/header";
import { Box, Button } from "@mui/material";
import { defaultColor } from "../../constant/color_constant";
import { Typography } from "@mui/material";
import InquiryContent from "./inquiery_content";

export default function InquiryPage() {
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
                <InquiryTitle></InquiryTitle>

                <InquiryContent></InquiryContent>
            </Box>
        </>
    );
}

function InquiryTitle() {
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
            <Typography sx={{ fontSize: "20px" }}>お問い合わせ</Typography>
        </Box>
    );
}
