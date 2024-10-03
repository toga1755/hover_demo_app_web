import React from "react";
import Header from "../header/header";
import { Box, Typography } from "@mui/material";
import { noticeInfo } from "../../constant/notices_constant";
import { useLocation } from "react-router-dom";
import { useParams } from "react-router-dom";
import { defaultColor } from "../../constant/color_constant";

export default function NoticeDetailPage() {
    return (
        <>
            <Box
                sx={{
                    display: "flex",
                    flexDirection: "column",
                    height: "100vh",
                    bgcolor: defaultColor,
                }}
            >
                <Header />
                {/* ヘッダーが89.4% */}
                <Box
                    sx={{
                        // height: "89.4%",
                        paddingTop: "10px",
                        paddingBottom: "10px",
                        bgcolor: defaultColor,
                    }}
                >
                    <NoticeDetail></NoticeDetail>
                </Box>
            </Box>
        </>
    );
}

function NoticeDetail() {
    const params = useParams();
    return (
        <Box sx={{}}>
            {/* お知らせタイトル */}
            <Box
                sx={{
                    paddingTop: "10px",
                    paddingLeft: "40px",
                    paddingRight: "40px",
                }}
            >
                <Typography
                    sx={{
                        fontSize: "28px",
                        textAlign: "center",
                    }}
                >
                    {noticeInfo[params.id - 1].title}
                </Typography>
            </Box>
            {/* お知らせ画像 */}
            <Box
                sx={{
                    height: "50vh",
                    padding: "20px",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                }}
            >
                <img
                    src={noticeInfo[params.id - 1].image}
                    alt="お知らせ画像"
                    style={{
                        height: "100%",
                        width: "auto",
                    }}
                />
            </Box>
            {/* お知らせ内容 */}
            <Box sx={{ padding: "40px", paddingTop: "10px" }}>
                <Box
                    sx={{
                        borderRadius: "20px",
                        border: "0.5px solid black",
                        // bgcolor: "yellow",
                        height: "100%",
                        padding: "30px",
                    }}
                >
                    <Typography>{noticeInfo[params.id - 1].content}</Typography>
                </Box>
            </Box>
        </Box>
    );
}
