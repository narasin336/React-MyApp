import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import { useState } from 'react';
import InputAdornment from '@mui/material/InputAdornment';
import IconButton from '@mui/material/IconButton';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';

interface Column {
    id: 'name' | 'code' | 'population' | 'size' | 'density';
    label: string;
    minWidth?: number;
    align?: 'right';
    format?: (value: number) => string;
}

const columns: Column[] = [
    { id: 'name', label: 'หมายเลขเอกสาร', minWidth: 170 },
    { id: 'code', label: 'ISO\u00a0Code', minWidth: 100 },
    {
        id: 'population',
        label: 'Passed',
        minWidth: 170,
        align: 'right',
        format: (value: number) => value.toLocaleString('en-US'),
    },
    {
        id: 'size',
        label: 'Failed',
        minWidth: 170,
        align: 'right',
        format: (value: number) => value.toLocaleString('en-US'),
    },
    {
        id: 'density',
        label: 'N/A',
        minWidth: 170,
        align: 'right',
        format: (value: number) => value.toFixed(2),
    },
];

interface Data {
    name: string;
    code: string;
    population: number;
    size: number;
    density: number;
}

function createData(
    name: string,
    code: string,
    population: number,
    size: number,
): Data {
    const density = population / size;
    return { name, code, population, size, density };
}

const rows = [
    createData('India', 'IN', 1324171354, 3287263),
    createData('China', 'CN', 1403500365, 9596961),
    createData('Italy', 'IT', 60483973, 301340),
    createData('United States', 'US', 327167434, 9833520),
    createData('Canada', 'CA', 37602103, 9984670),
    createData('Australia', 'AU', 25475400, 7692024),
    createData('Germany', 'DE', 83019200, 357578),
    createData('Ireland', 'IE', 4857000, 70273),
    createData('Mexico', 'MX', 126577691, 1972550),
    createData('Japan', 'JP', 126317000, 377973),
    createData('France', 'FR', 67022000, 640679),
    createData('United Kingdom', 'GB', 67545757, 242495),
    createData('Russia', 'RU', 146793744, 17098246),
    createData('Nigeria', 'NG', 200962417, 923768),
    createData('Brazil', 'BR', 210147125, 8515767),
];


interface TabPanelProps {
    children?: React.ReactNode;
    index: number;
    value: number;
}

function CustomTabPanel(props: TabPanelProps) {
    const { children, value, index, ...other } = props;



    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box sx={{ p: 3 }}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
}

function a11yProps(index: number) {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    };
}

export default function BasicTabs() {
    const [value, setValue] = React.useState(0);
    const currentDate = new Date().toLocaleDateString();
    const [dateValue, setDateValue] = useState(currentDate);
    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(10);

    // const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    //     setValue(newValue);
    // };

    const handleChange = (_event: React.SyntheticEvent, newValue: number) => {
        setValue(newValue);
    };
    

    const handleChangePage = (_event: unknown, newPage: number) => {
        setPage(newPage);
    };
    

    const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement>) => {
        setRowsPerPage(+event.target.value);
        setPage(0);
    };

    return (
        <Grid container justifyContent="center" alignItems="top" style={{ minHeight: '100vh' }}>
            <Paper elevation={3} style={{ marginTop: '20px', padding: '20px' }}>
                    <Grid container spacing={2}>
                        <Grid item xs={12} sm={6} md={4}>
                            <TextField
                                required
                                id="outlined-Start-date"
                                label="วันที่เริ่มต้น"
                                fullWidth
                                InputProps={{
                                    sx: { borderRadius: 2 },
                                    endAdornment: (
                                        <InputAdornment position="end">
                                            <IconButton>
                                                <CalendarMonthIcon />
                                            </IconButton>
                                        </InputAdornment>
                                    ),
                                }}
                                value={dateValue}
                                onChange={(e) => setDateValue(e.target.value)}
                            />
                        </Grid>
                        <Grid item xs={12} sm={6} md={4}>
                            <TextField
                                required
                                id="outlined-End-date"
                                label="วันที่สิ้นสุด"
                                fullWidth
                                InputProps={{
                                    sx: { borderRadius: 2 },
                                    endAdornment: (
                                        <InputAdornment position="end">
                                            <IconButton>
                                                <CalendarMonthIcon />
                                            </IconButton>
                                        </InputAdornment>
                                    ),
                                }}
                                value={dateValue}
                                onChange={(e) => setDateValue(e.target.value)}
                            />
                        </Grid>
                        <Grid item xs={12} sm={6} md={4}>
                            <TextField
                                id="filled-Cust"
                                label="รหัสลูกค้า/ชื่อลูกค้า"
                                fullWidth
                                InputProps={{ sx: { borderRadius: 2 } }}
                            />
                        </Grid>
                    </Grid>

                <Stack spacing={2} direction="row" justifyContent="center" sx={{ marginTop: '20px' }}>
                    <Button size="medium" variant="contained">ค้นหา</Button>
                    <Button
                        size="medium"
                        variant="contained"
                        sx={{
                            backgroundColor: 'gray',
                            color: 'white',
                            '&:hover': {
                                backgroundColor: 'lightgray', // Change to your desired hover color
                            },
                        }}
                    >
                        ล้าง
                    </Button>
                </Stack>
                <Box sx={{ borderBottom: 1, borderColor: 'divider', marginTop: '20px' }}>
                    <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
                        <Tab label="ALL" {...a11yProps(0)} />
                        <Tab label="In Lab" {...a11yProps(1)} />
                        <Tab label="Onsite" {...a11yProps(2)} />
                    </Tabs>
                </Box>
                <CustomTabPanel value={value} index={0}>
                    <Paper sx={{ width: '100%' }}>
                        <TableContainer sx={{ maxHeight: 440 }}>
                            <Table stickyHeader aria-label="sticky table">
                                <TableHead>
                                    <TableRow>
                                        <TableCell align="center" colSpan={2}>
                                            {/* Country */}
                                        </TableCell>
                                        <TableCell align="center" colSpan={3}>
                                            Status
                                        </TableCell>
                                    </TableRow>
                                    <TableRow>
                                        {columns.map((column) => (
                                            <TableCell
                                                key={column.id}
                                                align={column.align}
                                                style={{ top: 57, minWidth: column.minWidth }}
                                            >
                                                {column.label}
                                            </TableCell>
                                        ))}
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {rows
                                        .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                                        .map((row) => {
                                            return (
                                                <TableRow hover role="checkbox" tabIndex={-1} key={row.code}>
                                                    {columns.map((column) => {
                                                        const value = row[column.id];
                                                        return (
                                                            <TableCell key={column.id} align={column.align}>
                                                                {column.format && typeof value === 'number'
                                                                    ? column.format(value)
                                                                    : value}
                                                            </TableCell>
                                                        );
                                                    })}
                                                </TableRow>
                                            );
                                        })}
                                </TableBody>
                            </Table>
                        </TableContainer>
                        <TablePagination
                            rowsPerPageOptions={[10, 25, 100]}
                            component="div"
                            count={rows.length}
                            rowsPerPage={rowsPerPage}
                            page={page}
                            onPageChange={handleChangePage}
                            onRowsPerPageChange={handleChangeRowsPerPage}
                            
                        />
                    </Paper>
                </CustomTabPanel>
                <CustomTabPanel value={value} index={1}>
                    <p>In Lab</p>
                </CustomTabPanel>
                <CustomTabPanel value={value} index={2}>
                    <p>Onsite</p>
                </CustomTabPanel>
            </Paper>
        </Grid>
    );
}
