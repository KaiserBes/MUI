import { Link } from "react-router-dom";
import React from "react";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import GroupsOutlinedIcon from "@mui/icons-material/GroupsOutlined";
import ViewInArOutlinedIcon from "@mui/icons-material/ViewInArOutlined";
import QuestionAnswerOutlinedIcon from "@mui/icons-material/QuestionAnswerOutlined";

export default function Footer() {
  return (
    <>
      {" "}
      <ul className="flex hidden md:flex items-center gap-2 text-black text-sm">
        <li>
          <Link to="/profile" className="footer-link">
            <div className="flex items-center gap-1 rounded-3xl px-2 py-2 hover:bg-white hover:shadow-lg transition-all duration-300 ease-in-out">
              <AccountCircleOutlinedIcon className="h-4" />
              Profile
            </div>
          </Link>
        </li>
        <li>
          <Link to="/spaces" className="footer-link">
            <div className="flex items-center gap-1 rounded-3xl px-2 py-2 hover:bg-white hover:shadow-lg transition-all duration-300 ease-in-out">
              <GroupsOutlinedIcon className="h-4" />
              Spaces
            </div>
          </Link>
        </li>
        <li>
          <Link to="/apps" className="footer-link">
            <div className="flex items-center gap-1 rounded-3xl px-2 py-2 hover:bg-white hover:shadow-lg transition-all duration-300 ease-in-out">
              <ViewInArOutlinedIcon className="h-4" />
              Apps
            </div>
          </Link>
        </li>
        <li>
          <Link to="/chat" className="footer-link">
            <div className="flex items-center gap-1 rounded-3xl px-2 py-2 hover:bg-white hover:shadow-lg transition-all duration-300 ease-in-out">
              <QuestionAnswerOutlinedIcon className="h-4" />
              Chat
            </div>
          </Link>
        </li>
      </ul>
    </>
  );
}
