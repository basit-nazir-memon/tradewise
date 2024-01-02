import React, { useState } from "react";
import "./Sidebar.css";
import { SidebarData } from "../../Data/Data";
import { UilBars } from "@iconscout/react-unicons";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const Sidebar = ({setAdminActivePanel}) => {
  const [selected, setSelected] = useState(0);
  const [expanded, setExpanded] = useState(true);


  const sidebarVariants = {
    true: {
      left: "0",
    },
    false: {
      left: "-60%",
    },
  };

  console.log(window.innerWidth);

  return (
    <>
      <div
        className="bars"
        style={expanded ? { left: "60%" } : { left: "5%" }}
        onClick={() => setExpanded(!expanded)}
      >
        <UilBars />
      </div>
      <motion.div
        className="sidebar"
        variants={sidebarVariants}
        animate={window.innerWidth <= 768 ? `${expanded}` : ""}
      >
        <div className="menu">
          {SidebarData.map((item, index) => {
            return (
              <div
                // to={item.path}
                className={
                  selected === index ? "menuItem active Link" : "menuItem Link"
                }
                key={index}
    
                onClick={() => {console.log("index --> "+index);setSelected(index);setAdminActivePanel(index);}}
              >
                <item.icon />
                <span>{item.heading}</span>
              </div>
            );
          })}
        </div>
      </motion.div>
    </>
  );
};

export default Sidebar;
