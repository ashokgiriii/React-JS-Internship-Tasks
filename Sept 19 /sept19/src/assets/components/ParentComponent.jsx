import React, { useState } from "react";
import ChildComponent from "./ChildComponent";

const ParentComponent = () => {
  const [greetingFromChild, setGreetingfromChild] = useState("");

  // passing funtion to childd
  const handleMessage = (msg) => {
    setGreetingfromChild(msg);
  };

  return (
    <div className="parent-component">
      <h2>Parent Component</h2>
      <p className="message">
        Message from child: <strong>{greetingFromChild}</strong>
      </p>

      <ChildComponent sendGreeting={handleMessage} />
    </div>
  );
};

export default ParentComponent;
