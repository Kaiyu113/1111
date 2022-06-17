import { Input } from "antd";

import "./index.css";
const Textinput = (props) => {
  const {
    type = "",
    inputname = "",
    label = "",
    value = "",
    placeholder = "",
    errorMessage = "",

    maxLength = 30,
    disabled = false,
    onChange = () => {},
  } = props;

  return (
    <div>
      {label ? <div>{label}</div> : null}
      <Input
        name={inputname}
        maxLength={maxLength}
        className={errorMessage ? "text-input-error" : "text-input"}
        type={type}
        onChange={onChange}
        placeholder={placeholder}
        value={value}
        disabled={disabled}
        errorMessage={errorMessage}
      />

      {errorMessage ? <div className="Error">{errorMessage}</div> : null}
    </div>
  );
};

export default Textinput;
