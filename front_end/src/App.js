import React from 'react'
import { Typography, AppBar } from "@material-ui/core";
import { makeStyles } from '@material-ui/core/styles';


import Videoscreen from './components/videoscreen';
import Videofunctions from './components/videofunctions';
import Notifications from './components/notifications';


const userStyles = makeStyles((theme) => ({
      appBar: {
          borderRadius:15,
          margin: '30px 100px ',
          display:'flex',
          flexDirection: 'row',
          justifyContent:'center',
          alignItems:'center',
          width:'600px',
          border:'1px solid black',
          [theme.breakpoints.down('xs')]:{
              width:'90%',
          }, 
      },
      wrapper:{
          display:'flex',
          flexDirection:'column',
          alignItems:'center',
          width:'100%',
      }
}));

 const App = () => {
     const classes = userStyles();
    return (
        <div className={classes.wrapper}>
            <AppBar className={classes.appBar} position="static" color="inherit">
                <Typography variant="h2" align="center">Video Call</Typography>
            </AppBar>
             <Videoscreen />
             <Videofunctions>
                <Notifications />
             </Videofunctions>
        </div>
    )
}

export default App;
