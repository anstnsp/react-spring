import React from "react";
import { makeStyles, withTheme } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

export default function ButtonAppBar() {
  const classes = useStyles();
  const style = {
    // border: '1px solid black',
    // padding: '8px',
    margin: "15px",
    color: "white",
    textDecoration: "none",
  };
  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="menu"
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            <Link style={style} to="/">
              홈
            </Link>
            <Link style={style} to="/posts">
              게시판
            </Link>
            <Link style={style} to="/about">
              소개
            </Link>
          </Typography>

          <Link style={style} to="/auth/signin">
            <Button color="inherit">로그인</Button>
          </Link>
          <Button color="inherit">회원가입</Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}
