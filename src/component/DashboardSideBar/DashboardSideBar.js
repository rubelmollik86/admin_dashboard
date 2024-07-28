import { React, useState } from "react";
import { styled, useTheme } from "@mui/material/styles";
import { Box, Typography } from "@mui/material";
import MuiDrawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import CssBaseline from "@mui/material/CssBaseline";
import MenuIcon from "@mui/icons-material/Menu";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import { Outlet, NavLink } from "react-router-dom";
import MuiListItem from "@material-ui/core/ListItem";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import DashboardIcon from "@mui/icons-material/Dashboard";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import AccountBalanceWalletIcon from "@mui/icons-material/AccountBalanceWallet";

// Active color ListItem start
const useStyles = makeStyles((theme) => ({
  root: {
    width: "90%",
  },
}));

const ListItem = withStyles({
  root: {
    "&$selected": {
      backgroundColor: "var(--primary-color)",
      color: "white",
      width: "90%",
      borderRadius: "0 5px 5px 0",
      "& .MuiListItemIcon-root": {
        color: "white",
      },
    },
    "&$selected:hover": {
      backgroundColor: "yellow",
      color: "white",
      width: "90%",
      borderRadius: "0 5px 5px 0",
      "& .MuiListItemIcon-root": {
        color: "white",
      },
    },
    "&:hover": {
      backgroundColor: "tomato",
      color: "white",
      width: "90%",
      borderRadius: "0 5px 5px 0",
      "& .MuiListItemIcon-root": {
        color: "white",
      },
    },
  },
  selected: {},
})(MuiListItem);

// Active color ListItem end

const drawerWidth = 230;

const openedMixin = (theme) => ({
  width: drawerWidth,
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: "hidden",
});

const closedMixin = (theme) => ({
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: "hidden",
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up("sm")]: {
    width: `calc(${theme.spacing(8)} + 20px)`,
  },
});

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  width: drawerWidth,
  flexShrink: 0,
  whiteSpace: "nowrap",
  boxSizing: "border-box",
  ...(open && {
    ...openedMixin(theme),
    "& .MuiDrawer-paper": openedMixin(theme),
  }),
  ...(!open && {
    ...closedMixin(theme),
    "& .MuiDrawer-paper": closedMixin(theme),
  }),
}));

