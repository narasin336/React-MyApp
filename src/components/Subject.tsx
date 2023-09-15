import { useState } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import EditIcon from '@mui/icons-material/Edit';
import SearchIcon from '@mui/icons-material/Search';
import InputAdornment from '@mui/material/InputAdornment';
import IconButton from '@mui/material/IconButton';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';


const FormPropsTextFields = () => {
    // Get the current date and format it as a string
    const currentDate = new Date().toLocaleDateString();

    // Use state to manage the value of the text field
    const [dateValue, setDateValue] = useState(currentDate);

    return (
        <Box
            sx={{
                display: 'grid',
                columnGap: 3,
                rowGap: 2,
                // gridTemplateColumns: 'repeat(2, 1fr)',

            }}
        >
            <div className="input">
                <Grid container spacing={2}>
                    <Grid item xs={12} sm={6} md={4}>
                        <TextField
                            required
                            id="outlined-type"
                            label="ประเภทเอกสาร"
                            defaultValue="Contract Review"
                            fullWidth
                            InputProps={{ sx: { borderRadius: 2 } }}
                        />
                    </Grid>
                    <Grid item xs={12} sm={6} md={4}>
                        <TextField
                            required
                            id="outlined-subject"
                            label="เรื่อง"
                            defaultValue="แก้ไข Cert"
                            fullWidth
                            InputProps={{ sx: { borderRadius: 2 } }}
                        />
                    </Grid>
                    <Grid item xs={12} sm={6} md={4}>
                        <TextField
                            required
                            id="outlined-section"
                            label="หัวข้อ"
                            defaultValue="พิจารณาความต้องการ"
                            fullWidth
                            InputProps={{ sx: { borderRadius: 2 } }}
                        />
                    </Grid>
                    <Grid item xs={12} sm={6} md={4}>
                        <TextField
                            required
                            id="outlined-doc-no"
                            label="หมายเลขเอกสาร"
                            fullWidth
                            InputProps={{ sx: { borderRadius: 2 } }}
                        />
                    </Grid>
                    <Grid item xs={12} sm={6} md={4}>
                        <TextField
                            required
                            id="outlined-ref-doc"
                            label="เอกสารอ้างอิง"
                            fullWidth
                            InputProps={{ sx: { borderRadius: 2 } }}
                        />
                    </Grid>
                    <Grid item xs={12} sm={6} md={4}>
                        <TextField
                            required
                            id="outlined-create-date"
                            label="วันที่จัดทำ"
                            fullWidth
                            InputProps={{ sx: { borderRadius: 2 } }}
                            // Set the default value of the text field
                            value={dateValue}
                            // Handle changes to the text field value
                            onChange={(e) => setDateValue(e.target.value)}
                        />
                    </Grid>
                    {/* เพิ่ม TextField ต่อไปที่คุณต้องการ */}
                </Grid>
            </div>

            <div className="border_accordion_cust">
                <Grid container
                    display="flex"
                    direction="row"
                    justifyContent="space-between"
                    alignItems="center"
                    >
                    <div className="input">
                        <h5 >ลูกค้า :</h5>
                    </div>
                    <div >
                        <Button variant="text" startIcon={<EditIcon />} style={{ fontSize: '12px', }}>
                            Edit
                        </Button>
                    </div>
                </Grid>
                <div className="input_cust">
                    <Grid container spacing={2}>
                        <Grid item xs={12} sm={6} md={4}>
                            <TextField id="filled-cust" label="รหัสลูกค้า" fullWidth InputProps={{ sx: { borderRadius: 2 } }} />
                        </Grid>
                        <Grid item xs={12} sm={6} md={4}>
                            <TextField id="filled-cust-name" label="ชื่อบริษัทลูกค้า" fullWidth InputProps={{ sx: { borderRadius: 2 } }} />
                        </Grid>
                        <Grid item xs={12} sm={6} md={4}>
                            <TextField id="filled-cust-contact" label="ชื่อลูกค้าที่ติดต่อ" fullWidth InputProps={{ sx: { borderRadius: 2 } }} />
                        </Grid>

                    </Grid>
                </div>
            </div>

            <div className="input">
                <Grid >
                    <Grid>
                        <TextField
                            required
                            id="outlined-type"
                            label="เลขที่ Work Order"
                            fullWidth
                            InputProps={{
                                sx: { borderRadius: 2 },
                                endAdornment: (
                                    <InputAdornment position="end">
                                        <IconButton>
                                            <SearchIcon /> {/* ไอคอนที่คุณต้องการใช้งาน */}
                                        </IconButton>
                                    </InputAdornment>
                                ),
                            }}
                        />
                    </Grid>
                </Grid>
            </div>

            <div className="input">
                <Grid container spacing={2}>
                    <Grid item xs={12} sm={6} md={4}>
                        <TextField
                            required
                            id="outlined-NewEquip-date"
                            label="New Equip Date"
                            fullWidth
                            InputProps={{
                                sx: { borderRadius: 2 },
                                endAdornment: (
                                    <InputAdornment position="end">
                                        <IconButton>
                                            <CalendarMonthIcon /> {/* ไอคอนที่คุณต้องการใช้งาน */}
                                        </IconButton>
                                    </InputAdornment>
                                ),
                            }}
                            // Set the default value of the text field
                            value={dateValue}
                            // Handle changes to the text field value
                            onChange={(e) => setDateValue(e.target.value)}
                        />
                    </Grid>
                    <Grid item xs={12} sm={6} md={4}>
                        <TextField
                            required
                            id="outlined-NewEst-Date"
                            label="New Est. Date"
                            fullWidth
                            InputProps={{
                                sx: { borderRadius: 2 },
                                endAdornment: (
                                    <InputAdornment position="end">
                                        <IconButton>
                                            <CalendarMonthIcon /> {/* ไอคอนที่คุณต้องการใช้งาน */}
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
                            id="outlined-Delivery-Date"
                            label="วัน/เวลาที่ลูกค้ามารับของ"
                            fullWidth
                            InputProps={{
                                sx: { borderRadius: 2 },
                                endAdornment: (
                                    <InputAdornment position="end">
                                        <IconButton>
                                            <CalendarMonthIcon /> {/* ไอคอนที่คุณต้องการใช้งาน */}
                                        </IconButton>
                                    </InputAdornment>
                                ),
                            }}
                            value={dateValue}
                            onChange={(e) => setDateValue(e.target.value)}
                        />
                    </Grid>
                </Grid>
            </div>

            <div>
                {/* ส่วนอื่น ๆ ของ TextField ที่ไม่ต้องการให้เป็น 3 ในแถวเดียว */}
            </div>
        </Box>
    );
};

export default FormPropsTextFields;
