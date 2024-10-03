import React, { useState } from "react";
import Header from "../header/header";
import { Box, Button, TextField, Typography } from "@mui/material";
import { defaultColor } from "../../constant/color_constant";
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { useNavigate } from "react-router-dom";

export default function BookingPage() {
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
                <BookingTitle></BookingTitle>

                <BookingContent></BookingContent>
            </Box>
        </>
    );
}

function BookingTitle() {
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
            <Typography sx={{ fontSize: "20px" }}>予約</Typography>
        </Box>
    );
}

// 予約日を選択するカレンダーを表示する
function BookingContent() {
    const navigate = useNavigate();
    const [selectedDate, setSelectedDate] = useState(new Date());
    const [selectedOption, setSelectedOption] = useState('大分空港行き');
    const [selectedOption2, setSelectedOption2] = useState('10:00');
    const [number, setNumber] = useState('1');
    const [selectedOption3, setSelectedOption3] = useState('クレジットカード');

    const handleChange = (event) => {
        setSelectedOption(event.target.value);
    };

    const handleChange2 = (event) => {
        setSelectedOption2(event.target.value);
    };
    
    const handleNumberChange = (event) => {
        setNumber(event.target.value);
    };

    const handleChange3 = (event) => {
        setSelectedOption3(event.target.value);
    };

    return (
        <Box 
            sx={{ 
                height: "100%", 
                bgcolor: defaultColor,
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'flex-start',
                alignItems: 'flex-start',
            }}
        >
            <Box
                sx={{
                    paddingTop: "40px",
                    paddingLeft: "40px",
                }}
            >
                <Typography>予約日</Typography>
                <DatePicker 
                    selected={selectedDate} 
                    onChange={date => setSelectedDate(date)} 
                    dateFormat='yyyy/MM/dd'
                    isClearable
                    placeholderText='予約日を選択'
                />
                {/* Other components */}
            </Box>

            <Box
                sx={{
                    paddingTop: "40px",
                    paddingLeft: "40px",
                }}
            >
                <Typography>行き先</Typography>
                <select value={selectedOption} onChange={handleChange}>
                <option value="大分空港行き">大分空港行き</option>
                <option value="大分市行き">大分市行き</option>
                {/* Add more options as needed */}
                </select>
            </Box>

            <Box
                sx={{
                    paddingTop: "40px",
                    paddingLeft: "40px",
                }}
            >
                <Typography>時間</Typography>
                <select value={selectedOption2} onChange={handleChange2}>
                <option value="10:00">10:00</option>
                <option value="15:00">15:00</option>
                {/* Add more options as needed */}
                </select>
            </Box>

            <Box
                sx={{
                    paddingTop: "40px",
                    paddingLeft: "40px",
                }}
            >
                <Typography>人数</Typography>
                <TextField 
                    type="number" 
                    InputProps={{ inputProps: { min: 1 } }} 
                    value={number} // Add this line
                    onChange={handleNumberChange} 
                />
                {/* Other components */}
            </Box>

            <Box
                sx={{
                    paddingTop: "40px",
                    paddingLeft: "40px",
                }}
            >
                <Typography>支払方法</Typography>
                <select value={selectedOption3} onChange={handleChange3}>
                <option value="クレジットカード">クレジットカード</option>
                <option value="コンビニ支払い">コンビニ支払い</option>
                {/* Add more options as needed */}
                </select>
            </Box>

            <Box
                sx={{
                    paddingTop: "40px",
                }}
            >
                <Button
                    type="button"
                    onClick={() => {
                        navigate('/booking/booking_confirmation', { 
                            state: {
                                selectedDate: selectedDate,
                                selectedOption: selectedOption,
                                selectedOption2: selectedOption2,
                                number: number,
                                selectedOption3: selectedOption3,
                            }
                        });
                    }}
                    sx={{
                        width: "50%",
                        height: "50px",
                        bgcolor: "orange",
                        color: "white",
                    }}
                >
                    予約
                </Button>
            </Box>
        </Box>
    );
}