import React, { useState, useEffect } from "react";
import { styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import MuiAppBar, { AppBarProps as MuiAppBarProps } from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import Button from '@mui/material/Button';
import { Modal } from "@mui/material";
import DiamondIcon from '@mui/icons-material/Diamond';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { CardActionArea } from '@mui/material';
import Skeleton from '@mui/material/Skeleton';
import Alert from '@mui/material/Alert';
import Snackbar from '@mui/material/Snackbar';
import WindowIcon from '@mui/icons-material/Window';
import FeedbackIcon from '@mui/icons-material/Feedback';
import { useHistory } from 'react-router-dom';
import { DragDropContext, DropResult } from "react-beautiful-dnd";
import DragIndicatorIcon from '@mui/icons-material/DragIndicator';
import ExpandIcon from '@mui/icons-material/Expand';
import Register from '../components/Register';
const icons = [WindowIcon, FeedbackIcon, DragIndicatorIcon, ExpandIcon /* และไอคอนอื่น ๆ ที่คุณต้องการเพิ่ม */];


// const cardData = [
//     {
//         title: 'Lizard 1',
//         description:
//             'Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica',
//         image: 'https://images.unsplash.com/photo-1533738363-b7f9aef128ce?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1935&q=80',
//     },
//     {
//         title: 'Lizard 2',
//         description:
//             'Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica',
//         image: 'https://images.unsplash.com/photo-1517849845537-4d257902454a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1935&q=80',
//     },
//     {
//         title: 'Lizard 1',
//         description:
//             'Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica',
//         image: 'https://images.unsplash.com/photo-1533738363-b7f9aef128ce?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1935&q=80',
//     },
//     {
//         title: 'Lizard 2',
//         description:
//             'Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica',
//         image: 'https://images.unsplash.com/photo-1517849845537-4d257902454a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1935&q=80',
//     },
//     {
//         title: 'Lizard 1',
//         description:
//             'Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica',
//         image: 'https://images.unsplash.com/photo-1533738363-b7f9aef128ce?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1935&q=80',
//     },
//     {
//         title: 'Lizard 2',
//         description:
//             'Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica',
//         image: 'https://images.unsplash.com/photo-1517849845537-4d257902454a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1935&q=80',
//     },
//     {
//         title: 'Lizard 1',
//         description:
//             'Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica',
//         image: 'https://images.unsplash.com/photo-1533738363-b7f9aef128ce?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1935&q=80',
//     },
//     {
//         title: 'Lizard 2',
//         description:
//             'Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica',
//         image: 'https://images.unsplash.com/photo-1517849845537-4d257902454a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1935&q=80',
//     },
//     {
//         title: 'Lizard 1',
//         description:
//             'Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica',
//         image: 'https://images.unsplash.com/photo-1533738363-b7f9aef128ce?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1935&q=80',
//     },
//     {
//         title: 'Lizard 2',
//         description:
//             'Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica',
//         image: 'https://images.unsplash.com/photo-1517849845537-4d257902454a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1935&q=80',
//     },

//     // เพิ่มข้อมูลบัตรอื่น ๆ ที่คุณต้องการสร้างได้ตรงนี้
// ];

interface Item {
    id: string;
    title: string;
    image: string;
}

interface Store {
    id: string;
    title: string;
    items: Item[];
    tint: number;
    image: string;
}

const DATA: Store[] = [
    {
        id: "0e2f0db1-5457-46b0-949e-8032d2f9997a",
        title: 'Walmart',
        items: [
            // { id: "26fd50b3-3841-496e-8b32-73636f6f4197", name: "3% Milk" },
            // { id: "b0ee9d50-d0a6-46f8-96e3-7f3f0f9a2525", name: "Butter" },
        ],
        tint: 1,
        // description:
        //     'Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica',
        image: 'https://images.unsplash.com/photo-1533738363-b7f9aef128ce?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1935&q=80',
    },
    {
        id: "487f68b4-1746-438c-920e-d67b7df46247",
        title: 'Indigo',
        items: [
            // {
            //   id: "95ee6a5d-f927-4579-8c15-2b4eb86210ae",
            //   name: "Designing Data Intensive Applications",
            // },
            // { id: "5bee94eb-6bde-4411-b438-1c37fa6af364", name: "Atomic Habits" },
        ],
        tint: 2,
        // description:
        //     'Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica',
        image: 'https://images.unsplash.com/photo-1517849845537-4d257902454a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1935&q=80',
    },
    {
        id: "25daffdc-aae0-4d73-bd31-43f73101e7c0",
        title: 'Lowes',
        items: [
            // { id: "960cbbcf-89a0-4d79-aa8e-56abbc15eacc", name: "Workbench" },
            // { id: "d3edf796-6449-4931-a777-ff66965a025b", name: "Hammer" },
        ],
        tint: 3,
        // description:
        //     'Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica',
        image: 'https://images.unsplash.com/photo-1533738363-b7f9aef128ce?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1935&q=80',
    },
    // เพิ่มข้อมูลบัตรอื่น ๆ ที่คุณต้องการสร้างได้ตรงนี้
];


const drawerWidth = 240;


const Main = styled('main', { shouldForwardProp: (prop) => prop !== 'open' })<{
    open?: boolean;
}>(({ theme, open }) => ({
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create('margin', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: `-${drawerWidth}px`,
    ...(open && {
        transition: theme.transitions.create('margin', {
            easing: theme.transitions.easing.easeOut,
            duration: theme.transitions.duration.enteringScreen,
        }),
        marginLeft: 0,
    }),
}));

interface AppBarProps extends MuiAppBarProps {
    open?: boolean;
}

const AppBar = styled(MuiAppBar, {
    shouldForwardProp: (prop) => prop !== 'open',
})<AppBarProps>(({ theme, open }) => ({
    transition: theme.transitions.create(['margin', 'width'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
    }),
    ...(open && {
        width: `calc(100% - ${drawerWidth}px)`,
        marginLeft: `${drawerWidth}px`,
        transition: theme.transitions.create(['margin', 'width'], {
            easing: theme.transitions.easing.easeOut,
            duration: theme.transitions.duration.enteringScreen,
        }),
    }),
}));

const DrawerHeader = styled('div')(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: 'flex-end',
}));


