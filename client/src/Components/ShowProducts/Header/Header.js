import React from 'react';
import RangeDate from '../RangeDate/RangeDate';
import './StylesHeader.css';
import ButtonBase from '@material-ui/core/ButtonBase';

import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Grid from '@material-ui/core/Grid';
import Avatar from '@material-ui/core/Avatar';
import SearchIcon from '@material-ui/icons/Search';
import InputBase from '@material-ui/core/InputBase';
import Button from '@material-ui/core/Button';
import CalendarTodayIcon from '@material-ui/icons/CalendarToday';
import PeopleAltIcon from '@material-ui/icons/PeopleAlt';
import Box from '@material-ui/core/Box';
import CssBaseline from '@material-ui/core/CssBaseline';
import Divider from '@material-ui/core/Divider';
import Link from '@material-ui/core/Link';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';
import CancelIcon from '@material-ui/icons/Cancel';
import CheckIcon from '@material-ui/icons/Check';
import RemoveCircleOutlineIcon from '@material-ui/icons/RemoveCircleOutline';
import Category from '../Category/Category';
import MenuIcon from '@material-ui/icons/Menu';
// import MenuReponsive from '../MenuReponsive/Menureponsive';






const useStyles = makeStyles((theme) => ({
   
    header                : {
        minHeight         : '80px',
        maxHeight         : '95px',
        backgroundColor   : '#f4efef',
        position          : 'fixed',
        // position: 'sticky',
        
    },
    header__toolbar__left : {
        display           : 'flex',
        alignItems        : 'center',
        justifyContent    : 'space-between',
        minHeight         : '80px'


    },
    header_logo           : {
        width             : '10%',
    },
    header_input          : {
        display           : 'flex',
        justifyContent    : 'space-between',
        minHeight         : '50%',
        maxHeight         : '50%',
        backgroundColor   : '#FFFFFF',
        width             : '90%',
        borderRadius      : '8px',
        minWidth          : '490px',
    },
    boxSearch             : {
        width             : '50%',
        minWidth          : '40%',
        display           : 'flex',
        alignItems        : 'center',
        '&:focus-within': {
            border        : '2px solid #605959',
            borderRadius  : '8px',
        }
    },
    divider               : {
        height            : 32,
        marginTop         : 5,
    },
    button_date           : {
        width             : '15%',
        position          : 'relative',
        
        '&:focus-within': {
            border        : '2px solid #605959',
            borderRadius  : '8px',
            "& $header_select_date": {
                display:'inline-block',
            }
        },
        
    },
    header_select_date    : {
        position          : 'absolute',
        width             : '700px',
        height            : '390px',
        backgroundColor   : '#FFFFFF',
        
        top               : '140%',
        display           : 'none',
        borderRadius: '5px',
        border: '1px solid #c6c9d1',
        '&:before': {
            content: '""',
            top: '-8px',
            right: '52%',
            transform: 'rotate(45deg)',                
            height: '15px',
            width: '15px',
            
            borderTop: '1px solid #c6c9d1',
            borderLeft: '1px solid #c6c9d1',
            position: 'absolute',
            background: '#fff',
         },

       


    },

    button_slot           : {
        width             : '25%', 
        position          : 'relative',
        '&:focus-within': {
            border        : '2px solid #605959',
            borderRadius  : '8px',
            "& $select_slot": {
                display:'inline-block',
            }
        },
       

    },
    select_slot           : {
        position          : 'absolute',
        width             : '320px',
        height            : '230px',
        backgroundColor   : '#FFFFFF',
        top               : '140%',
        left              : 0,
      
        display        : 'none',
        borderRadius: '5px',
        border: '1px solid #c6c9d1',
        '&:before': {
            content: '""',
            top: '-8px',
            left: '10%',
            transform: 'rotate(45deg)',                
            height: '15px',
            width: '15px',
            
            borderTop: '1px solid #c6c9d1',
            borderLeft: '1px solid #c6c9d1',
            position: 'absolute',
            background: '#fff',
         },
    },
    select_slot_object    : {
        width             : '90%',
        height            : '25%',
        paddingTop        : '25px',
        
        display: 'flex',
        margin: 'auto',
        justifyContent: 'space-between'
      
    },
    slot_object_amount:{
        width: '40%',
        display: 'flex',
        justifyContent: 'space-between',
        // paddingBottom: '5px',

    },
    // ---------------------------------

    button_search         : {
        width             : '10%',

    },
    button_searchIcon     : {
        // padding        : '15px 5px 5px 5px',
        width             : '50px',
        height            : '30px',
        backgroundColor   : '#555555',
        borderRadius      : '3px',
    },
    //////////////////////////////////////////////////////////////Het header_right
    header__text          : {
        color             : '#5b5252',
        textDecoration    : 'none',
    },
    header_right          : {
        display           : 'flex',
        justifyContent    : "flex-end",
        alignItems        : "center"
    },
    header_link           : {
        width             : '330px',
        display           : 'flex',
        justifyContent    : 'space-between',
        [theme.breakpoints.down('960')]: {
            display: 'none',
        }
    },
    header_right_repon:{
        display:'none',
        [theme.breakpoints.down('960')]: {
            display: 'inline-block',
        }
    },
    small                 : {
        width             : theme.spacing(3),
        height            : theme.spacing(3)
    },
    header_link_select : {
        width          : '90px',
        display        : 'flex',
        backgroundColor: '#c7bfbf',
        justifyContent : 'space-between',
        padding        : '1px 1px  1px 1px ',
        borderRadius   : '20px',
        cursor         : 'pointer',
        position       : 'relative',
        '&:hover': {
            "& $select_language": {
                display:'inline-block',
            }
        },
        
    },
    select_language    : {
            position   : 'absolute',
            width      : '350px',
            height     : '120px',
            backgroundColor: 'red',
            top: '150%',
            right: 0,
            backgroundColor   : '#FFFFFF',
            
            display:'none',
            borderRadius: '5px',
            border: '1px solid #c6c9d1',
             '&:before': {
                content: '""',
                top: '-8px',
                right: '28px',
                transform: 'rotate(45deg)',                
                height: '15px',
                width: '15px',
                
                borderTop: '1px solid #c6c9d1',
                borderLeft: '1px solid #c6c9d1',
                position: 'absolute',
                background: '#fff',
             },

             '&:after': {
                content: '""',
                width: '75px',
                height: '15px',
                position: 'absolute',
                top: '-13%',
                right: '6px',
             }
            
       
        
    },
    select_language_box:{
        height: '100%',
    },
    select_language_border:{
        borderRight: '1px solid #c6c9d1',
       
    },
    select_lang_currency:{
        display: 'flex',
        paddingTop: '10px',
        justifyContent: 'space-around',
        alignItems:'center',
    },
   
    // -------------------------------
   
   
    ////////////////////////////////////Code cac box an hien


    // ----------------------code button cancel check
    button_cancel_check:{
        width: '100%',
        display:'flex',
        textAlign: 'right',
        justifyContent:'flex-end',
        marginBottom: '5px',
        
    },
    button_cancel:{
        marginRight: '15px',
        paddingTop: '2px',

    },
    button_check:{
        padding: '3px 10px 0px 10px',
        backgroundColor:'#f77307',
        borderRadius: '30px',
        
        
    }

}));

