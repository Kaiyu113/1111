import { useState, useEffect } from "react";
import validator from "validator";
import { Button } from "antd";

import { SIGNIN_FORM } from "../../content/loginform";
import Input from "../../Common/TextInput/Textinput";

import { login, reset } from "../../features/auth/authSlice";
import { useSelector, useDispatch } from "react-redux";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

import "./form.css";

const Signin = ({
  handleOnClicksignup = () => {},
  handleOnClickforgetpassword = () => {},
}) => {
  const [showpassword, setshowpassword] = useState(false);

  const [inputvalue, setinputvalue] = useState({
    Email: "",
    Password: "",
    EmailError: "",
    PasswordError: "",
    Show: false,
  });

  const handleonchange = (e) => {
    setinputvalue({ ...inputvalue, [e.target.name]: e.target.value });
  };

  const validateall = () => {
    let PasswordError = "";
    let EmailError = "";

    if (!validator.isEmail(inputvalue.Email)) {
      EmailError = SIGNIN_FORM.EMAIL.ERROR_MESSAGE;
    }
    if (inputvalue.Password.length < 6) {
      PasswordError = SIGNIN_FORM.PASSWORD.ERROR_MESSAGE;
    }
    setinputvalue({
      ...inputvalue,
      EmailError,
      PasswordError,
    });

    return [PasswordError, EmailError];
  };
  // error message---------------
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { user, isError, isSuccess, message } = useSelector(
    (state) => state.auth
  );

  useEffect(() => {
    if (isError) {
      toast.error(message);
    }

    if (isSuccess || user) {
      toast.success("Successful Login");
      navigate("/home");
    }

    dispatch(reset());
  }, [user, isError, isSuccess, message, dispatch]);

  //---------------------------------------------------------------
  const handlesubmitlogin = async () => {
    const validateError = validateall();
    if (!validateError[0] && !validateError[1]) {
      const userData = {
        email: inputvalue.Email,
        password: inputvalue.Password,
      };
      dispatch(login(userData));
    }
  };

  //--------------------------------------------------------------------

  const changetext = () => {
    if (!showpassword) {
      setshowpassword(true);
    } else {
      setshowpassword(false);
    }
  };

  return (
    <div className="formcontainer">
      {/* <pre>{JSON.stringify(inputvalue, undefined, 2)}</pre> */}
      <h1>{SIGNIN_FORM.SIGNINS}</h1>
      <Input
        type={SIGNIN_FORM.EMAIL.TYPE}
        inputname={SIGNIN_FORM.EMAIL.LABEL}
        label={SIGNIN_FORM.EMAIL.LABEL}
        placeholder={SIGNIN_FORM.EMAIL.PLACE_HOLDER}
        value={inputvalue.Email}
        onChange={handleonchange}
        errorMessage={inputvalue.EmailError}
      />

      <Input
        type={showpassword ? "text" : "password"}
        inputname={SIGNIN_FORM.PASSWORD.LABEL}
        label={SIGNIN_FORM.PASSWORD.LABEL}
        placeholder={SIGNIN_FORM.PASSWORD.LABEL}
        value={inputvalue.Password}
        onChange={handleonchange}
        errorMessage={inputvalue.PasswordError}
      />

      <a onClick={changetext}>{showpassword ? "Unshow" : "Show"}</a>

      <Button onClick={handlesubmitlogin}>{SIGNIN_FORM.SUBMIT_BUTTON}</Button>

      <ul>
        <li>
          Don't have an account?<a onClick={handleOnClicksignup}>sign up</a>
        </li>
        <li>
          <a onClick={handleOnClickforgetpassword}>Forget Password?</a>
        </li>
      </ul>
    </div>
  );
};

export default Signin;
