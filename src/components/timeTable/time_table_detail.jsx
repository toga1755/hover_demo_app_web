import React from "react";
import Header from "../header/header";
import { Box, IconButton, Typography } from "@mui/material";
import { useParams } from "react-router-dom";
import { division_days } from "../../constant/time_tables_constant";

export default function TimeTableDetailPage() {
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
                    <TimeTableDetail />
                </Box>
            </Box>
        </>
    );
}

function TimeTableDetail() {
    const params = useParams();
    return (
        <Box sx={{}}>
            <TimeTableDetailTitle
                divitiondaysId={params.divitiondaysId - 1}
                destinationId={params.destinationId - 1}
            />
            <TimeTableDetailContent
                divitiondaysId={params.divitiondaysId - 1}
                destinationId={params.destinationId - 1}
            />
        </Box>
    );
}

function TimeTableDetailTitle(props) {
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
            <Typography sx={{ fontSize: "20px" }}>
                {division_days[props.destinationId].displayName}
            </Typography>
            <Typography sx={{ fontSize: "20px", marginLeft: "15px" }}>
                {
                    division_days[props.destinationId]["infos"][
                        props.divitiondaysId
                    ].destination
                }
            </Typography>
        </Box>
    );
}

function TimeTableDetailContent(props) {
    return (
        <Box
            sx={{
                width: "100%",
                padding: "20px",
                display: "flex",
                fit: "contain",
                justifyContent: "center",
                alignItems: "center",
            }}
        >
            <img
                src={
                    division_days[props.divitiondaysId]["infos"][
                        props.destinationId
                    ].timeTableImg
                }
                alt="お知らせ画像"
                style={{
                    width: "100%",
                    maxHeight: "100%",
                    height: "auto",
                }}
            />
        </Box>
    );
}
