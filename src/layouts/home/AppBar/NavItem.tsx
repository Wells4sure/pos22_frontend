import * as React from "react";
import { FC, useState } from "react";
import { IconProps } from "react-feather";
import clsx from "clsx";
import theme from "../../../Theme";
import { colors, ListItem, ListItemIcon, ListItemText } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { NavLink, useLocation } from "react-router-dom";

export type SegmentType =
  | "dashboard"
  | "transactions"
  | "users"
  | "profile"
  | "Settings"
  | "Products"
  | "POS";

const useStyles = makeStyles({
  item: {
    display: "flex",
    padding: "10px 8px",
    fontWeight: theme.typography.fontWeightMedium,
  },

  title: {
    marginRight: "auto",
  },
  active: {
    color: "green",
    backgroundColor: "#fff",
    width: "100%",
    "& $title": {
      fontWeight: theme.typography.fontWeightMedium,
      color: "green",
    },
    "& $icon": {
      color: "green",
    },
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
      selected={location.pathname === href ? true : false}
      className={clsx(classes.item, className)}
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
      <ListItemIcon style={{ color: colors.green[900], marginLeft: 5 }}>
        <Icon />
      </ListItemIcon>
      <ListItemText primary={title} />
    </ListItem>
  );
};

export default NavItem;
