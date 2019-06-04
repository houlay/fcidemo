import React from "react";
import "./style.css";

const Pagenation = props => {
  const title = props.index === 0 ? "d-none" : "pagenation hide-on-break";
  const page1 = props.index === 1 ? "hightlight" : "normal";
  const page2 = props.index === 2 ? "hightlight" : "normal";
  const page3 = props.index === 3 ? "hightlight-white" : "normal";
  const page4 = props.index === 4 ? "hightlight" : "normal";
  const page5 = props.index === 5 ? "hightlight" : "normal";
  const page6 = props.index === 6 ? "hightlight" : "normal";

  return (
    <div className={title}>
      <p className={page1}>About</p>
      <p className={page2}>Services</p>
      <p className={page3}>Team</p>
      <p className={page4}>Clients</p>
      <p className={page5}>Testimonials</p>
      <p className={page6}>Contact</p>
    </div>
  );
};

export default Pagenation;
