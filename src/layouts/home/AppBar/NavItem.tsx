import * as React from "react";
import { FC, useState } from "react";
import { IconProps } from "react-feather";
import clsx from "clsx";
import theme from "../../../Theme";
import {
  colors,
  ListItem,
  ListItemIcon,
  ListItemText,
  Tooltip,
} from "@mui/material";
import { makeStyles } from "@mui/styles";
import { NavLink, useLocation } from "react-router-dom";

export type SegmentType =
  | "dashboard"
  | "transactions"
  | "users"
  | "profile"
  | "Settings"
  | "Products"
  | "pos";

const useStyles = makeStyles({
  root: {
    display: "flex",
    padding: "10px 10px",
    fontWeight: theme.typography.fontWeightMedium,
    "&:hover": {
      backgroundColor: colors.blue[100],
      color: colors.blue[700],
    },
    active: {
      backgroundColor: colors.orange[100],
      color: colors.orange[700],
      "&:hover": {
        backgroundColor: colors.green[100],
        color: colors.green[700],
      },
    },
  },

  title: {
    marginRight: "auto",
  },
  navStyle: {
    color: "blue",
  },
});

interface Props {
  // eslint-disable-next-line react/require-default-props
  className?: string;
  href: string;
  title: string;
  Icon: FC<IconProps>;
  onClick?: () => void;
  isParent?: boolean;
  isExpanded?: boolean;
}
const NavItem = ({
  className,
  href,
  Icon,
  title,
  isParent,
  isExpanded = false,
  onClick,
  ...rest
}: Props) => {
  const classes = useStyles();
  const [expanded, setExpanded] = useState<boolean>(isExpanded);
  const location = useLocation();

  return (
    <ListItem
      button
      className={clsx(classes.root, className)}
      selected={location.pathname === href ? true : false}
      disableGutters
      onClick={() => {
        if (isParent) {
          setExpanded(expanded ? false : true);
          if (onClick) onClick();
          // console.log('expanded: ', expanded ? false : true);
        }
      }}
      component={NavLink}
      to={href}
      // eslint-disable-next-line
      {...rest}
    >
      <ListItemIcon className={clsx(classes.navStyle)}>
        <Tooltip title={title} placement="right">
          <Icon />
        </Tooltip>
      </ListItemIcon>
      <ListItemText primary={title} />
    </ListItem>
  );
};

export default NavItem;
