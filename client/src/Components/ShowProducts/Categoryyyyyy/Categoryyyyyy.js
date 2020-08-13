// import React from 'react';
// import clsx from 'clsx';
// import { makeStyles, useTheme } from '@material-ui/core/styles';
// import Input from '@material-ui/core/Input';
// import InputLabel from '@material-ui/core/InputLabel';
// import MenuItem from '@material-ui/core/MenuItem';
// import FormControl from '@material-ui/core/FormControl';
// import ListItemText from '@material-ui/core/ListItemText';
// import Select from '@material-ui/core/Select';
// import Checkbox from '@material-ui/core/Checkbox';
// import Chip from '@material-ui/core/Chip';
// import './Styles.css';
// import ApartmentIcon from '@material-ui/icons/Apartment';
// import Icon from '@material-ui/core/Icon';


// const useStyles = makeStyles((theme) => ({
//   formControl: {
//     margin: theme.spacing(1),
//     minWidth: 120,
//     maxWidth: 120,
//   },
//   button: {
//     margin: theme.spacing(1),
//   },


 
// }));

// const ITEM_HEIGHT = 75;
// const ITEM_PADDING_TOP = 2;
// const MenuProps = {
//   PaperProps: {
//     style: {
//       maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
//       width: 250,
//       marginTop: '50px',
//     },
//   },
// };

// const names = [
//   'Căn hộ chung cư',
//   'Biệt thự',
//   'Căn hộ Studio',
//   'Nhà riêng',
//   'Căn hộ dịch vụ',
//   'Khác',
// ];


// export default function Category() {
//   const classes = useStyles();

//   const [houseName, sethouseName] = React.useState([]);
//   // console.log(houseName.length);
//   // const wrapper = React.createRef();
//   const handleChange = (event) => {
//     sethouseName(event.target.value);
    
//   };
//   const element = houseName.length>0 
//       ?  <InputLabel id="demo-mutiple-checkbox-label"      
//       >
//           <i className="fa">{houseName.length}</i> Loại chỗ ở
//        </InputLabel>
//       : <InputLabel id="demo-mutiple-checkbox-label"      
//       >   
//           <i className="fa fa-building" aria-hidden="true"></i> Loại chỗ ở
//         </InputLabel>
//         ;
//   return ( 
//     <div >
//       <FormControl className={classes.formControl}>
//           {element}
//         <Select
//           labelId="demo-mutiple-checkbox-label"
//           id="demo-mutiple-checkbox"
//           multiple
//           value={houseName}
//           onChange={handleChange}
//           input={<Input />}
//           renderValue={(selected) => ''}
//           MenuProps={MenuProps}
//         >
//           {names.map((name) => (
//             <MenuItem key={name} value={name}>
//               <Checkbox checked={houseName.indexOf(name) > -1} />
//               <ListItemText primary={name} />
//             </MenuItem>
//           ))}
//         </Select>
       
//       </FormControl>
      
//     </div>
//   );
// }