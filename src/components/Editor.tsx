import * as React from 'react';
import { styled } from '@mui/material/styles';
import FormatAlignLeftIcon from '@mui/icons-material/FormatAlignLeft';
import FormatAlignCenterIcon from '@mui/icons-material/FormatAlignCenter';
import FormatAlignRightIcon from '@mui/icons-material/FormatAlignRight';
import FormatAlignJustifyIcon from '@mui/icons-material/FormatAlignJustify';
import FormatBoldIcon from '@mui/icons-material/FormatBold';
import FormatItalicIcon from '@mui/icons-material/FormatItalic';
import FormatUnderlinedIcon from '@mui/icons-material/FormatUnderlined';
import FormatColorFillIcon from '@mui/icons-material/FormatColorFill';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import Divider from '@mui/material/Divider';
import Paper from '@mui/material/Paper';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';


const StyledToggleButtonGroup = styled(ToggleButtonGroup)(({ theme }) => ({
    '& .MuiToggleButtonGroup-grouped': {
        margin: theme.spacing(0.5),
        border: 0,
        '&.Mui-disabled': {
            border: 0,
        },
        '&:not(:first-of-type)': {
            borderRadius: theme.shape.borderRadius,
        },
        '&:first-of-type': {
            borderRadius: theme.shape.borderRadius,
        },
    },
}));

