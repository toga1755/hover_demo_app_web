import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import { useNavigate } from "react-router-dom";

function Contents() {
    const navigate = useNavigate();
    return (
        <Box
            sx={{
                flexGrow: 1,
                display: "flex",
                m: 1,
                p: 1,
                color: "white",
                border: "none",
                borderColor: "grey.800",
                borderRadius: 2,
                fontSize: "0.875rem",
                fontWeight: "700",
                width: "inherit",
            }}
        >
            <IconButton sx={{}} onClick={() => navigate(-1)}>
                <ArrowBackIosIcon sx={{ color: "white" }} />
            </IconButton>
            <Typography
                variant="h6"
                component="div"
                sx={{
                    flexGrow: 1,
                    color: "white",
                    justifyContent: "center",
                    alignItems: "center",
                    textAlign: "center",
                }}
            >
                ホーバーデモアプリ
            </Typography>
        </Box>
    );
}

export default function ButtonAppBar() {
    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static">
                <Toolbar sx={{ bgcolor: "orange" }}>
                    <Contents />
                </Toolbar>
            </AppBar>
        </Box>
    );
}

