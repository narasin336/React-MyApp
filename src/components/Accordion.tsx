import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Subject from '../components/Subject';
import QaOnly from './QaOnly';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Editor from './Editor';
import DocumentStatus from './DocumentStatus';
import Contact from './Contact';



export default function BasicAccordion() {



    return (
        <Box sx={{
            flexGrow: 1,
            display: 'flex',

            padding: '25px', // เพิ่มระยะห่างรอบ ๆ Box
            height: '100vh', // ทำให้ Box อยู่กึ่งกลางตามความสูงของหน้าจอ

        }}>
            <Grid container spacing={2}
                direction="row"
                justifyContent="flex-end"
            >
                <Grid item md={7}>

                    <Accordion defaultExpanded={true} className="accordion-spacing" >
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel1a-content"
                            id="panel1a-header"

                        >
                            <Typography sx={{ width: '33%', flexShrink: 0 }}>Subject</Typography>
                            <Typography sx={{ color: 'text.secondary' }}>ประเภทเอกสาร: Contract Review</Typography>
                        </AccordionSummary>
                        <AccordionDetails >
                            <Subject />
                        </AccordionDetails>
                    </Accordion>
                    <Accordion className="accordion-spacing" >
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel2a-content"
                            id="panel2a-header"
                        >
                            <Typography>เฉพาะ QA เท่านั้น</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <QaOnly />
                        </AccordionDetails>
                    </Accordion>
                    <Accordion className="accordion-spacing" defaultExpanded={true}>
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel3a-content"
                            id="panel3a-header"
                        >
                            <Typography>Content</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Editor />
                        </AccordionDetails>
                    </Accordion>

                    {/* </div> */}
                </Grid>
                <Grid item md={3}>
                    <Accordion className="accordion-spacing" defaultExpanded={true} >
                        <AccordionSummary
                            aria-controls="panel4a-content"
                            id="panel4a-header"
                        >
                            <Typography >สถานะใช้งาน</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <DocumentStatus />
                        </AccordionDetails>
                    </Accordion>
                    <Accordion className="accordion-spacing" defaultExpanded={true} >
                        <AccordionSummary
                            aria-controls="panel4a-content"
                            id="panel4a-header"
                            style={{ color: 'black' }}
                        >
                            <Typography >ผู้ติดต่อ</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Contact />
                        </AccordionDetails>
                    </Accordion>
                </Grid>



            </Grid>
        </Box>
    );
}