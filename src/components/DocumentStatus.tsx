import Switch from '@mui/material/Switch';
import Grid from '@mui/material/Grid';

const label = { inputProps: { 'aria-label': 'Switch demo' } };


export default function DocumentStatus() {
    return (
        <Grid container
            display="flex"
            direction="row"
            justifyContent="space-between"
            alignItems="center">

            <h5>คลิกเพื่อ เปิด/ปิด การใช้งานเอกสาร</h5>
            <Switch {...label} defaultChecked />
        </Grid>
    );

}