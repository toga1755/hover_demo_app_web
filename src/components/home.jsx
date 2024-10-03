import React from "react";
import Header from "./header/header";
import HeaderNotBack from "./header/header_no_back";
import TopNotice from "./top/topNotice";
import TopMenu from "./top/topMenu";
import { Box } from "@mui/material";

export default function HomePage() {
    return (
        <>
            <Box
                sx={{
                    display: "flex",
                    flexDirection: "column",
                    height: "100%",
                }}
            >
                <HeaderNotBack />
                <Box sx={{ height: "40%" }}>
                    <TopNotice />
                </Box>
                <Box sx={{ height: "50%" }}>
                    <TopMenu />
                </Box>
            </Box>
        </>
    );
}

