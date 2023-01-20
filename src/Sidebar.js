import {
  EmojiFlags,
  LocalHospital,
  Storefront,
  VideoLibrary,
  People,
  Chat,
  ExpandMoreOutlined,
} from "@mui/icons-material";
import React from "react";
import "./Sidebar.css";
import SidebarRow from "./SidebarRow";
import { useStatevalue } from "./StateProvider";

function Sidebar() {

    const [{user},dispatch]=useStatevalue();

  return (
    <div className="sidebar">
      <SidebarRow
        src={user.photoURL}
        title={user.displayName}
      />
      <SidebarRow Icon={LocalHospital} title="COVID-19 Information Center" />

      <SidebarRow Icon={EmojiFlags} title="Pages" />
      <SidebarRow Icon={People} title="Friends" />
      <SidebarRow Icon={Chat} title="Messenger" />
      <SidebarRow Icon={Storefront} title="Marketplace" />
      <SidebarRow Icon={VideoLibrary} title="Videos" />
      <SidebarRow Icon={ExpandMoreOutlined} title="Marketplace" />
    </div>
  );
}

export default Sidebar;
