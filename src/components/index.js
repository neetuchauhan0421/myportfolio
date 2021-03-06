import React from 'react'
import { Navbar } from './Navbar';
import { Header } from './Header';
import Partcicles from 'react-particles-js';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
    particleCanva: {
        position: "absolute"
    },

}));
export const Home = () => {
    const classes = useStyles();

    return (
        <div>
            <Navbar />
            <Header />
            <Partcicles
                canvasClassName={classes.particleCanva}
                params={{
                    particles: {
                        number: {
                            value: 45,
                            density: {
                                enable: true,
                                value_area: 900
                            }
                        },
                        shape: {
                            type: "circle",
                            stroke: {
                                width: 1,
                                color: "tomato"

                            }

                        },
                        size: {
                            value: 8,
                            random: true,
                            anim: {
                                enable: true,
                                speed: 8,
                                size_min: 0.1,
                                sync: true
                            }

                        },
                        opacity: {
                            value: 1
                            ,
                            random: true,
                            anim: {
                                enable: true,
                                opacity_min: 0.1,
                                sync: true
                            }
                        }

                    }
                }}

            />

        </div>
    )
}

export default Home;

// import React from 'react'
// import { makeStyles } from '@material-ui/core/styles';
// import Divider from '@material-ui/core/Divider';
// import {

//     Typography,
//     Box,
//     Grid,
//     ListItemIcon
// } from "@material-ui/core";
// import Navbar from "./Navbar";
// import { CallMissed } from '@material-ui/icons';

// const useStyles = makeStyles(theme => ({
//     meainContainer: {
//         background: "#233",
//     },
//     heading: {
//         color: "tomato",
//         padding: "3rem 0",
//         textTransform: "uppercase"


//     },
//     subheading: {

//         color: "white",
//         padding: "0",
//         textTransform: "uppercase"


//     },
//     // timeLine: {
//     //     position: "relative",
//     //     padding: "1rem",
//     //     margin: "0 auto",
//     //     "&:before": {
//     //         content: "''",
//     //         position: "absolute",
//     //         height: "100%",
//     //         border: "1px solid tan",
//     //         right: "40px",
//     //         top: 0

//     //     },

//     //     "&:after": {
//     //         content: "''",
//     //         display: "table",
//     //         clear: "both"

//     //     },
//     //     [theme.breakpoints.up("md")]: {
//     //         padding: "2rem",
//     //         "&:before": {
//     //             left: "calc(50% - 1px)",
//     //             right: "auto"
//     //         }
//     //     }

//     // },

//     timeLineItem: {
//         padding: "1rem",
//         margin: "0 auto",
//         "&:before": {
//             content: "''",
//             position: "relative",
//             height: "100%",
//             border: "2px solid tan",
//             margin: "1rem 3rem 1rem 1rem",
//             clear: "both",
//             "&:after": {
//                 content: "''",
//                 position: "absolute",

//             },
//             // "&:after": {
//             //     content: "''",
//             //     position: "absolute",
//             //     right: "-0.625",
//             //     top: "calc(50% - 5px)",
//             //     borderStyle: "solid",
//             //     borderColor: 'tomato tomato transparent transparent',
//             //     borderWidth: "0.625",
//             //     transform: "rotate(45deg)"

//             // },
//             // // [theme.breakpoints.up("md")]: {
//             //     width: "44%",
//             //     margin: "1rem",
//             //     "&:nth-of-type(2n)": {
//             //         float: "right",
//             //         margin: "1rem",
//             //         borderColor: "tan"
//             //     },
//             //     "&:nth-of-type(2n):before": {
//             //         rigth: "auto",
//             //         left: "-0.625",
//             //         borderColor: 'transparent transparent tomato tomato',


//             //     },
//             // }
//         },
//     },




//     timeLineYear: {
//         textAlign: "center",
//         maxWidth: "9.375",
//         margin: "0 3rem 0 auto",
//         fontSize: "1.8rem",
//         background: "tomato",
//         color: "white",
//         lineHeight: 1,
//         width: "5rem",
//         padding: "0.5rem 0 1rem",
//         "&:before": {
//             display: "none",

//         },
//         [theme.breakpoints.up("md")]: {
//             textAlign: "center",
//             margin: "0 auto",
//             "&:nth-of-type(2n)": {
//                 float: "none",
//                 margin: "0 auto"
//             },
//             "&:nth-of-type(2n):before": {
//                 display: "none",

//             }
//         }
//     }


// }));
// export default function Resume() {
//     const classes = useStyles();
//     return (
//         <>
//             <Navbar />
//             <Box component="header" className={classes.meainContainer}>
//                 <Typography variant="h4" align="center" className={classes.heading}>
//                     WORKING EXPERIENCE
//                </Typography>
//                 <Box component="div" className={classes.timeLine}>
//                     <Typography variant="h4" className={`${classes.timeLineYear} ${classes.timeLineItem}`}>
//                         2019
//                </Typography>
//                     <Box component="div" className={classes.timeLineItem}>
//                         <Grid style={{ marginLeft: "-76rem" }}>

//                             <Typography variant="h5" align="center" className={classes.subheading} >
//                                 WEB DESIGNER
//                             </Typography>
//                         </Grid>
//                         <Typography variant="body1" align="center" style={{ color: "tomato" }} >
//                             Schrocken Inc.
//                               </Typography>
//                         <Typography variant="subtitle" align="center" style={{ color: "tan" }} >
//                             Worked on a web application (https://mosymphony.schrocken.io/login)
//                             from React Js for manufacturing pharmaceutical industries which helps
//                              to add the batch status of the CMOs to both CMS and CMOs.
//                                      </Typography>
//                         <Divider style={{ width: "38rem", marginTop: "2rem", backgroundColor: "tan" }} />
//                     </Box>
//                 </Box>
//                 <Box component="div" className={classes.timeLine}>

//                     <Typography variant="h4" align="center" className={classes.heading}>
//                         EDUCATION
//                </Typography>
//                     <Typography variant="h4" className={`${classes.timeLineYear} ${classes.timeLineItem}`}>
//                         2017
//                </Typography>
//                     <Box component="div" className={classes.timeLineItem}>
//                         <Grid style={{ marginLeft: "-76rem" }}>

//                             <Typography variant="h5" align="center" className={classes.subheading} >
//                                 BACHELOR OF ENGINEERING
//                             </Typography>
//                         </Grid>
//                         <Typography variant="body1" align="center" style={{ color: "tomato" }} >
//                             UNIVERSITY OF TECHNOLOGY,BHOPAL
//                               </Typography>
//                         <Typography variant="subtitle" align="center" style={{ color: "tan" }} >
//                             Worked on a web application (https://mosymphony.schrocken.io/login)
//                             from React Js for manufacturing pharmaceutical industries which helps
//                              to add the batch status of the CMOs to both CMS and CMOs.
//                                      </Typography>
//                         <Typography variant="subtitle" align="center" style={{ color: "tan" }} >
//                             Worked on developing web pages using material UI ,CSS3 ,Flex
//                                      </Typography>
//                         <Divider style={{ width: "38rem", marginTop: "2rem", backgroundColor: "tan" }} />
//                     </Box>
//                 </Box>

//             </Box>

//         </>
//     )
// }
