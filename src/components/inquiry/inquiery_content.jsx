import React from "react";
import { Box, Button } from "@mui/material";
import { defaultColor } from "../../constant/color_constant";
import { Typography } from "@mui/material";
import { useForm } from "react-hook-form";
import TextField from "@mui/material/TextField";
import { useNavigate } from "react-router-dom";

const formUrl =
    "https://docs.google.com/forms/u/0/d/e/1FAIpQLSc4-gCb1VIwfREnw2xxQWTkviWrjLULrQia1mK0UTPEHDIoxA/formResponse";

const formFieldNames = {
    name: "entry.2033945062",
    email: "entry.258642143",
    content: "entry.568237097",
};

export default function InquiryContent() {
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm();
    const navigate = useNavigate();

    const onSubmit = async (data) => {
        try {
            await fetch(formUrl, {
                method: "POST",
                // urlEncodeされた値をbodyに入れる
                body: provideUrlEncodedFormData(data),
                // 通常ではcorsに弾かれる (返却値のstatusは常に0 後述...)
                mode: "no-cors",
                headers: {
                    "Content-Type": "application/x-www-form-urlencoded",
                },
            });

            // 成功後の処理を記述する (画面遷移とか)
            alert("送信しました");
            navigate("/");
        } catch (e) {
            alert(
                "送信に失敗しました。通信状況などを確認して、もう一度お試しください。"
            );

            console.log(e);
            console.log("ここ");
        }
    };

    return (
        <Box sx={{ height: "100%" }}>
            <form onSubmit={handleSubmit(onSubmit)} style={{ height: "100%" }}>
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
                            aria-label="名前入力"
                            placeholder="氏名"
                            helperText={errors.name?.message}
                            FormHelperTextProps={{ style: { color: "red" } }}
                            {...register("name", {
                                required: "名前を入力してください",
                            })}
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
                            aria-label="メールアドレス入力"
                            placeholder="メールアドレス"
                            helperText={errors.email?.message}
                            FormHelperTextProps={{ style: { color: "red" } }}
                            {...register("email", {
                                required: "メールアドレスを入力してください",
                            })}
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
                            multiline
                            rows={8}
                            type="text"
                            aria-label="内容入力"
                            placeholder="内容"
                            helperText={errors.content?.message}
                            FormHelperTextProps={{ style: { color: "red" } }}
                            {...register("content", {
                                required: "内容を入力してください",
                            })}
                            variant="filled"
                            sx={{ height: "100%", width: "70%" }}
                            inputProps={{
                                style: {
                                    // height: "20%",
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
                            type="submit"
                            sx={{
                                textAlign: "center",
                                height: "100%",
                                width: "50%",
                                bgcolor: "orange",
                                color: "white",
                            }}
                        >
                            送信
                        </Button>
                    </Box>
                    <Box
                        sx={{
                            textAlign: "center",
                            paddingTop: "20px",
                            paddingBottom: "30px",
                        }}
                    >
                        <Typography sx={{ fontSize: "14px" }}>
                            住所：大分県〇〇〇市✖✖✖
                        </Typography>
                        <Typography sx={{ fontSize: "14px" }}>
                            電話番号：0123-456-789
                        </Typography>
                        <Typography sx={{ fontSize: "14px" }}>
                            メールアドレス：Hover@hover.com
                        </Typography>
                    </Box>
                </Box>
            </form>
        </Box>
    );
}

// request bodyに必要なurlEncodeされた値を提供
// originalのform情報を{entry.{number}: value}に変換する
function provideUrlEncodedFormData(originalFormData) {
    const result = {};
    Object.keys(originalFormData).map(
        (key) => (result[formFieldNames[key]] = originalFormData[key])
    );
    return new URLSearchParams(result).toString();
}

{
    /* <div className="fom-item">
                    <label>
                        <p>名前</p>
                        <input type="text" {...register("name")} />
                    </label>
                    <p className="error-message">{errors.name?.message}</p>
                </div> */
}
{
    /* <div className="form-item">
                    <label>
                        <p>メールアドレス</p>
                        <input
                            type="text"
                            {...register("email", { required: true })}
                        />
                    </label>
                    <p className="error-message">{errors.email?.message}</p>
                </div>
                <div className="form-item">
                    <label>
                        <p>内容</p>
                        <input type="text" {...register("content")} />
                    </label>
                    <p className="error-message">{errors.content?.message}</p>
                </div> */
}
