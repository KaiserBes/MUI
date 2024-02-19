import { AccountCircle, Church } from "@mui/icons-material";
import {
  AppBar,
  Avatar,
  IconButton,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Toolbar,
  Typography,
} from "@mui/material";
import { Container } from "@mui/material";
import React from "react";
import Link from "next/link";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import GroupsOutlinedIcon from "@mui/icons-material/GroupsOutlined";
import ViewInArOutlinedIcon from "@mui/icons-material/ViewInArOutlined";
import QuestionAnswerOutlinedIcon from "@mui/icons-material/QuestionAnswerOutlined";

export default function Header() {
  return (
    <div>
      <AppBar position="static" className="bg-purple-200  shadow-none">
        <Container maxWidth="4xl" className="flex justify-between">
          <Toolbar disableGutters className="">
            <Typography
              variant="h6"
              noWrap
              component="a"
              href="/"
              sx={{
                mr: 2,
                display: "flex",
                fontFamily: "monospace",
                fontWeight: 700,
                letterSpacing: ".3rem",
                color: "inherit",
                textDecoration: "none",
                gap: 2,
                alignItems: "center",
                color: "black",
              }}
            >
              <Church />
              Bloc
            </Typography>
            <List className="flex hidden md:flex items-center gap-2 text-black text-sm">
              <ListItem>
                <Link href="/profile">
                  <div className="flex items-center gap-1 rounded-3xl px-2 py-2 hve hover:bg-white hover:shadow-lg transition-all duration-300 ease-in-out">
                    <ListItemIcon>
                      <AccountCircleOutlinedIcon className="h-4" />
                    </ListItemIcon>
                    <ListItemText primary="Profile" />
                  </div>
                </Link>
              </ListItem>
              <ListItem>
                <Link href="/spaces">
                  <div className="flex items-center gap-1 rounded-3xl px-2 py-2 hve hover:bg-white hover:shadow-lg transition-all duration-300 ease-in-out">
                    <ListItemIcon>
                      <GroupsOutlinedIcon className="h-4" />
                    </ListItemIcon>
                    <ListItemText primary="Spaces" />
                  </div>
                </Link>
              </ListItem>
              <ListItem>
                <Link href="/apps">
                  <div className="flex items-center gap-1 rounded-3xl px-2 py-2 hve hover:bg-white hover:shadow-lg transition-all duration-300 ease-in-out">
                    <ListItemIcon>
                      <ViewInArOutlinedIcon className="h-4" />
                    </ListItemIcon>
                    <ListItemText primary="Apps" />
                  </div>
                </Link>
              </ListItem>
              <ListItem>
                <Link href="/chat">
                  <div className="flex items-center gap-1 rounded-3xl px-2 py-2 hve hover:bg-white hover:shadow-lg transition-all duration-300 ease-in-out">
                    <ListItemIcon>
                      <QuestionAnswerOutlinedIcon className="h-4" />
                    </ListItemIcon>
                    <ListItemText primary="Chat" />
                  </div>
                </Link>
              </ListItem>
            </List>
          </Toolbar>
          {/* <div className="flex items-center ">
            <IconButton
              size="large"
              aria-label="account of current "
              aria-controls="menu-appbar"
              aria-haspopup="true"
              color="black"
              className="gap-1 flex items-center rounded-3xl pr-2 pl-0  py-0 bg-white hover:bg-slate-100"
            >
              <Avatar className="w-7 h-7" />
              <p className="text-lg">nicknamelike</p>
            </IconButton>
          </div> */}
        </Container>
      </AppBar>
    </div>
  );
}
