import React from "react";
import data from "../assets/data.json";
import { BsChevronDown } from "react-icons/bs";

const Timeline = () => {
  return (
    <div id="timeline">
      <div className="timelineBox">
        {data.projects.map((item, index) => (
          <TimelineItem
            heading={item.title}
            text={item.date}
            index={index}
            key={item.title}
          />
        ))}
      </div>
      <a href="#services">
        <BsChevronDown className="chevIcon" />
      </a>
    </div>
  );
};
const TimelineItem = ({ heading, text, index }) => (
  <div className={`timelineItem ${index%2===0? "leftTimeline": "rightTimeline"} `}>
    <div>
      <h2>{heading}</h2>
    </div>
  </div>
);

export default Timeline;
