import CloseIcon from "@mui/icons-material/Close";
import { AppBar, Box, Button, Toolbar, Typography } from "@mui/material";
import TextInput from "../ui/TextInput";
import SectionLayout from "../wrappers/SectionLayout";

export default function AddNewHandler({ onSave, onClose }) {
  return (
    <Box>
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
            Add New Handler
          </Typography>
          <CloseIcon
            fontSize="large"
            onClick={onClose}
            sx={{ cursor: "pointer" }}
          />
        </Toolbar>
      </AppBar>
      <SectionLayout>
        <Box
          sx={{
            marginTop: "3.875rem",
            display: "flex",
            flexDirection: "column",
            gap: "40px",
          }}
        >
          <TextInput label="Full Name" placeholder="Enter handler’s name" />
          <TextInput
            label="ID Number"
            placeholder="Enter handler’s ID Number"
          />
          <TextInput
            label="ID Number"
            placeholder="Enter handler’s ID Number"
          />
          <TextInput
            label="Phone Number"
            placeholder="Enter handlers phone number"
          />
          <Box>
            <Button
              onClick={onSave}
              variant="contained"
              sx={{ backgroundColor: "#26AAE1", padding: ".5625rem 2.125rem" }}
            >
              Add
            </Button>
          </Box>
        </Box>
      </SectionLayout>
    </Box>
  );
}
