import { useState } from "react";
import validator from "validator";
import { Button } from "antd";

import { SIGNIN_FORM } from "../../content/loginform";
import Input from "../../Common/TextInput/Textinput";

const Signin = ({ handleOnClicksendemail = () => {} }) => {
  const [inputvalue, setinputvalue] = useState({
    Email: "",

    EmailError: "",
  });

  const handleonchange = (e) => {
    setinputvalue({ ...inputvalue, [e.target.name]: e.target.value });
  };

  const VlidateEmail = () => {
    let EmailError = "";
    if (!validator.isEmail(inputvalue.Email)) {
      EmailError = SIGNIN_FORM.EMAIL.ERROR_MESSAGE;
    }
    setinputvalue({
      ...inputvalue,
      EmailError,
    });
    return EmailError;
  };

  const handleSubmit = async () => {
    const emailError = VlidateEmail();

    if (!emailError) {
      handleOnClicksendemail();
    }
  };

  return (
    <div className="formcontainer">
      {/* <pre>{JSON.stringify(inputvalue, undefined, 2)}</pre> */}
      <h1>{SIGNIN_FORM.PASSWORD.UPDATE}</h1>
      <p>{SIGNIN_FORM.PASSWORD.UPDATENOTE}</p>
      <Input
        type={SIGNIN_FORM.EMAIL.TYPE}
        inputname={SIGNIN_FORM.EMAIL.LABEL}
        label={SIGNIN_FORM.EMAIL.LABEL}
        placeholder={SIGNIN_FORM.EMAIL.PLACE_HOLDER}
        value={inputvalue.Email}
        onChange={handleonchange}
        errorMessage={inputvalue.EmailError}
      />

      <Button onClick={handleSubmit}>
        {SIGNIN_FORM.PASSWORD.UPDATEPASSWORD}
      </Button>
    </div>
  );
};

export default Signin;
