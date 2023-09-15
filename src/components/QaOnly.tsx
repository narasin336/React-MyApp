import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import EditIcon from '@mui/icons-material/Edit';

const QaOnly = () => {
    return (
        <Box
            sx={{
                display: 'grid',
                columnGap: 3,
                rowGap: 2,
                flexGrow: 1
            }}
        >
            <div className="input">
                <Grid container
                    display="flex"
                    direction="row"
                    justifyContent="end"
                    alignItems="center">

                    <div >
                        <Button variant="text" startIcon={<EditIcon />} style={{ fontSize: '12px', }}>
                            Edit
                        </Button>
                    </div>
                </Grid>
                <Grid container spacing={2} columns={16}>
                    <Grid item md={8}>
                        <TextField
                            required
                            id="outlined-cause"
                            label="สาเหตุ"
                            fullWidth
                            InputProps={{ sx: { borderRadius: 2 } }}
                        />
                    </Grid>
                    <Grid item md={8}>
                        <TextField
                            required
                            id="outlined-relevant"
                            label="หน่วยงานที่เกี่ยวข้อง"
                            fullWidth
                            InputProps={{ sx: { borderRadius: 2 } }}
                        />
                    </Grid>
                    {/* เพิ่ม Grid item อื่น ๆ ที่คุณต้องการที่นี่ */}
                </Grid>
            </div>

            <div>
                {/* ส่วนอื่น ๆ ของ TextField ที่ไม่ต้องการให้เป็น 3 ในแถวเดียว */}
            </div>

        </Box>
    );
};
export default QaOnly;