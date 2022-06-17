import { FaRegUser } from "react-icons/fa";
import { BiCartAlt } from "react-icons/bi";
import { Input } from "antd";

import OpenCart from "../../Component/Cart";
import Openbutton from "../../Component/SigninModal";
import { Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { logout, reset } from "../../features/auth/authSlice";

const Header = ({}) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.auth);

  const onLogout = () => {
    dispatch(logout());
    dispatch(reset());
    navigate("/");
  };

  return (
    <div className="header">
      <ul>
        <li>
          <Link className="management" to="/home">
            Management
          </Link>
        </li>
        <li className="chuwa">Chuwa</li>
        <li className="search">
          <Input.Search placeholder="Search" />
        </li>
      </ul>

      <ul>
        {user ? (
          <li>
            <button className="btn" onClick={onLogout}>
              <FaRegUser /> Logout
            </button>
          </li>
        ) : (
          <>
            <li>
              {/* <Button /> */}
              <Openbutton />
            </li>
          </>
        )}
        <li>
          <OpenCart />
        </li>
      </ul>
    </div>
  );
};

export default Header;
