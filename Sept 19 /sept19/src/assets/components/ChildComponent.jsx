import PropTypes from "prop-types";
import { useState } from "react";

const ChildComponent = ({ sendGreeting }) => {
  const [value, setValue] = useState("");

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  const handleClick = () => {
    sendGreeting(value);
    setValue("");
  };

  return (
    <div className="child-component">
      <h1>Child Component</h1>
      <div>
        <input
          type="text"
          value={value}
          placeholder="Write Greetinf Message"
          onChange={handleChange}
        />
        <button onClick={handleClick}>Send</button>
      </div>
    </div>
  );
};

ChildComponent.propTypes = {
  sendGreeting: PropTypes.func.isRequired,
};

export default ChildComponent;
