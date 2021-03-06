import React, { useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";
import { Box, colors, Divider, IconButton, List, Toolbar } from "@mui/material";
import { IconProps, Home, Users, BarChart, ShoppingCart } from "react-feather";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import { styled } from "@mui/material/styles";
import MuiDrawer from "@mui/material/Drawer";
import MyAppBar from "./AppBar/AppBar";
import FooterComponent from "../../components/FooterComponent";
import NavItem, { SegmentType } from "./AppBar/NavItem";
import { v4 as uuid } from "uuid";
interface NavItemI {
  segment?: SegmentType;
  href: string;
  icon: React.FC<IconProps>;
  title: string;
  id: string;
  isVisible?: boolean;
  children?: NavItemI[];
}

const drawerWidth: number = 240;

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  "& .MuiDrawer-paper": {
    position: "relative",
    whiteSpace: "nowrap",
    width: drawerWidth,
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
    boxSizing: "border-box",
    ...(!open && {
      overflowX: "hidden",
      transition: theme.transitions.create("width", {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
      width: theme.spacing(7),
      [theme.breakpoints.up("sm")]: {
        backgroundColor: colors.blue[50],
        width: theme.spacing(6),
      },
    }),
  },
}));

const HomeLayout = () => {
  const [open, setOpen] = React.useState(true);
  const toggleDrawer = () => {
    setOpen(!open);
  };
  const NavItems: NavItemI[] = [
    {
      segment: "dashboard",
      href: "/dashboard",
      icon: Home,
      title: "Home",
      id: uuid(),
    },
    {
      segment: "pos",
      href: "/dashboard/pos",
      icon: ShoppingCart,
      title: "POS",
      id: uuid(),
    },
    {
      segment: "transactions",
      href: "/dashboard/transactions",
      icon: BarChart,
      title: "Transactions",
      id: uuid(),
    },
    {
      segment: "users",
      href: "/dashboard/users",
      icon: Users,
      title: "Users",
      id: uuid(),
    },
  ];
  const location = useLocation();
  useEffect(() => {
    return location.pathname === "/dashboard/pos"
      ? setOpen(false)
      : setOpen(true);
  }, [location.pathname]);

  return (
    <Box sx={{ display: "flex" }}>
      <MyAppBar open={open} toggleDrawer={toggleDrawer} />
      <Drawer variant="permanent" open={open}>
        <Toolbar
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "flex-end",
            px: [1],
          }}
        >
          <IconButton onClick={toggleDrawer}>
            <ChevronLeftIcon />
          </IconButton>
        </Toolbar>
        <Divider />

        <List component="nav">
          {NavItems.map(({ id, href, title, icon, children, segment }) => (
            <div key={id} id={id}>
              <NavItem
                href={href}
                key={id}
                title={title}
                Icon={icon}
                isParent
              />
            </div>
          ))}
        </List>
      </Drawer>

      <Box
        component="main"
        sx={{
          backgroundColor: (theme) =>
            theme.palette.mode === "light"
              ? theme.palette.grey[100]
              : theme.palette.grey[900],
          flexGrow: 1,
          height: "100vh",
          overflow: "auto",
        }}
      >
        <Toolbar />
        <Outlet />
        <FooterComponent />
      </Box>
    </Box>
  );
};

export default HomeLayout;
