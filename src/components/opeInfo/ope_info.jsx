import React from "react";
import Header from "../header/header";
import { Box, IconButton, Typography } from "@mui/material";
import { defaultColor } from "../../constant/color_constant";
import { opeInfos } from "../../constant/ope_constant";

export default function OpeInfoPage() {
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
                <Box sx={{ height: "100%" }}>
                    <OpeTitle></OpeTitle>
                    <OpeInfoList></OpeInfoList>
                </Box>
            </Box>
        </>
    );
}

function OpeTitle() {
    return (
        <Box
            sx={{
                height: "16%",
                bgcolor: "orange",
                borderTop: "1px solid black",
                borderBottom: "1px solid black",
                padding: "20px",
                display: "flex",
                justifyContent: "left",
                alignItems: "center",
            }}
        >
            <Typography sx={{ fontSize: "24px" }}>運行状況</Typography>
        </Box>
    );
}

function OpeInfoList() {
    if (opeInfos.length == 0) {
        return <OpeInfoContentEmpty></OpeInfoContentEmpty>;
    }
    return (
        <Box>
            {opeInfos.map((opeInfo) => (
                <OpeInfoContent key={opeInfo.id} {...opeInfo} />
            ))}
        </Box>
    );
}

function OpeInfoContent(props) {
    return (
        <Box
            sx={{
                minHeight: "13vh",
                bgcolor: defaultColor,
                borderBottom: "1px solid black",
                display: "flex",
                justifyContent: "left",
                alignItems: "center",
                padding: "20px",
            }}
        >
            <Typography sx={{ fontSize: "16px" }}>{props.content}</Typography>
        </Box>
    );
}

function OpeInfoContentEmpty() {
    return (
        <Box
            sx={{
                minHeight: "13vh",
                bgcolor: defaultColor,
                borderBottom: "1px solid black",
                display: "flex",
                justifyContent: "left",
                alignItems: "center",
                padding: "20px",
            }}
        >
            <Typography sx={{ fontSize: "16px" }}>
                運行状況はありません。
            </Typography>
        </Box>
    );
}
