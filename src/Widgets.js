import React from "react";
import "./Widgets.css";
function Widgets() {
  return (
    <div className="widgets">
      <iframe
        src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2FMarvelUniverseAssemble%2F&tabs=timeline&width=340&height=640&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true&appId"
        width="340"
        height="640"
        style={{border:"none",overflow:"hidden"}}
        scrolling="no"
        frameBorder="0"
        allowFullScreen="true"
        allow=" encrypted-media"
      ></iframe>
    </div>
  );
}

export default Widgets;
