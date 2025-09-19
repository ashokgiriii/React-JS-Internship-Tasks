function Button({ typeOfButton, buttonValue, varient }) {
  return (
    <>
      <button
        className={
          // if theere is primary class name tne make the primary else mae teh secondary , which i already styled  in csss
          varient == "primary" ? "primary formButtons" : "secondary formButtons"
        }
        type={typeOfButton}
      >
        {buttonValue}
      </button>
    </>
  );
}

export default Button;