export default function PersistentDrawerLeft() {
    const theme = useTheme();
    const [open, setOpen] = React.useState(false);
    const [isLoading, setIsLoading] = useState(true);
    const [openDrawer, setOpenDrawer] = React.useState(true);
    const [alertOpen, setAlertOpen] = React.useState(false); // State to control the alert
    const history = useHistory();

    const handleAlertOpen = () => {
        setAlertOpen(true);
    };

    const handleAlertClose = () => {

        setAlertOpen(false);
    };


    const handleDrawerOpen = () => {
        setOpenDrawer(true);
    };

    const handleDrawerClose = () => {
        setOpenDrawer(false);
    };

    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const darkTheme = createTheme({
        palette: {
            mode: 'dark',
            primary: {
                main: '#1976d2',
            },
        },
    });

    useEffect(() => {
        // Simulate a delay in loading data
        setTimeout(() => {
            setIsLoading(false);
        }, 1000); // Adjust the delay time as needed
    }, []);

    const handleRefresh = () => {
        window.location.reload();
    };

    const [stores, setStores] = useState<Store[]>(DATA);

    const handleDragAndDrop = (results: DropResult) => {


        const { source, destination, type } = results;

        if (!destination) return;

        if (
            source.droppableId === destination.droppableId &&
            source.index === destination.index
        )
            return;

        if (type === "group") {
            const reorderedStores = [...stores];

            const storeSourceIndex = source.index;
            const storeDestinatonIndex = destination.index;

            const [removedStore] = reorderedStores.splice(storeSourceIndex, 1);
            reorderedStores.splice(storeDestinatonIndex, 0, removedStore);

            return setStores(reorderedStores);
        }
        const itemSourceIndex = source.index;
        const itemDestinationIndex = destination.index;

        const storeSourceIndex = stores.findIndex(
            (store) => store.id === source.droppableId
        );
        const storeDestinationIndex = stores.findIndex(
            (store) => store.id === destination.droppableId
        );

        const newSourceItems = [...stores[storeSourceIndex].items];
        const newDestinationItems =
            source.droppableId !== destination.droppableId
                ? [...stores[storeDestinationIndex].items]
                : newSourceItems;

        const [deletedItem] = newSourceItems.splice(itemSourceIndex, 1);
        newDestinationItems.splice(itemDestinationIndex, 0, deletedItem);

        const newStores = [...stores];

        newStores[storeSourceIndex] = {
            ...stores[storeSourceIndex],
            items: newSourceItems,
        };
        newStores[storeDestinationIndex] = {
            ...stores[storeDestinationIndex],
            items: newDestinationItems,
        };

        setStores(newStores);


    };

    return (
        <Box sx={{ display: 'flex' }}>
            <ThemeProvider theme={darkTheme}>
                <AppBar position="fixed" open={openDrawer}>
                    <Toolbar>
                        <IconButton
                            color="inherit"
                            aria-label="open drawer"
                            onClick={handleDrawerOpen}
                            edge="start"
                            sx={{ mr: 2, ...(openDrawer && { display: 'none' }) }}
                        >
                            <MenuIcon />
                        </IconButton>
                        <DiamondIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1, color: 'orange' }} />
                        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                            Mofz
                        </Typography>
                        <Button variant="contained" color="inherit" sx={{ mr: 2 }} onClick={handleOpen} >
                            Register
                        </Button>
                        <Button variant="outlined" color="inherit">
                            Login
                        </Button>
                        <Modal
                            open={open}
                            onClose={handleClose}
                            aria-labelledby="modal-modal-title"
                            aria-describedby="modal-modal-description"
                        >
                            <div className="layout__wrapper_for_Register">
                                <Box
                                    sx={{


                                    }}
                                >
                                    <Register />
                                </Box>

                            </div>
                        </Modal>
                    </Toolbar>
                </AppBar>
                <Drawer
                    sx={{
                        width: drawerWidth,
                        flexShrink: 0,
                        '& .MuiDrawer-paper': {
                            width: drawerWidth,
                            boxSizing: 'border-box',
                        },
                    }}
                    variant="persistent"
                    anchor="left"
                    open={openDrawer}
                >
                    <DrawerHeader>
                        <IconButton onClick={handleDrawerClose}>
                            {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
                        </IconButton>
                    </DrawerHeader>
                    <Divider />
                    <List>
                        {['Skeleton', 'Snackbar Alert', 'Drag & Drop', 'Accordion', 'Tabs'].map((text, index) => (
                            <ListItem key={text} disablePadding>
                                <ListItemButton
                                    onClick={() => {
                                        if (text === 'Skeleton') {
                                            handleRefresh(); // ถ้าคลิก "Skeleton" ให้เรียกฟังก์ชัน handleRefresh
                                        } else if (text === 'Snackbar Alert') {
                                            handleAlertOpen(); // ถ้าคลิก "Snackbar Alert" ให้เรียกฟังก์ชัน handleAlertOpen
                                        } else if (text === 'Drag & Drop') {
                                            // ทำการนำทางไปยังหน้า home โดยอาศัย React Router
                                            history.push('/KanbanCard');

                                        } else if (text === 'Accordion') {
                                            history.push('/Accordion');

                                            // ใส่โค้ดการดำเนินการสำหรับปุ่ม "Drafts" ที่นี่
                                        } else if (text === 'Tabs') {
                                            history.push('/Tabs');

                                            // ใส่โค้ดการดำเนินการสำหรับปุ่ม "Drafts" ที่นี่
                                        }
                                    }}

                                >
                                    <ListItemIcon>
                                        {/* ใช้ไอคอนจากอาร์เรย์ icons โดยใช้ index เพื่อเลือกไอคอน */}
                                        {React.createElement(icons[index % icons.length])}
                                    </ListItemIcon>
                                    <ListItemText
                                        primary={text}
                                    />
                                </ListItemButton>
                            </ListItem>
                        ))}
                    </List>
                    <Snackbar
                        open={alertOpen}
                        autoHideDuration={10000}
                        onClose={handleAlertClose}
                        anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }}
                    >
                        <Alert severity="success">
                            You clicked on "Snackbar Alert"!
                        </Alert>
                    </Snackbar>

                    <Divider />
                    <List>
                        {['All mail', 'Trash', 'Spam'].map((text, index) => (
                            <ListItem key={text} disablePadding>
                                <ListItemButton>
                                    <ListItemIcon>
                                        {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                                    </ListItemIcon>
                                    <ListItemText primary={text} />
                                </ListItemButton>
                            </ListItem>
                        ))}
                    </List>
                </Drawer>
                <Main open={openDrawer}>
                    <DrawerHeader />
                    <div
                        style={{
                            display: 'flex',
                            flexWrap: 'wrap',
                            justifyContent: 'between', // Adjust the spacing between cards
                        }}
                    >
                        {isLoading ? (
                            // Display skeleton loading effect while loading
                            Array.from({ length: stores.length }).map((_, index) => (
                                <Card
                                    key={index}
                                    sx={{
                                        width: 'calc(20% - 20px)',
                                        margin: '10px',
                                        borderRadius: '10px',
                                    }}
                                >
                                    <Skeleton
                                        variant="rectangular"
                                        height={140}
                                        animation="wave"
                                        sx={{
                                            borderRadius: '10px',
                                        }}
                                    />
                                    <CardContent>
                                        <DragDropContext onDragEnd={handleDragAndDrop}>
                                            <Typography gutterBottom variant="h5" component="div">
                                                <Skeleton
                                                    variant="text"
                                                    animation="wave"
                                                    height={20}
                                                    width="80%"
                                                />
                                            </Typography>
                                        </DragDropContext>
                                    </CardContent>
                                </Card>
                            ))
                        ) : (
                            // Display actual card data when not loading
                            stores.map((data, index) => (
                                <Card
                                    key={index}
                                    sx={{
                                        width: 'calc(20% - 20px)',
                                        margin: '10px',
                                        borderRadius: '10px',
                                    }}
                                >
                                    <CardActionArea>
                                        <CardMedia
                                            component="img"
                                            height="140"
                                            image={data.image}
                                            alt={data.title}
                                            sx={{
                                                maxWidth: '100%',
                                                borderRadius: '10px',
                                            }}
                                        />
                                        <CardContent>
                                            <Typography gutterBottom variant="h5" component="div">
                                                {data.title}
                                            </Typography>
                                            {/* Uncomment the lines below if you want to show description */}
                                            {/* <Typography variant="body2" color="text.secondary">
                                                {data.description}
                                            </Typography> */}
                                        </CardContent>
                                    </CardActionArea>

                                </Card>
                            ))
                        )}
                    </div>

                </Main>

            </ThemeProvider>
        </Box>

    );
}