import { Box, Button, Typography, rgbToHex } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { noticeInfo } from "../../constant/notices_constant";
import { defaultColor } from "../../constant/color_constant";

export default function topNotice() {
    const noticeInfoLength = noticeInfo.length;
    return (
        //お知らせの部分
        // 色指定
        <>
            <Box
                sx={{
                    bgcolor: defaultColor,
                    padding: "20px",
                    display: "flex",
                    flexDirection: "column",
                    height: "100%",
                }}
            >
                {/* お知らせのコンテンツの並び */}
                <Box
                    sx={{
                        display: "flex",
                        width: "100%",
                        justifyContent: "space-between",
                        height: "80%",
                    }}
                >
                    <TopNoticeContent {...noticeInfo[noticeInfoLength - 1]} />
                    <TopNoticeContent {...noticeInfo[noticeInfoLength - 2]} />
                    <TopNoticeContent {...noticeInfo[noticeInfoLength - 3]} />
                </Box>
                {/* もっと見るボタン */}
                <Box sx={{ height: "10%" }}>
                    <TopNoticeButton />
                </Box>
            </Box>
        </>
    );
}

//お知らせのコンテンツ
function TopNoticeContent(props) {
    console.log(props);
    console.log(props.title);
    return (
        <Box
            sx={{
                border: "1px solid black",
                bgcolor: "white",
                color: "black",
                borderRadius: "20px",
                height: "100%",
                width: "30%",
                padding: "15px",
                // boxSizing: "border-box",
            }}
        >
            <Box
                sx={{
                    height: "100%",
                }}
            >
                {/* タイトル */}
                <Typography
                    sx={{
                        width: "100%",
                        height: "20%",
                        overflow: "auto",
                        fontSize: "16px",
                    }}
                >
                    {props.title}
                    {/* ああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああ */}
                </Typography>

                {/* 本文 */}
                <Typography
                    sx={{
                        marginTop: "10px",
                        width: "100%",
                        height: "75%",
                        overflow: "auto",
                        fontSize: "12px",
                    }}
                >
                    {props.content}
                    {/* 本文ですおおおおおおおお
                    ああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああ */}
                </Typography>
            </Box>
        </Box>
    );
}

//お知らせ一覧ボタン
function TopNoticeButton() {
    const navigate = useNavigate();
    return (
        <Box
            sx={{
                display: "flex",
                justifyContent: "flex-end",
                alignItems: "flex-end",
                padding: "10px",
            }}
            onClick={() => navigate("/notice_list")}
        >
            <Button>
                <Typography
                    sx={{ fontWeight: "fontWeightLight", fontSize: "12px" }}
                >
                    おしらせ一覧
                </Typography>
            </Button>
        </Box>
    );
}
