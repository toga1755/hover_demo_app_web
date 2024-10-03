import React from "react";
import Header from "../header/header";
import { Box, IconButton, Typography } from "@mui/material";
import { defaultColor } from "../../constant/color_constant";
import ArrowRightOutlinedIcon from "@mui/icons-material/ArrowRightOutlined";
import { useNavigate } from "react-router-dom";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

export default function LoginPage() {  
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
                <LoginTitle></LoginTitle>

                <LoginContent></LoginContent>
            </Box>
        </>
    );
}

function LoginTitle() {
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
            <Typography sx={{ fontSize: "20px" }}>Login</Typography>
        </Box>
    );
}

function LoginContent() {
    // ユーザ名とパスワードを入力する入力欄
    const navigate = useNavigate();
    return (
        <Box sx={{ height: "100%" }}>
            <Box
                sx={{
                    height: "100%",
                }}
            >
                <Box
                    sx={{
                        textAlign: "center",
                        paddingTop: "40px",
                    }}
                >
                    <TextField
                        type="text"
                        aria-label="ユーザ名入力"
                        placeholder="ユーザ名"
                        variant="filled"
                        sx={{ height: "100%", width: "70%" }}
                        inputProps={{
                            style: {
                                height: "20%",
                                bgcolor: "red",
                            },
                        }}
                    />
                </Box>
                <Box
                    sx={{
                        textAlign: "center",
                        paddingTop: "20px",
                    }}
                >
                    <TextField
                        type="password"
                        aria-label="パスワード入力"
                        placeholder="パスワード"
                        variant="filled"
                        sx={{ height: "100%", width: "70%" }}
                        inputProps={{
                            style: {
                                height: "20%",
                                bgcolor: "red",
                            },
                        }}
                    />
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
                            width: "50%",
                            bgcolor: "orange",
                            color: "white",
                        }}
                    >
                        ログイン
                    </Button>
                </Box>
            </Box>
        </Box>
    );
}