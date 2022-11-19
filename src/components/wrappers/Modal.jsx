import Dialog from "@mui/material/Dialog";
import Slide from "@mui/material/Slide";
import { forwardRef } from "react";

const Transition = forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function Modal({ isOpen, handleClose, children }) {
  return (
    <Dialog
      TransitionComponent={Transition}
      fullScreen
      open={isOpen}
      onClose={handleClose}
    >
      {children}
    </Dialog>
  );
}
