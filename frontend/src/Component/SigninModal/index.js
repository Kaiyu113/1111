import { useState } from "react";
import MyModal from "../../Common/Modal";
//import { SIGNIN_FORM } from "../../content/loginform";
import Signin from "../Form/Signin";
import Signup from "../Form/Signup";
import Openbutton from "../../Common/openbutton";
import ForgetPassword from "../Form/ForgetPassword";
import Emailsent from "../Form/Emailsent";
//import { Button } from "antd";

const SigninModal = () => {
  const [visible, setVisible] = useState(false);
  const [showSignup, setShowSignup] = useState(false);
  const [showforget, setShowforget] = useState(false);
  const [sendemail, setsendemail] = useState(false);

  const handleCancel = () => {
    setVisible(false);
    setShowSignup(false);
    setShowforget(false);
    setsendemail(false);
  };

  return (
    <div>
      <Openbutton handleOnClickopen={() => setVisible(true)} />

      {/* <Button className="btn" type="primary" onClick={() => setVisible(true)}>
        {SIGNIN_FORM.SUBMIT_BUTTON}
      </Button> */}
      <MyModal visible={visible} onCancel={handleCancel}>
        {showSignup ? (
          <Signup handleOnClicksignin={() => setShowSignup(false)} />
        ) : showforget ? (
          sendemail ? (
            <Emailsent />
          ) : (
            <ForgetPassword handleOnClicksendemail={() => setsendemail(true)} />
          )
        ) : (
          <Signin
            handleOnClicksignup={() => setShowSignup(true)}
            handleOnClickforgetpassword={() => {
              setShowforget(true);
            }}
          />
        )}
      </MyModal>
    </div>
  );
};

export default SigninModal;
