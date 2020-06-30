import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import Facebook from "@material-ui/icons/Facebook"
import Twitter from "@material-ui/icons/Twitter"
import GitHubIcon from '@material-ui/icons/GitHub';
const useStyles = makeStyles({
    root: {
        "& .MuiBottomNavigationAction-root": {
            minWidth: 0,
            maxWidth: 250
        },
        "&  .MuiSvgIcon-root": {

            fill: "tan",
            fontSize: "1.8rem"
        }

    }


})



const Footer = () => {
    const classes = useStyles();
    return (

        <BottomNavigation width="auto" style={{ background: '#222' }}>

            <BottomNavigationAction
                className={classes.root}
                style={{ padding: 0 }}

                label="Facebook" icon={<Facebook />} />
            <BottomNavigationAction
                className={classes.root}
                style={{ padding: 0 }}

                label="Github" icon={<GitHubIcon />} />
            <BottomNavigationAction
                className={classes.root}
                style={{ padding: 0 }}

                label="Twitter" icon={<Twitter />} />
        </BottomNavigation>)

}
export default Footer;