import { useState, useEffect } from "react";
import validator from "validator";
import { Button } from "antd";
//import { useHistory } from "react-router-dom";
import { SIGNIN_FORM } from "../../content/loginform";
import Input from "../../Common/TextInput/Textinput";

import { register, reset } from "../../features/auth/authSlice";
import { useSelector, useDispatch } from "react-redux";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const Signup = ({ handleOnClicksignin = () => {} }) => {
  //  const history = useHistory();

  const [showpassword, setshowpassword] = useState(false);

  const [inputvalue, setinputvalue] = useState({
    Email: "",
    Password: "",
    EmailError: "",
    PasswordError: "",
    Show: false,
  });

  const changetext = () => {
    if (!showpassword) {
      setshowpassword(true);
    } else {
      setshowpassword(false);
    }
  };

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
      toast.success("Success Registered");
      //navigate("/");
    }

    dispatch(reset());
  }, [user, isError, isSuccess, message, dispatch]);

  //back end----------------------------------------------------------------

  const handlesubmituser = () => {
    const validateError = validateall();

    if (!validateError[0] && !validateError[1]) {
      const userData = {
        email: inputvalue.Email,
        password: inputvalue.Password,
      };
      dispatch(register(userData));
    }
  };

  //--------------------------------------------------------------------
  return (
    <div className="formcontainer">
      {/* <pre>{JSON.stringify(inputvalue, undefined, 2)}</pre> */}
      <h1>{SIGNIN_FORM.SIGNUP}</h1>
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

      <Button onClick={handlesubmituser}>{SIGNIN_FORM.SUBMIT_SIGNUP}</Button>
      <div>
        Already have an account <a onClick={handleOnClicksignin}>sign in </a>
      </div>
    </div>
  );
};

export default Signup;
