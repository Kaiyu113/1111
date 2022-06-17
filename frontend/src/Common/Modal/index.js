import { Modal } from "antd";
import "antd/dist/antd.css";

const MyModal = ({ children, visible, onCancel }) => {
  return (
    <>
      <Modal
        width={600}
        title={null}
        visible={visible}
        footer={null}
        onCancel={onCancel}
        centered={true}
      >
        {children}
      </Modal>
    </>
  );
};

export default MyModal;
