function Input({ name, placeholder, inputClassname }) {
  return (
    <>
      <label htmlFor={name}>
        <input
          className={inputClassname}
          type="text"
          placeholder={placeholder}
        />
      </label>
    </>
  );
}

export default Input;
