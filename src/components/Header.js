import React from 'react'
import {
    Typography, Grid, Box, Avatar, makeStyles, Card
} from "@material-ui/core";
import avatar from "../../src/neetu.png";
import Typed from "react-typed";
import Footer from "./Footer";

const useStyles = makeStyles(theme => ({
    avatar: {
        width: theme.spacing(15),
        height: theme.spacing(15),
        margin: theme.spacing(15)
    },
    title: { color: "tomato" },

    subtitle: {
        color: "tan",
        marginBottom: "3rem"
    },
    typedContainer: {
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%,-50%)",
        width: "100vw",
        textAlign: "center",
        zIndex: 1

    }
}))
export const Header = () => {
    const classes = useStyles();
    return (
        <Box className={classes.typedContainer}>

            <Grid container justify="center" style={{ width: "175px", height: "165px" }}>
                <Avatar style={{ width: "175px", height: "165px", marginLeft: "76rem" }} src={avatar} alt="Neetu Chauhan" />
            </Grid>
            <Typography variant="h4" style={{ fontFamily: "fantasy", color: "white" }}>
                <Typed strings={["Ms. Neetu Chauhan"]} typeSpeed={40} />

            </Typography>
            <Typography className={classes.subtitle} variant="h5" style={{ color: "aqua", fontFamily: "fantasy" }}>
                <Typed strings={["React Js Developer"]} typeSpeed={40} />

            </Typography>
            <Typography style={{ color: "white" }}>
                ............................................
</Typography >
            <Typography style={{ fontFamily: "fantasy" }} variant="h4">
                React Js| Redux | CSS | HTML


</Typography>

            {/* <Footer style={{ width: "24rem", marginLeft: "33rem" }} /> */}


        </Box>

    )
}

export default Header;
