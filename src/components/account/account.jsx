import React from "react";
import Header from "../header/header";
import { Box, IconButton, Typography } from "@mui/material";
import { defaultColor } from "../../constant/color_constant";
import { accountTable } from "../../constant/account_constant";
import ArrowRightOutlinedIcon from "@mui/icons-material/ArrowRightOutlined";
import { useNavigate } from "react-router-dom";

export default function AccountPage() {
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
                <Box sx={{ height: "100%" }}>
                    {accountTable.map((account) => (
                        <AccountList key={account.id} {...account} />
                    ))}
                </Box>
            </Box>
        </>
    );
}

function AccountList(props) {
    return (
        <Box sx={{}}>
            {/* アカウントのタイトル */}
            <AccountButton
                key={props.id}
                destination={props.destination}
                name={props.name}
            />
        </Box>
    );
}

function AccountTitle(props) {
    return (
        <Box
            sx={{
                height: "16%",
                bgcolor: defaultColor,
                borderTop: "1px solid black",
                borderBottom: "1px solid black",
                padding: "20px",
                display: "flex",
                alignItems: "center",
            }}
        >
            <Typography
                sx={{
                    fontSize: "20px",
                }}
            >
                {props.title}
            </Typography>
        </Box>
    );
}

function AccountButton(props) {
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
                    navigate("/account/" + props.name)
                }
            >
                <ArrowRightOutlinedIcon />
            </IconButton>
        </Box>
    );
}

