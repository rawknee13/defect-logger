import { Avatar } from "@mui/material";
import React from "react";
import "./Sidebar.css";
import sidebarBackgroungImg from "./assets/sidebarBackground.jpg";

function Sidebar() {

    const recentItem = (topic) => (
        <div className="sidebar__recentItem">
            <span className="sidebar__hash">#</span>
            <p>{topic}</p>
        </div>
    )

    return(
    <div className="sidebar">

        <div className="sidebar__top">
            <img src={sidebarBackgroungImg} alt=""></img>
            <Avatar className="sidebar__avatar"/>
            <h2>Rohan Kalra</h2>
            <h4>rohankalra3423@gmail.com</h4>
        </div>

        <div className="sidebar__stats">

            <div className="sidebar__stat">
                <p>Who viewed you</p>
                <p className="sidebar__statNumber">243</p>
            </div>

            <div className="sidebar__stat">
                <p>Views on post</p>
                <p className="sidebar__statNumber">125</p>
            </div>
        </div>

        <div className="sidebar__bottom">
                <p>Recent</p>
                {recentItem('react.js')}
                {recentItem('docker')}
                {recentItem('programming')}
                {recentItem('devops')}
                {recentItem('java')}
        </div>

       
    </div>
    )
}

export default Sidebar;