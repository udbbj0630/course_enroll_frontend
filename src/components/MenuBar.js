import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";
import LoginDialog from "./LoginDialog";
import cookies from "react-cookies";

export default function MenuBar() {
  const [open, setOpen] = React.useState(false);
  //JS Truthy
  //Concert anything to boolean , if it is exist => true, not exist(undefined, null, 0 ...) => false
  const hasLoggedIn = !!cookies.load("jwt_token");
  const loginTag = hasLoggedIn? "Logout" : "Login";

  const handleClickOpen = () => {
    //user already logged in
    if  (hasLoggedIn) {
      cookies.remove("jwt_token");
      window.location.reload();
    } else { //Hasn't log in yet , prompt login
      setOpen(true);
    }
    setOpen(true);

  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }} align="left">
              Course Enrollment System
            </Typography>
            <Button color="inherit" component={ Link } to="/">All Courses</Button>
            <Button color="inherit" component={ Link } to="enrolled-courses">Enrolled Courses</Button>
            <Button color="inherit" onClick={handleClickOpen}>{loginTag}</Button>
          </Toolbar>
          {/*// Invoke*/}
          {/*// Reference*/}
          <LoginDialog handleClickOpen={handleClickOpen} handleClose={handleClose} open={open}/>
        </AppBar>
      </Box>
  );
}