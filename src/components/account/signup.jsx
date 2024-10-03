import React from "react";
import Header from "../header/header";
import { Box, IconButton, Typography } from "@mui/material";
import { defaultColor } from "../../constant/color_constant";
import ArrowRightOutlinedIcon from "@mui/icons-material/ArrowRightOutlined";
import { useNavigate } from "react-router-dom";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { useState } from "react";

export default function SignupPage() {  
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
                <SignupTitle></SignupTitle>

                <SignupContent></SignupContent>
            </Box>
        </>
    );
}

function SignupTitle() {
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
            <Typography sx={{ fontSize: "20px" }}>Signup</Typography>
        </Box>
    );
}

function SignupContent() {
    // ユーザ名とパスワードを入力する入力欄
    const navigate = useNavigate();
    const [name, setName] = useState('');
    const [nameKana, setNameKana] = useState('');
    const [email, setEmail] = useState('');
    const [userID, setUserID] = useState('');
    const [password, setPassword] = useState('');

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
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        aria-label="お名前入力"
                        placeholder="お名前"
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
                        type="text"
                        value={nameKana}
                        onChange={(e) => setNameKana(e.target.value)}
                        aria-label="お名前入力"
                        placeholder="お名前(カナ)"
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
                        paddingTop: "40px",
                    }}
                >
                    <TextField
                        type="email"
                        aria-label="メールアドレス入力"
                        placeholder="メールアドレス"
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
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        aria-label="メールアドレス入力"
                        placeholder="メールアドレス(確認)"
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
                        paddingTop: "40px",
                    }}
                >
                    <TextField
                        type="text"
                        value={userID}
                        onChange={(e) => setUserID(e.target.value)}
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
                        paddingTop: "40px",
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
                        paddingTop: "20px",
                    }}
                >
                    <TextField
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        aria-label="パスワード入力"
                        placeholder="パスワード(確認)"
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
                        onClick={() => {
                            navigate('/account/signup_confirmation', { 
                                state: {
                                    email: email,
                                    name: name,
                                    nameKana: nameKana,
                                    userID: userID,
                                    password: password
                                }
                            });
                        }}
                        sx={{
                            textAlign: "center",
                            height: "100%",
                            width: "50%",
                            bgcolor: "orange",
                            color: "white",
                        }}
                    >
                        signup
                    </Button>
                </Box>
            </Box>
        </Box>
    );
}