function DashboardSideBar() {
  const theme = useTheme();
  const [open, setOpen] = useState(true);
  const [transaction, setTransaction] = useState(false);
  const [demoSub, setDemoSub] = useState(false);
  const classes = useStyles();

  const [selectedIndex, setSelectedIndex] = useState();

  const handleListItemClick = (event, index) => {
    setSelectedIndex(index);
    if (index === 0) {
      setOpen(true);
      setTransaction(false);
    } else if (index === 1) {
      setOpen(true);
      setTransaction(!false);
    } else if (index === 3) {
      setOpen(true);
      setDemoSub(!false);
      setTransaction(false);
    }
  };

  const [state, setState] = useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event &&
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const [subSelectedIndex, setSubSelectedIndex] = useState();

  const handleSubListItemClick = (event, index) => {
    // setSubSelectedIndex(index);
  };

  //   -------------------
  return (
    <Box
      sx={{
        display: "flex",
        ".active": {
          backgroundColor: "var(--primary-color)",
          color: "#ffffff !important",
          paddingLeft: "0px !important",
          transition: "0.5s",
        },
      }}
    >
      <CssBaseline />

      {/*  web */}
      <Box
        sx={{
          display: { xs: "block", sm: "block", md: "block" },
          "& .MuiDrawer-paper": {
            boxSizing: "border-box",
            width: drawerWidth,
          },
        }}
      >
        <Drawer variant="permanent" open={open}>
          <DrawerHeader
            sx={{
              display: "block",
              backgroundColor: "var(--secondary-color)",
            }}
            onClick={() => setOpen(!open)}
          >
            <Box>
              <MenuIcon
                style={{
                  color: "var(--card-color)",
                  fontSize: "22px",
                  margin: "20px 15px 10px 10px",
                }}
              />
            </Box>
          </DrawerHeader>

          <Box backgroundColor="var(--secondary-color)" height="100vh">
            <List>
              <NavLink
                to="/dashboard"
                style={{
                  display: "block",
                  marginBottom: "10px",
                  textDecoration: "none",
                  color: "var(--card-color)",
                }}
              >
                <ListItem
                  selected={selectedIndex === 0}
                  onClick={(event) => handleListItemClick(event, 0)}
                  style={{ padding: "0px" }}
                >
                  <ListItemButton
                    sx={{
                      justifyContent: open ? "initial" : "center",
                      p: "5px 3px 5px 20px",
                    }}
                  >
                    <DashboardIcon
                      sx={{
                        fontSize: "16px",
                      }}
                    />
                    <ListItemText sx={{ opacity: open ? 1 : 0, ml: 1 }}>
                      Dashboard
                    </ListItemText>
                  </ListItemButton>
                </ListItem>
              </NavLink>

              {/* Sub Menu Account Section end  */}
              <NavLink
                to="/transection"
                style={{
                  display: "block",
                  marginBottom: "10px",
                  textDecoration: "none",
                  color: "var(--card-color)",
                }}
              >
                <ListItem
                  selected={selectedIndex === 1}
                  onClick={(event) => handleListItemClick(event, 1)}
                  style={{ padding: "0px" }}
                >
                  <ListItemButton
                    sx={{
                      justifyContent: open ? "initial" : "center",
                      p: "5px 3px 5px 20px",
                    }}
                  >
                    <AccountBalanceWalletIcon
                      sx={{
                        fontSize: "16px",
                      }}
                    />

                    <ListItemText sx={{ opacity: open ? 1 : 0, ml: 1 }}>
                      User Transaction
                    </ListItemText>
                  </ListItemButton>
                </ListItem>
              </NavLink>
              {selectedIndex === 1 && transaction && (
                <Box
                  sx={{
                    display: open === false ? "none" : "",
                    a: {
                      display: "block",
                      textDecoration: "none",
                      color: "var(--card-color)",
                      paddingLeft: "30px",
                      marginBottom: 0.2,
                      fontWeight: 600,
                    },
                    ".active": {
                      backgroundColor: "var(--primary-color)",
                      color: "var(--white)",
                      width: "80%",
                      borderTopRightRadius: "5px",
                      borderBottomRightRadius: "5px",
                    },
                  }}
                >
                  <Box sx={{ opacity: open ? 1 : 0 }}>
                    <NavLink to="/transection">
                      <Typography
                        sx={{
                          cursor: "pointer",
                          fontSize: 12,
                          py: 1,
                          px: 1,
                          fontWeight: 500,
                        }}
                      >
                        User Transaction
                      </Typography>
                    </NavLink>

                    <NavLink to="/widthdraw">
                      <Typography
                        sx={{
                          cursor: "pointer",
                          fontSize: 12,
                          py: 1,
                          px: 1,
                          fontWeight: 500,
                        }}
                      >
                        User Withdraw
                      </Typography>
                    </NavLink>
                  </Box>
                </Box>
              )}

              {/* Sub Menu User Section end  */}
              <NavLink
                to="/user"
                style={{
                  display: "block",
                  marginBottom: "10px",
                  textDecoration: "none",
                  color: "var(--card-color)",
                }}
              >
                <ListItem
                  selected={selectedIndex === 3}
                  onClick={(event) => handleListItemClick(event, 3)}
                  style={{ padding: "0px" }}
                >
                  <ListItemButton
                    sx={{
                      justifyContent: open ? "initial" : "center",
                      p: "5px 3px 5px 20px",
                    }}
                  >
                    <AccountBalanceWalletIcon
                      sx={{
                        fontSize: "16px",
                      }}
                    />

                    <ListItemText sx={{ opacity: open ? 1 : 0, ml: 1 }}>
                      User submenu
                    </ListItemText>
                  </ListItemButton>
                </ListItem>
              </NavLink>
              {selectedIndex === 3 && demoSub && (
                <Box
                  sx={{
                    display: open === false ? "none" : "",
                    a: {
                      display: "block",
                      textDecoration: "none",
                      color: "var(--card-color)",
                      paddingLeft: "30px",
                      marginBottom: 0.2,
                      fontWeight: 600,
                    },
                    ".active": {
                      backgroundColor: "var(--primary-color)",
                      color: "var(--white)",
                      width: "80%",
                      borderTopRightRadius: "5px",
                      borderBottomRightRadius: "5px",
                    },
                  }}
                >
                  <Box sx={{ opacity: open ? 1 : 0 }}>
                    <NavLink to="/user">
                      <Typography
                        sx={{
                          cursor: "pointer",
                          fontSize: 12,
                          py: 1,
                          px: 1,
                          fontWeight: 500,
                        }}
                      >
                        User 1
                      </Typography>
                    </NavLink>

                    <NavLink to="/widthdraw">
                      <Typography
                        sx={{
                          cursor: "pointer",
                          fontSize: 12,
                          py: 1,
                          px: 1,
                          fontWeight: 500,
                        }}
                      >
                        User 2
                      </Typography>
                    </NavLink>
                  </Box>
                </Box>
              )}

              <NavLink
                to="/"
                style={{
                  display: "block",
                  marginTop: "40%",
                  textDecoration: "none",
                  color: "var(--card-color)",
                }}
              >
                <ListItem
                  selected={selectedIndex === 7}
                  //   onClick={() => adminlogout()}
                  style={{ padding: "0px" }}
                >
                  <ListItemButton
                    sx={{
                      justifyContent: open ? "initial" : "center",
                      p: "5px 3px 5px 20px",
                    }}
                  >
                    <ExitToAppIcon
                      sx={{
                        fontSize: "16px",
                      }}
                    />
                    <ListItemText sx={{ opacity: open ? 1 : 0, ml: 1 }}>
                      Log Out
                    </ListItemText>
                  </ListItemButton>
                </ListItem>
              </NavLink>
            </List>
          </Box>
        </Drawer>
      </Box>

      <Box
        component="main"
        sx={{
          flexGrow: 1,
          px: 1,
          width: {
            md: `calc(100% - ${drawerWidth}px)`,
            sm: "100%",
            xs: "100%",
          },
        }}
      >
        <Outlet></Outlet>
      </Box>
    </Box>
  );
}

export default DashboardSideBar;
