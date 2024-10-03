import React from "react";
import Header from "../header/header";
import { Box, IconButton, Typography } from "@mui/material";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { useNavigate } from "react-router-dom";
import { noticeInfo } from "../../constant/notices_constant";
import { defaultColor } from "../../constant/color_constant";

export default function NoticeListPage() {
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
                <Box
                    sx={{
                        height: "89.4%",
                        bgcolor: defaultColor,
                        paddingTop: "10px",
                        paddingBottom: "10px",
                    }}
                >
                    <NoticeList></NoticeList>
                </Box>
            </Box>
        </>
    );
}

function NoticeList() {
    return (
        <Box
            sx={{
                height: "100%",
                overflow: "scroll",
            }}
        >
            {noticeInfo.map((notice) => (
                <NoticeContent key={notice.id} {...notice} />
            ))}
        </Box>
    );
}

function NoticeContent(props) {
    const navigate = useNavigate();
    return (
        <Box
            sx={{
                borderBottom: "0.5px solid black",
                height: "22%",
                marginLeft: "15px",
                marginRight: "15px",
                display: "flex",
                padding: "10px",
            }}
        >
            {/* 画像ボックス */}
            <Box
                sx={{
                    height: "100%",
                    width: "30%",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                }}
            >
                <img
                    src={props.image}
                    // src="/img/ive.png"
                    alt="画像"
                    style={{ height: "100%", width: "auto" }}
                />
            </Box>
            {/* テキストのボックス */}
            <Box sx={{ width: "60%", paddingLeft: "15px" }}>
                {/* タイトル */}
                <Typography
                    sx={{
                        fontSize: "20px",
                        height: "35%",
                        overflow: "scroll",
                    }}
                >
                    {props.title}
                </Typography>
                {/* 本文 */}
                <Typography
                    sx={{
                        fontSize: "14px",
                        height: "60%",
                        overflow: "scroll",
                    }}
                >
                    {props.content}
                </Typography>
            </Box>
            {/* アイコンのボックス */}
            <Box
                sx={{
                    width: "10%",
                    display: "flex",
                    justifyContent: "right",
                    alignItems: "center",
                }}
                onClick={() => navigate("/notice/" + props.id)}
            >
                <IconButton>
                    <ArrowForwardIosIcon sx={{}} />
                </IconButton>
            </Box>
        </Box>
    );
}
