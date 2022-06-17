import { createFromIconfontCN } from "@ant-design/icons";
import { Space } from "antd";

const Footer = () => {
  const IconFont = createFromIconfontCN({
    scriptUrl: "//at.alicdn.com/t/font_8d5l8fzk5b87iudi.js",
  });
  return (
    <div className="footer">
      <p className="footer-1">@2022 All Right Reserved.</p>
      <span className="footer-1">
        <Space>
          <IconFont type="icon-tuichu" />
          <IconFont type="icon-facebook" />
          <IconFont type="icon-twitter" />
        </Space>
      </span>
      <ul>
        <li>Contact us</li>
        <li>Privacy Policies</li>
        <li>Help</li>
      </ul>
    </div>
  );
};

export default Footer;
