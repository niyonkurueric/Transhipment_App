import CloseIcon from "@mui/icons-material/Close";
import { Button, Typography } from "@mui/material";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import { useState } from "react";
import "./App.css";
import AddNewGood from "./components/sections/AddNewGood";
import AddNewHandler from "./components/sections/AddNewHandler";
import ProductDetails from "./components/sections/ProductDetails";
import FileInput from "./components/ui/FileInput";
import SelectInput from "./components/ui/SelectInput";
import Modal from "./components/wrappers/Modal";
import SectionLayout from "./components/wrappers/SectionLayout";

function App() {
  const [isAddNewGoodModalOpen, setIsAddNewGoodModalOpen] = useState(false);
  const [isAddNewHandlerModalOpen, setisAddNewHandlerModalOpen] =
    useState(false);
  const [isTranshipmentFormOpen, setIsTranshipmentFormOpen] = useState(false);

  function openTranshipmentForm() {
    setIsTranshipmentFormOpen(true);
  }
  function closeTranshipmentForm() {
    setIsTranshipmentFormOpen(false);
  }
  function openAddNewGoodModal() {
    setIsAddNewGoodModalOpen(true);
  }
  function closeAddNewGoodModal() {
    setIsAddNewGoodModalOpen(false);
  }
  function openAddNewHandlerModal() {
    setisAddNewHandlerModalOpen(true);
  }
  function closeAddNewHandlerModal() {
    setisAddNewHandlerModalOpen(false);
  }

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
        padding: "0 1.5rem",
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: "28px",
          alignItems: "center",
          textAlign: "center",
        }}
      >
        <Typography
          variant="h1"
          sx={{
            fontSize: "48px",
            fontWeight: 500,
          }}
        >
          Welcome to Transhipment app
        </Typography>
        <Typography
          variant="p"
          sx={{ fontSize: "1.5rem", maxWidth: "62.5rem", marginTop: ".75rem" }}
        >
          To create a new Transhipment entry you will provide offloading car
          including the car plate number and handler. You will be able to create
          a new handler by providing the handler data. get started by clicking
          the button below
        </Typography>

        <Button
          onClick={openTranshipmentForm}
          variant="contained"
          sx={{
            fontSize: "1.5rem",
            padding: "1rem 2rem",
            backgroundColor: "#26AAE1",
            borderRadius: ".625rem",
            width: "fit-content",
          }}
        >
          Create a new Transhipment Entry
        </Button>
      </Box>

      <Modal
        isOpen={isTranshipmentFormOpen}
        handleClose={closeTranshipmentForm}
      >
        <AppBar position="static" sx={{ backgroundColor: "#26AAE1" }}>
          <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
            <Typography
              variant="h6"
              sx={{
                paddingTop: "37px",
                paddingBottom: "37px",
                fontWeight: 700,
                fontSize: "36px",
                lineHeight: "42px",
              }}
            >
              New Transhipment Entry
            </Typography>
            <CloseIcon
              fontSize="large"
              onClick={closeTranshipmentForm}
              sx={{ cursor: "pointer" }}
            />
          </Toolbar>
        </AppBar>
        <SectionLayout>
          <Typography
            variant="h6"
            sx={{
              paddingTop: "37px",
              paddingBottom: "37px",
              fontWeight: 700,
              color: "#26AAE1",
              fontSize: "36px",
              lineHeight: "42px",
            }}
          >
            Offloading Car
          </Typography>
          <Box sx={{ display: "flex", gap: "7.5625rem" }}>
            <SelectInput label="Select car plate number" />
            <SelectInput
              label="Select Handlers"
              onIconButtonClick={openAddNewHandlerModal}
            />
          </Box>
          <ProductDetails handleAddNewProduct={openAddNewGoodModal} />
          <FileInput label="Upload supporting document" />
        </SectionLayout>

        <Modal
          isOpen={isAddNewGoodModalOpen}
          handleClose={setIsAddNewGoodModalOpen}
        >
          <AddNewGood
            onClose={closeAddNewGoodModal}
            onSave={closeAddNewGoodModal}
          />
        </Modal>

        <Modal
          isOpen={isAddNewHandlerModalOpen}
          handleClose={setisAddNewHandlerModalOpen}
        >
          <AddNewHandler
            onClose={closeAddNewHandlerModal}
            onSave={closeAddNewHandlerModal}
          />
        </Modal>
      </Modal>
    </Box>
  );
}

export default App;
