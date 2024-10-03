import React from "react";
import Header from "../header/header";
import { Box, IconButton, Typography } from "@mui/material";
import { tablePadding } from "../../constant/price_constant";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

export default function PricePage() {
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
                    <PriTitle></PriTitle>
                    <BasicTable></BasicTable>
                </Box>
            </Box>
        </>
    );
}

function PriTitle() {
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
            <Typography sx={{ fontSize: "24px" }}>料金表</Typography>
        </Box>
    );
}

function createData(divisionDays, adultPri, childPri) {
    return { divisionDays, adultPri, childPri };
}

const rows = [
    createData('平日', 10000, 5000),
    createData('土日祝', 20000, 10000),
];
  
function BasicTable() {
    return (
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 10 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell></TableCell>
              <TableCell align="right">大人(円)</TableCell>
              <TableCell align="right">子供(円)</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow
                key={row.divisionDays}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {row.divisionDays}
                </TableCell>
                <TableCell align="right">{row.adultPri}</TableCell>
                <TableCell align="right">{row.childPri}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    );
}