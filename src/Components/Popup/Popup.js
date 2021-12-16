import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import "react-responsive-modal/styles.css";
import "./popup.css";
import { Modal } from "react-responsive-modal";
import { Link } from "react-router-dom";

export const Popup = (props) => {
  const [open, setOpen] = useState(false);
  console.log(props.popupToggle)
  const onCloseModal = () => {
    setOpen(false);
    
  }
  useEffect(() => {
    if (localStorage.getItem("popup") == "yes") {
      setOpen(false);
    } else {
      localStorage.setItem("popup", "yes");
      setOpen(true);
    }
  }, []);

  return (
    <div>
      <Modal open={open} onClose={onCloseModal}>
        <Link to="/airdrop">
          <img
            src={process.env.PUBLIC_URL + "assets/images/poster.jpg"}
            style={{ width: "100%" }}
          />
        </Link>
      </Modal>
    </div>
  );
};
