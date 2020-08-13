import React, { useEffect } from "react";
import ReactDOM from "react-dom";
import { ThemeProvider } from '@material-ui/core/styles';
import theme from './theme.js';
import Header from './Header/Header';
import Category from './Category/Category';
import Container from '@material-ui/core/Container'
import Box from '@material-ui/core/Box'
import ShowRoom from './ShowRoom/ShowRoom';
import { makeStyles } from '@material-ui/core/styles';
import Slider from './Slider/Slider';
import Footer from './Footer/Footer';


const useStyles = makeStyles((theme) => ({
    '@global'             : {

        margin            : 0,
        padding           : 0,
        listStyle         : 'none',

        a                 : {
            textDecoration: 'none',
        }
    },

}));
export default function ShowProducts() {
    const classes = useStyles();

    return (

        <ThemeProvider theme={theme}>


            <Header />
            <Category />

            <Slider />
            <ShowRoom />
            <Footer/>




        </ThemeProvider >



    )
}


