import { React, useState } from "react";
import { styled, useTheme } from "@mui/material/styles";
import { Box, Badge, Typography, Button, SwipeableDrawer } from "@mui/material";
import MuiDrawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import CssBaseline from "@mui/material/CssBaseline";
import MenuIcon from "@mui/icons-material/Menu";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import { useNavigate, Outlet, NavLink } from "react-router-dom";
import MuiListItem from "@material-ui/core/ListItem";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import PeopleAltIcon from "@mui/icons-material/PeopleAlt";
import DashboardIcon from "@mui/icons-material/Dashboard";
import StorageIcon from "@mui/icons-material/Storage";
import AccountBalanceIcon from "@mui/icons-material/AccountBalance";
import AssessmentIcon from "@mui/icons-material/Assessment";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import MonetizationOnOutlinedIcon from "@mui/icons-material/MonetizationOnOutlined";
import AccountBalanceWalletIcon from "@mui/icons-material/AccountBalanceWallet";

import { HiMenuAlt1 } from "react-icons/hi";
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
      backgroundColor: "var(--primary-color)",
      color: "white",
      width: "90%",
      borderRadius: "0 5px 5px 0",
      "& .MuiListItemIcon-root": {
        color: "white",
      },
    },
    "&:hover": {
      backgroundColor: "var(--primary-color)",
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

const SubListItem = withStyles({
  subselected: {},
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
  const user = "";
  const agentId = user?.user?.agentId;
  const [open, setOpen] = useState(false);
  const [queues, setQueues] = useState(false);
  const [account, setAccount] = useState(false);
  const [report, setReport] = useState(false);
  const [ledger, setLedger] = useState(false);
  const [transaction, setTransaction] = useState(false);
  const navigate = useNavigate();

  const classes = useStyles();
  const [selectedIndex, setSelectedIndex] = useState();

  const handleListItemClick = (event, index) => {
    setSelectedIndex(index);
    if (index === 2) {
      setOpen(true);
      setQueues(!queues);
      setAccount(false);
      setReport(false);
      setLedger(false);
      setTransaction(false);
    } else if (index === 3) {
      setOpen(true);
      setQueues(false);
      setAccount(!account);
      setReport(false);
      setLedger(false);
      setTransaction(false);
    } else if (index === 4) {
      setOpen(true);
      setQueues(false);
      setAccount(false);
      setReport(!report);
      setLedger(false);
      setTransaction(false);
    } else if (index === 8) {
      setOpen(true);
      setQueues(false);
      setAccount(false);
      setReport(report);
      setLedger(false);
      setTransaction(!false);
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

      {/* for mobile */}
      <Box
        sx={{
          display: { xs: "none", sm: "none", md: "none" },
          // background:'red',
          position: "absolute",
          right: 0,
          "& .MuiDrawer-paper": {
            boxSizing: "border-box",
          },
        }}
      >
        {["left"].map((anchor) => (
          <Box key={anchor}>
            <Button onClick={toggleDrawer(anchor, true)}>
              <HiMenuAlt1
                style={{
                  color: "var(--primary-color)",
                  fontSize: "35px",
                  marginTop: "20px",
                }}
              />
            </Button>
            <SwipeableDrawer
              anchor={anchor}
              open={state[anchor]}
              onClose={toggleDrawer(anchor, false)}
              onOpen={toggleDrawer(anchor, true)}
            >
              <Box
                backgroundColor="var(--secondary-color)"
                height="100vh"
                width="250px"
                py="50px"
                sx={{
                  borderRight: "2px solid var(--primary-color)",
                  overflow: "scroll",
                  height: "100%",
                  "&::-webkit-scrollbar-thumb": {
                    display: "none !important",
                    width: "0px important",
                  },
                  "&::-webkit-scrollbar-track": {
                    display: "none !important",
                  },
                  "&::-webkit-scrollbar": {
                    display: "none !important",
                  },
                }}
              >
                <List>
                  <NavLink
                    to="/admin/dashboard"
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

                  <NavLink
                    to="/admin/searchManage"
                    style={{
                      display: "block",
                      marginBottom: "10px",
                      textDecoration: "none",
                      color: "var(--card-color)",
                    }}
                  >
                    <ListItem
                      selected={selectedIndex === 2}
                      onClick={(event) => handleListItemClick(event, 2)}
                      style={{ padding: "0px" }}
                    >
                      <ListItemButton
                        sx={{
                          justifyContent: open ? "initial" : "center",
                          p: "5px 3px 5px 20px",
                        }}
                      >
                        <StorageIcon
                          sx={{
                            fontSize: "16px",
                          }}
                        />
                        <ListItemText sx={{ opacity: open ? 1 : 0, ml: 1 }}>
                          Manage
                        </ListItemText>
                      </ListItemButton>
                    </ListItem>
                  </NavLink>

                  <NavLink
                    to="/admin/UserManage"
                    style={{
                      display: "block",
                      marginBottom: "10px",
                      textDecoration: "none",
                      color: "var(--card-color)",
                    }}
                  >
                    <ListItem
                      selected={selectedIndex === 5}
                      onClick={(event) => handleListItemClick(event, 5)}
                      style={{ padding: "0px" }}
                    >
                      <ListItemButton
                        sx={{
                          justifyContent: open ? "initial" : "center",
                          p: "5px 3px 5px 20px",
                        }}
                      >
                        <PeopleAltIcon
                          sx={{
                            fontSize: "16px",
                          }}
                        />
                        <ListItemText sx={{ opacity: open ? 1 : 0, ml: 1 }}>
                          User
                        </ListItemText>
                      </ListItemButton>
                    </ListItem>
                  </NavLink>
                  <NavLink
                    to="/admin/bookingManage"
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
                        <AccountBalanceIcon
                          sx={{
                            fontSize: "16px",
                          }}
                        />
                        <ListItemText sx={{ opacity: open ? 1 : 0, ml: 1 }}>
                          Booking
                          {/* <Badge
                      badgeContent={`${bookCount?.IssueOnProcessing}`}
                      sx={{
                        ml: 1,
                        span: {
                          color: "#fff",
                          bgcolor: `${
                            selectedIndex === 3
                              ? "var(--primary-color)"
                              : "var(--secondary-color)"
                          }`,
                          top: `${open ? "12px" : 0}`,
                          right: `${open ? "-15px" : "-10px"}`,
                        },
                      }}
                    >
                      {open ? "Booking" : null}
                    </Badge> */}
                        </ListItemText>
                      </ListItemButton>
                    </ListItem>
                  </NavLink>

                  {/* Sub Menu Account Section start  */}

                  {/* {selectedIndex === 3 && account && (
              <Box className="dash-sub-menu">
                <Box sx={{ opacity: open ? 1 : 0 }}>
                  <NavLink
                    to="/admin/bookingManage"
                    style={{
                      display: "block",
                      textDecoration: "none",
                      color: "var(--secondary-color)",
                    }}
                  >
                    <SubListItem style={{ padding: "0px" }}>
                      <ListItemButton
                        sx={{
                          justifyContent: open ? "initial" : "center",
                          p: "0px 3px 0px 18px",
                        }}
                      >
                        <ListItemText
                          sx={{
                            opacity: open ? 1 : 0,
                            ml: 1,
                          }}
                        >
                          Air Ticket
                        </ListItemText>
                      </ListItemButton>
                    </SubListItem>
                  </NavLink>
                </Box>
              </Box>
            )} */}
                  {/* Sub Menu Account Section end  */}
                  <NavLink
                    to="/admin/deposit"
                    style={{
                      display: "block",
                      marginBottom: "10px",
                      textDecoration: "none",
                      color: "var(--card-color)",
                    }}
                  >
                    <ListItem
                      selected={selectedIndex === 6}
                      onClick={(event) => handleListItemClick(event, 6)}
                      style={{ padding: "0px" }}
                    >
                      <ListItemButton
                        sx={{
                          justifyContent: open ? "initial" : "center",
                          p: "5px 3px 5px 20px",
                        }}
                      >
                        <MonetizationOnOutlinedIcon
                          sx={{
                            fontSize: "16px",
                          }}
                        />
                        <ListItemText sx={{ opacity: open ? 1 : 0, ml: 1 }}>
                          Payment
                        </ListItemText>
                      </ListItemButton>
                    </ListItem>
                  </NavLink>

                  <NavLink
                    to="/admin/userdeposit"
                    style={{
                      display: "block",
                      marginBottom: "10px",
                      textDecoration: "none",
                      color: "var(--card-color)",
                    }}
                  >
                    <ListItem
                      selected={selectedIndex === 8}
                      onClick={(event) => handleListItemClick(event, 8)}
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
                          {/* <Badge
                      badgeContent={`${paymentCount?.TotalPending}`}
                      sx={{
                        ml: 1,
                        span: {
                          color: "#fff",
                          bgcolor: `${
                            selectedIndex === 8
                              ? "var(--primary-color)"
                              : "var(--secondary-color)"
                          }`,
                          top: `${open ? "12px" : 0}`,
                          right: `${open ? "-15px" : "-10px"}`,
                        },
                      }}
                    >
                      {open ? "User Deposit" : null}
                    </Badge> */}
                        </ListItemText>
                      </ListItemButton>
                    </ListItem>
                  </NavLink>
                  {selectedIndex === 8 && transaction && (
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
                        <NavLink to="/admin/userdeposit">
                          <Typography
                            sx={{
                              cursor: "pointer",
                              fontSize: 12,
                              py: 1,
                              px: 1,
                              fontWeight: 500,
                            }}
                          >
                            User Deposit
                          </Typography>
                        </NavLink>

                        <NavLink to="/admin/userWithdraw">
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

                  <NavLink
                    to="/admin/generalLedger"
                    style={{
                      display: "block",
                      marginBottom: "10px",
                      textDecoration: "none",
                      color: "var(--card-color)",
                    }}
                  >
                    <ListItem
                      selected={selectedIndex === 4}
                      onClick={(event) => handleListItemClick(event, 4)}
                      style={{ padding: "0px" }}
                    >
                      <ListItemButton
                        sx={{
                          justifyContent: open ? "initial" : "center",
                          p: "5px 3px 5px 20px",
                        }}
                      >
                        <AssessmentIcon
                          sx={{
                            fontSize: "16px",
                          }}
                        />
                        <ListItemText sx={{ opacity: open ? 1 : 0, ml: 1 }}>
                          Ledger
                        </ListItemText>
                      </ListItemButton>
                    </ListItem>
                  </NavLink>
                  {selectedIndex === 4 && report && (
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
                        <NavLink to="/admin/userLedger">
                          <Typography
                            sx={{
                              cursor: "pointer",
                              fontSize: 12,
                              py: 1,
                              px: 1,
                              fontWeight: 500,
                            }}
                          >
                            User Ledger Report
                          </Typography>
                        </NavLink>

                        <NavLink to="/admin/generalLedger">
                          <Typography
                            sx={{
                              cursor: "pointer",
                              fontSize: 12,
                              py: 1,
                              px: 1,
                              fontWeight: 500,
                            }}
                          >
                            Agent Ledger Report
                          </Typography>
                        </NavLink>
                      </Box>
                    </Box>
                  )}

                  {/* Sub Menu report Section end  */}

                  {/* {selectedIndex === 4 && report && (
              <Box
                className="dash-sub-menu"
                style={{ display: open === false ? "none" : "" }}
              >
                <Box sx={{ opacity: open ? 1 : 0 }}>
                  <NavLink
                    to="/admin/userLedger"
                    style={{
                      display: "block",
                      textDecoration: "none",
                      color: "var(--secondary-color)",
                    }}
                  >
                    <SubListItem style={{ padding: "0px" }}>
                      <ListItemButton
                        sx={{
                          justifyContent: open ? "initial" : "center",
                          p: "0px 3px 0px 18px",
                        }}
                      >
                        <ListItemText
                          sx={{
                            opacity: open ? 1 : 0,
                            ml: 1,
                          }}
                        >
                          User General Ledger
                        </ListItemText>
                      </ListItemButton>
                    </SubListItem>
                  </NavLink>
                  <NavLink
                    to="/admin/generalLedger"
                    style={{
                      display: "block",
                      textDecoration: "none",
                      color: "var(--secondary-color)",
                    }}
                  >
                    <SubListItem style={{ padding: "0px" }}>
                      <ListItemButton
                        sx={{
                          justifyContent: open ? "initial" : "center",
                          p: "0px 3px 0px 18px",
                        }}
                      >
                        <ListItemText
                          sx={{
                            opacity: open ? 1 : 0,
                            ml: 1,
                          }}
                        >
                          General Ledger
                        </ListItemText>
                      </ListItemButton>
                    </SubListItem>
                  </NavLink>
                </Box>
              </Box>
            )} */}
                  {/* Sub Menu report Section end  */}

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
            </SwipeableDrawer>
          </Box>
        ))}
      </Box>

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

              <NavLink
                to="/admin/searchManage"
                style={{
                  display: "block",
                  marginBottom: "10px",
                  textDecoration: "none",
                  color: "var(--card-color)",
                }}
              >
                <ListItem
                  selected={selectedIndex === 2}
                  onClick={(event) => handleListItemClick(event, 2)}
                  style={{ padding: "0px" }}
                >
                  <ListItemButton
                    sx={{
                      justifyContent: open ? "initial" : "center",
                      p: "5px 3px 5px 20px",
                    }}
                  >
                    <StorageIcon
                      sx={{
                        fontSize: "16px",
                      }}
                    />
                    <ListItemText sx={{ opacity: open ? 1 : 0, ml: 1 }}>
                      Manage
                    </ListItemText>
                  </ListItemButton>
                </ListItem>
              </NavLink>

              <NavLink
                to="/admin/UserManage"
                style={{
                  display: "block",
                  marginBottom: "10px",
                  textDecoration: "none",
                  color: "var(--card-color)",
                }}
              >
                <ListItem
                  selected={selectedIndex === 5}
                  onClick={(event) => handleListItemClick(event, 5)}
                  style={{ padding: "0px" }}
                >
                  <ListItemButton
                    sx={{
                      justifyContent: open ? "initial" : "center",
                      p: "5px 3px 5px 20px",
                    }}
                  >
                    <PeopleAltIcon
                      sx={{
                        fontSize: "16px",
                      }}
                    />
                    <ListItemText sx={{ opacity: open ? 1 : 0, ml: 1 }}>
                      User
                    </ListItemText>
                  </ListItemButton>
                </ListItem>
              </NavLink>
              <NavLink
                to="/admin/bookingManage"
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
                    <AccountBalanceIcon
                      sx={{
                        fontSize: "16px",
                      }}
                    />
                    <ListItemText sx={{ opacity: open ? 1 : 0, ml: 1 }}>
                      Booking
                      {/* <Badge
                      badgeContent={`${bookCount?.IssueOnProcessing}`}
                      sx={{
                        ml: 1,
                        span: {
                          color: "#fff",
                          bgcolor: `${
                            selectedIndex === 3
                              ? "var(--primary-color)"
                              : "var(--secondary-color)"
                          }`,
                          top: `${open ? "12px" : 0}`,
                          right: `${open ? "-15px" : "-10px"}`,
                        },
                      }}
                    >
                      {open ? "Booking" : null}
                    </Badge> */}
                    </ListItemText>
                  </ListItemButton>
                </ListItem>
              </NavLink>

              {/* Sub Menu Account Section start  */}

              {/* {selectedIndex === 3 && account && (
              <Box className="dash-sub-menu">
                <Box sx={{ opacity: open ? 1 : 0 }}>
                  <NavLink
                    to="/admin/bookingManage"
                    style={{
                      display: "block",
                      textDecoration: "none",
                      color: "var(--secondary-color)",
                    }}
                  >
                    <SubListItem style={{ padding: "0px" }}>
                      <ListItemButton
                        sx={{
                          justifyContent: open ? "initial" : "center",
                          p: "0px 3px 0px 18px",
                        }}
                      >
                        <ListItemText
                          sx={{
                            opacity: open ? 1 : 0,
                            ml: 1,
                          }}
                        >
                          Air Ticket
                        </ListItemText>
                      </ListItemButton>
                    </SubListItem>
                  </NavLink>
                </Box>
              </Box>
            )} */}
              {/* Sub Menu Account Section end  */}
              <NavLink
                to="/admin/deposit"
                style={{
                  display: "block",
                  marginBottom: "10px",
                  textDecoration: "none",
                  color: "var(--card-color)",
                }}
              >
                <ListItem
                  selected={selectedIndex === 6}
                  onClick={(event) => handleListItemClick(event, 6)}
                  style={{ padding: "0px" }}
                >
                  <ListItemButton
                    sx={{
                      justifyContent: open ? "initial" : "center",
                      p: "5px 3px 5px 20px",
                    }}
                  >
                    <MonetizationOnOutlinedIcon
                      sx={{
                        fontSize: "16px",
                      }}
                    />
                    <ListItemText sx={{ opacity: open ? 1 : 0, ml: 1 }}>
                      Payment
                    </ListItemText>
                  </ListItemButton>
                </ListItem>
              </NavLink>

              <NavLink
                to="/admin/userdeposit"
                style={{
                  display: "block",
                  marginBottom: "10px",
                  textDecoration: "none",
                  color: "var(--card-color)",
                }}
              >
                <ListItem
                  selected={selectedIndex === 8}
                  onClick={(event) => handleListItemClick(event, 8)}
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
                      {/* <Badge
                      badgeContent={`${paymentCount?.TotalPending}`}
                      sx={{
                        ml: 1,
                        span: {
                          color: "#fff",
                          bgcolor: `${
                            selectedIndex === 8
                              ? "var(--primary-color)"
                              : "var(--secondary-color)"
                          }`,
                          top: `${open ? "12px" : 0}`,
                          right: `${open ? "-15px" : "-10px"}`,
                        },
                      }}
                    >
                      {open ? "User Deposit" : null}
                    </Badge> */}
                    </ListItemText>
                  </ListItemButton>
                </ListItem>
              </NavLink>
              {selectedIndex === 8 && transaction && (
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
                    <NavLink to="/admin/userdeposit">
                      <Typography
                        sx={{
                          cursor: "pointer",
                          fontSize: 12,
                          py: 1,
                          px: 1,
                          fontWeight: 500,
                        }}
                      >
                        User Deposit
                      </Typography>
                    </NavLink>

                    <NavLink to="/admin/userWithdraw">
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

              <NavLink
                to="/admin/generalLedger"
                style={{
                  display: "block",
                  marginBottom: "10px",
                  textDecoration: "none",
                  color: "var(--card-color)",
                }}
              >
                <ListItem
                  selected={selectedIndex === 4}
                  onClick={(event) => handleListItemClick(event, 4)}
                  style={{ padding: "0px" }}
                >
                  <ListItemButton
                    sx={{
                      justifyContent: open ? "initial" : "center",
                      p: "5px 3px 5px 20px",
                    }}
                  >
                    <AssessmentIcon
                      sx={{
                        fontSize: "16px",
                      }}
                    />
                    <ListItemText sx={{ opacity: open ? 1 : 0, ml: 1 }}>
                      Ledger
                    </ListItemText>
                  </ListItemButton>
                </ListItem>
              </NavLink>
              {selectedIndex === 4 && report && (
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
                    <NavLink to="/admin/userLedger">
                      <Typography
                        sx={{
                          cursor: "pointer",
                          fontSize: 12,
                          py: 1,
                          px: 1,
                          fontWeight: 500,
                        }}
                      >
                        User Ledger Report
                      </Typography>
                    </NavLink>

                    <NavLink to="/admin/generalLedger">
                      <Typography
                        sx={{
                          cursor: "pointer",
                          fontSize: 12,
                          py: 1,
                          px: 1,
                          fontWeight: 500,
                        }}
                      >
                        Agent Ledger Report
                      </Typography>
                    </NavLink>
                  </Box>
                </Box>
              )}

              {/* Sub Menu report Section end  */}

              {/* {selectedIndex === 4 && report && (
              <Box
                className="dash-sub-menu"
                style={{ display: open === false ? "none" : "" }}
              >
                <Box sx={{ opacity: open ? 1 : 0 }}>
                  <NavLink
                    to="/admin/userLedger"
                    style={{
                      display: "block",
                      textDecoration: "none",
                      color: "var(--secondary-color)",
                    }}
                  >
                    <SubListItem style={{ padding: "0px" }}>
                      <ListItemButton
                        sx={{
                          justifyContent: open ? "initial" : "center",
                          p: "0px 3px 0px 18px",
                        }}
                      >
                        <ListItemText
                          sx={{
                            opacity: open ? 1 : 0,
                            ml: 1,
                          }}
                        >
                          User General Ledger
                        </ListItemText>
                      </ListItemButton>
                    </SubListItem>
                  </NavLink>
                  <NavLink
                    to="/admin/generalLedger"
                    style={{
                      display: "block",
                      textDecoration: "none",
                      color: "var(--secondary-color)",
                    }}
                  >
                    <SubListItem style={{ padding: "0px" }}>
                      <ListItemButton
                        sx={{
                          justifyContent: open ? "initial" : "center",
                          p: "0px 3px 0px 18px",
                        }}
                      >
                        <ListItemText
                          sx={{
                            opacity: open ? 1 : 0,
                            ml: 1,
                          }}
                        >
                          General Ledger
                        </ListItemText>
                      </ListItemButton>
                    </SubListItem>
                  </NavLink>
                </Box>
              </Box>
            )} */}
              {/* Sub Menu report Section end  */}

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
