import React, { useState } from 'react'
import { Link } from "react-router-dom";
import {
    AppBar,
    Toolbar,
    ListItem,
    IconButton,
    ListItemText,
    Avatar,
    Divider,
    List,
    Typography,
    Box,
    ListItemIcon
} from "@material-ui/core";

import {
    ArrowBack,
    AssignmentIndIcon,
    AssignmentInd,
    Home,
    Apps,
    ContactMail
}
    from "@material-ui/icons";
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import avatar from "../../src/neetu.png"
import { makeStyles } from '@material-ui/core/styles';
import Footer from "./Footer";

const useStyles = makeStyles(theme => ({
    menuSliderContainer: {
        width: 250,
        background: "#511",
        height: "100%"
    },
    avatar: {
        display: "block",
        margin: "0.5rem auto",
        width: theme.spacing(13),
        height: theme.spacing(13),


    }
}));
const menuItems = [
    {
        listIcon: <Home />,
        listText: "Home",
        listPath: "/"
    },
    {
        listIcon: <AssignmentInd />,
        listText: "Resume",
        listPath: "/resume"

    }, {
        listIcon: <Apps />,
        listText: "Portfolio"
    }, {
        listIcon: <ContactMail />,
        listText: "Contacts",
        listPath: "/contacts"

    },



]

export const Navbar = () => {
    const [state, setState] = useState({

        right: false
    })
    const toggleSlider = (slider, open) => () => {
        setState({ ...state, [slider]: open });
    }

    const classes = useStyles();
    const slideList = slider => (
        <Box
            className={classes.menuSliderContainer}
            component="div"
            onClick={toggleSlider(slider, false)}>
            <Avatar className={classes.avatar} src={avatar} alt="Neetu Chauhan" />
            <Divider />
            <List>
                {menuItems.map((lsItem, key) => (
                    <ListItem button key={key} component={Link} to={lsItem.listPath}>
                        <ListItemIcon>
                            {lsItem.listIcon}
                        </ListItemIcon>
                        <ListItemText primary={lsItem.listText} />
                    </ListItem>
                ))}

            </List>
        </Box>
    )

    return (
        <>


            <Box component="nav">
                <AppBar position="static" style={{ background: "black" }}>
                    <Toolbar>
                        <IconButton onClick={toggleSlider("right", true)}>
                            <ArrowBack style={{ color: "tomato" }} />
                        </IconButton>
                        <Typography variant="h5" style={{ color: "tan" }}>

                            PORTFOLIO
                       </Typography>
                        <SwipeableDrawer anchor="right" open={state.right}
                            onClose={toggleSlider("right", false)}


                        >
                            {slideList("right")}
                            <Footer />
                        </SwipeableDrawer>



                    </Toolbar>
                </AppBar>
            </Box>
        </>
    )
}

export default Navbar;



// import React from 'react';
// import { makeStyles, useTheme } from '@material-ui/core/styles';
// import Card from '@material-ui/core/Card';
// import CardContent from '@material-ui/core/CardContent';
// import CardMedia from '@material-ui/core/CardMedia';
// import IconButton from '@material-ui/core/IconButton';
// import Typography from '@material-ui/core/Typography';
// import SkipPreviousIcon from '@material-ui/icons/SkipPrevious';
// import PlayArrowIcon from '@material-ui/icons/PlayArrow';
// import SkipNextIcon from '@material-ui/icons/SkipNext';

// const useStyles = makeStyles((theme) => ({
//     root: {
//         display: 'flex',

//     },
//     details: {
//         display: 'flex',
//         flexDirection: 'column',

//     },
//     content: {
//         flex: '1 0 auto',
//     },
//     cover: {
//         width: 151,
//     },
//     controls: {
//         display: 'flex',

//         paddingLeft: theme.spacing(1),
//         paddingBottom: theme.spacing(1),
//         alignContent: 'left',
//         justifyContent: 'flex-end',

//     },
//     playIcon: {
//         height: 38,
//         width: 38,
//     },
// }));

// export default function MediaControlCard() {
//     const classes = useStyles();
//     const theme = useTheme();

//     return (
//         <Card className={classes.root}>
//             <CardMedia
//                 className={classes.cover}
//                 image="https://ionicframework.com/blog/wp-content/uploads/2019/02/react-beta.png"
//                 title="Live from space album cover"
//             />
//             <div className={classes.details}>
//                 <CardContent className={classes.content}>
//                     <Typography component="h5" variant="h5">
//                         Liv e From Space
//           </Typography>
//                     <Typography variant="subtitle1" color="textSecondary">
//                         size:{}
//                     </Typography>
//                 </CardContent>
//                 <div className={classes.controls}>
//                     <IconButton aria-label="previous">
//                         {theme.direction === 'rtl' ? <SkipNextIcon /> : <SkipPreviousIcon />}
//                     </IconButton>
//                     <IconButton aria-label="play/pause">
//                         <PlayArrowIcon className={classes.playIcon} />
//                     </IconButton>
//                     <IconButton aria-label="next">
//                         {theme.direction === 'rtl' ? <SkipPreviousIcon /> : <SkipNextIcon />}
//                     </IconButton>
//                 </div>
//             </div>

//         </Card>
//     );
// }
