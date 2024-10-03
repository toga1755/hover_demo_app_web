import React from "react";
import Header from "../header/header";
import { Box, IconButton, Typography } from "@mui/material";
import { defaultColor } from "../../constant/color_constant";
import { division_days } from "../../constant/time_tables_constant";
import ArrowRightOutlinedIcon from "@mui/icons-material/ArrowRightOutlined";
import { useNavigate } from "react-router-dom";

export default function TimeTablePage() {
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
                    {/* 平日または土日祝日で分ける */}
                    {division_days.map((divided) => (
                        <TimeTableList key={divided.id} {...divided} />
                    ))}
                </Box>
            </Box>
        </>
    );
}

function TimeTableList(props) {
    return (
        <Box sx={{}}>
            {/* 平日または土日祝日のタイトル */}
            <TimeTableTitle title={props.displayName}></TimeTableTitle>
            {/* 平日または土日祝日の時刻表の情報を渡す */}
            {props.infos.map((info) => (
                <TimeTableButton
                    key={info.id}
                    dividedId={props.id}
                    name={props.name}
                    displayName={props.displayName}
                    {...info}
                />
            ))}
        </Box>
    );
}

function TimeTableTitle(props) {
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
            <Typography sx={{ fontSize: "20px" }}>{props.title}</Typography>
        </Box>
    );
}

function TimeTableButton(props) {
    const navigate = useNavigate();
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
                {props.destination}
            </Typography>
            <IconButton
                sx={{
                    marginLeft: "auto",
                }}
                onClick={() =>
                    // 平日か土日祝か・行き先・画像を渡す
                    navigate("/timetable/" + props.dividedId + "/" + props.id)
                }
            >
                <ArrowRightOutlinedIcon />
            </IconButton>
        </Box>
    );
}