export default function Header() {
    const classes = useStyles();
    // const [selectedDate, handleDateChange] = React.useState<DateRange<Date>>([null, null]);




    return (
        <div>
        <React.Fragment>
            <CssBaseline />
            <AppBar className={classes.header}>
                <Toolbar>
                    <Grid container spacing={0} >
                        <Grid item md={6} sm={10} xs={10} className={classes.header__toolbar__left}>
                            <div className={classes.header_logo}>
                                <Avatar alt="" src="https://www.luxstay.com/blog/wp-content/uploads/2018/09/Logo-Final-hinh-hieu-den.png" />

                            </div>
                            <div className={classes.header_input}>
                                <Box className={classes.boxSearch} >
                                    <SearchIcon color='disabled' />
                                    <InputBase

                                        className={classes.input}
                                        placeholder="Search"
                                        inputProps={{ 'aria-label': 'search' }}
                                    />
                                </Box>
                                <Divider className={classes.divider} orientation="vertical" />

                                <Button
                                    className={classes.button_date}
                                    startIcon={<CalendarTodayIcon />}
                                >
                                    Ngày
                                    <Box className={classes.header_select_date}>
                                        <RangeDate />
                                    </Box>

                                </Button>
                                <Divider className = {classes.divider} orientation = "vertical" />
                                <Button
                                    className      = {classes.button_slot}
                                    startIcon      = {<PeopleAltIcon />}
                                >
                                    Số khách
                                        <Box className={classes.select_slot}>
                                        <Box className={classes.select_slot_object}>
                                            <Typography>
                                                Người lớn 
                                               
                                                </Typography>
                                            <Box className={classes.slot_object_amount}> 
                                                <RemoveCircleOutlineIcon fontSize="large" color="action"/>
                                                  <Typography variant="h5">
                                                0
                                                </Typography>
                                               <AddCircleOutlineIcon fontSize="large" color="action"/>

                                            </Box>
                                        </Box>
                                        <Box className={classes.select_slot_object}>
                                        <Typography >
                                                Trẻ em <br/>
                                              
                                                </Typography>
                                            <Box className={classes.slot_object_amount}> 
                                                <RemoveCircleOutlineIcon fontSize="large" color="action"/>
                                                  <Typography variant="h5">
                                                0
                                                </Typography>
                                               <AddCircleOutlineIcon fontSize="large" color="action"/>

                                            </Box>
                                        </Box>
                                        <Box className={classes.select_slot_object}>
                                        <Typography >
                                                Trẻ sơ sinh <br/>
                                                
                                                </Typography>
                                            <Box className={classes.slot_object_amount}> 
                                                <RemoveCircleOutlineIcon fontSize="large" color="action"/>
                                                  <Typography variant="h5">
                                                0
                                                </Typography>
                                               <AddCircleOutlineIcon fontSize="large" color="action"/>

                                            </Box>
                                        </Box>
                                        <Box className={classes.select_slot_object}>
                                        <div className={classes.button_cancel_check}>
                                        <Typography color="textSecondary" className={classes.button_cancel}>
                                            Hủy
                                        </Typography>
                                         <Typography  color="textSecondary" className={classes.button_check}>
                                            Áp dụng
                                            </Typography>
                                        </div>
                                           
                                        </Box>
                                    </Box>
                                </Button>

                                <Divider className={classes.divider} orientation="vertical" />

                                <Button className={classes.button_search}>
                                    <SearchIcon
                                        className={classes.button_searchIcon}
                                        color="action"
                                    />
                                </Button>


                            </div>
                        </Grid>
                        <Grid item md={6} sm={2} xs={2} className={classes.header_right} >
                            <div className={classes.header_link} >
                                <a href="#" >
                                    <Typography className={classes.header__text}>
                                        Host
</Typography>
                                </a>
                                <a href="#" >
                                    <Typography className={classes.header__text}>
                                        Đăng ký
</Typography>
                                </a>
                                <a href="#" >
                                    <Typography className={classes.header__text}>
                                        Đăng nhập
</Typography>
                                </a>
                                <Box className={classes.header_link_select}>
                                    <Avatar className={classes.small} alt="" src="https://cdn.pixabay.com/photo/2012/04/10/23/04/vietnam-26834_960_720.png" />
                                    <Typography className={classes.header__text}>VND</Typography>
                                    <ExpandMoreIcon />
                                    <Box className={classes.select_language}>                                 
                                                <Grid container className={classes.select_language_box}>
                                                    <Grid item md={6} xs={12} className={classes.select_language_border}>
                                                        <Box className={classes.select_lang_currency}>
                                                            <Avatar className={classes.small} alt="VietNam" src="https://cdn.pixabay.com/photo/2012/04/10/23/04/vietnam-26834_960_720.png"/>
                                                            <Typography color="textPrimary" variant="overline">Tiếng Việt</Typography>
                                                        </Box>
                                                        <Box className={classes.select_lang_currency}>
                                                            <Avatar className={classes.small} alt="VietNam" src="https://cdn.pixabay.com/photo/2017/02/06/15/09/america-flag-2043285_960_720.png"/>
                                                            <Typography color="textPrimary" variant="overline">Tiếng Anh</Typography>
                                                        </Box>
                                                        
                                                    </Grid>
                                
                                                    
                                                    <Grid item md={6} xs={12}>
                                                         <Box className={classes.select_lang_currency}>
                                                            <Typography color="textPrimary" variant="overline">VND</Typography>
                                                            <Typography color="textPrimary" variant="overline">Việt Nam Đồng</Typography>

                                                         </Box>
                                                         <Box className={classes.select_lang_currency}>
                                                            <Typography color="textPrimary" variant="overline">USA</Typography>
                                                            <Typography color="textPrimary" variant="overline">Dollar USA</Typography>

                                                         </Box>

                                                    </Grid>
                                                    
                                                </Grid>
                                    </Box>
                                  
                                       
                                </Box>
                            </div>
                            <div className={classes.header_right_repon}>
                                <MenuIcon />
                            </div>
                        </Grid>
                    </Grid>


                </Toolbar>
            </AppBar>
           

        </React.Fragment>
        </div>


    )
}