export default function CustomizedDividers() {
    const [alignment, setAlignment] = React.useState('left');
    const [formats, setFormats] = React.useState(() => ['italic']);

    const handleFormat = (newFormats: string[]) => {
        setFormats(newFormats);
    };

    const handleAlignment = (newAlignment: string) => {
        setAlignment(newAlignment);
    };

    const loremText = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat provident rerum tempora similique, id totam quaerat illo ut molestias explicabo voluptatem delectus veritatis quis quidem quod a laudantium at officia deleniti ex itaque, ipsam perferendis. Reprehenderit debitis fuga odit iste explicabo eum placeat molestiae qui rerum facilis quod quibusdam repellendus recusandae sed ea reiciendis, aliquam dolor impedit sequi ab eveniet accusamus esse labore temporibus! Unde rem officiis ipsa sequi est fugiat hic cumque commodi iste. Saepe, aliquid dolore ipsam similique aliquam quia. Repellendus fuga dolor saepe nemo atque alias quae, doloribus esse accusamus nostrum accusantium maiores, ratione reprehenderit repudiandae. Maiores, dolor. Facere eius ullam optio at maiores assumenda provident corrupti quasi sint eligendi, et debitis nulla odit repudiandae vel ut atque natus eveniet illo aspernatur ea saepe laudantium facilis est! Consectetur voluptate maiores nihil quas dolores quo exercitationem, praesentium labore dolorem, eveniet unde recusandae asperiores ipsam odio et cum sed. Aut nam quae ducimus voluptate dicta eos odio animi est incidunt perferendis vel impedit rem excepturi earum sint necessitatibus consequatur aperiam obcaecati accusamus reiciendis laborum, dolore assumenda corrupti! Neque hic itaque libero voluptas quia fuga, quidem, voluptatibus suscipit iusto dicta dolor doloribus error ducimus sunt numquam placeat autem blanditiis, dolorum velit accusamus magni perferendis? Recusandae laboriosam expedita ut minima? Reiciendis velit ab aliquid consequuntur omnis facilis atque explicabo quae, ex temporibus magni! Tempore quam nisi aperiam dolor facere quaerat recusandae corporis laboriosam corrupti doloribus itaque eaque veritatis, voluptas eum tenetur voluptatum aliquid, exercitationem laudantium sit ducimus modi? Tempora recusandae dicta nobis, reiciendis aspernatur laborum magnam natus necessitatibus tenetur deleniti suscipit. Facilis quod rerum blanditiis ab vel cupiditate dolorum dolore hic. At aperiam temporibus, recusandae repudiandae quis aliquam tenetur delectus qui quia, ducimus quisquam quibusdam iusto eos! Ullam doloremque rerum inventore eos assumenda exercitationem iusto alias vero provident. Tempora pariatur voluptates dolores magni tenetur, eaque qui odio asperiores iure tempore. Molestiae optio deserunt ipsum facere, magnam itaque dolorem delectus veritatis mollitia eaque aspernatur nisi. Fugit excepturi placeat similique, sequi ratione nam. Quis harum commodi magni, ducimus, iste amet quod reiciendis voluptatibus delectus distinctio nihil fugit non ullam sed. Enim illo sunt accusantium eligendi ea voluptatum qui iure repudiandae obcaecati nihil, minima modi incidunt fugit ratione, quos a quaerat beatae doloremque consequatur! Quia culpa nostrum sit ipsam, tenetur voluptates. Vel labore voluptate architecto recusandae esse dolor voluptatum, placeat amet optio voluptas aliquam nostrum reiciendis aut magnam, ipsam accusantium eos quas nemo impedit cum quibusdam beatae. Ipsam fuga fugiat sint iste quos est. Quasi, maiores. Consectetur numquam impedit quaerat voluptas perferendis sunt debitis illum, fugiat incidunt sit voluptatibus totam dolores inventore voluptate distinctio ducimus placeat odio nulla? Doloribus rerum optio nobis quod impedit odit dolore laborum. Ipsum et laborum asperiores animi esse nostrum ab, quo facere dicta error excepturi ex tenetur voluptas culpa cum sunt nobis eaque aspernatur veritatis quisquam optio debitis iusto? Vero perspiciatis praesentium cumque quibusdam corrupti voluptatem porro ipsa, ratione, delectus accusamus incidunt dolorum, veritatis nemo officiis maiores suscipit quam neque fuga? Unde labore fugiat odio consectetur earum veritatis illo.";


    return (
        <div >
            <Paper
                elevation={0}
                sx={{
                    display: 'flex',
                    border: (theme) => `1px solid ${theme.palette.divider}`,
                    flexWrap: 'wrap',
                    marginBottom: '20px', // เพิ่มระยะห่างด้านล่างของ Paper
                }}
            >
                <StyledToggleButtonGroup
                    size="small"
                    value={alignment}
                    exclusive
                    // onChange={handleAlignment}
                    onClick={() => handleAlignment}
                    aria-label="text alignment"
                >
                    <ToggleButton value="left" aria-label="left aligned">
                        <FormatAlignLeftIcon />
                    </ToggleButton>
                    <ToggleButton value="center" aria-label="centered">
                        <FormatAlignCenterIcon />
                    </ToggleButton>
                    <ToggleButton value="right" aria-label="right aligned">
                        <FormatAlignRightIcon />
                    </ToggleButton>
                    <ToggleButton value="justify" aria-label="justified" disabled>
                        <FormatAlignJustifyIcon />
                    </ToggleButton>
                </StyledToggleButtonGroup>
                <Divider flexItem orientation="vertical" sx={{ mx: 0.5, my: 1 }} />
                <StyledToggleButtonGroup
                    size="small"
                    value={formats}
                    // onChange={handleFormat}
                    onClick={() => handleFormat}
                    aria-label="text formatting"
                >
                    <ToggleButton value="bold" aria-label="bold">
                        <FormatBoldIcon />
                    </ToggleButton>
                    <ToggleButton value="italic" aria-label="italic">
                        <FormatItalicIcon />
                    </ToggleButton>
                    <ToggleButton value="underlined" aria-label="underlined">
                        <FormatUnderlinedIcon />
                    </ToggleButton>
                    <ToggleButton value="color" aria-label="color" disabled>
                        <FormatColorFillIcon />
                        <ArrowDropDownIcon />
                    </ToggleButton>

                </StyledToggleButtonGroup>
                <TextField
                    id="outlined-multiline-static"
                    multiline
                    rows={16}
                    inputProps={{ style: { height: 'auto' } }} // Automatically adjust height
                    defaultValue={loremText}
                    fullWidth
                />
            </Paper>


            <Grid item xs={12}>
                <Grid container justifyContent="center">
                    <Grid
                        container
                        direction="row"
                        justifyContent="flex-start"
                        alignItems="center"
                    >
                        <h3 style={{ marginRight: '16px' }}>ไฟล์แนบ :</h3>
                        <Button size="small" variant="contained">จัดการไฟล์</Button>
                    </Grid>
                </Grid>
            </Grid>


        </div>
    );
}