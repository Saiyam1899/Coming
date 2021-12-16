import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import 'react-responsive-modal/styles.css';
import "./popup.css"
import { Modal } from 'react-responsive-modal';
import { Link } from 'react-router-dom';

export const Popup = () => {
  const [open, setOpen] = useState(true);

  const onOpenModal = () => setOpen(true);
  const onCloseModal = () => setOpen(false);

  return (
    <div>
     
      <Modal open={open} onClose={onCloseModal}>
      
      <Link>
      <img src={process.env.PUBLIC_URL+"assets/images/poster.jpg"} style={{width:"100%"}}/>
      </Link> 
      </Modal>
    </div>
  );
}