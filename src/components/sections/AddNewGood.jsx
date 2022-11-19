import CloseIcon from "@mui/icons-material/Close";
import { AppBar, Box, Button, Toolbar, Typography } from "@mui/material";
import TextInput from "../ui/TextInput";
import SectionLayout from "../wrappers/SectionLayout";

export default function AddNewGood({ onSave, onClose }) {
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
            Add New Good
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
          <TextInput label="Name" placeholder="Name your good" />
          <TextInput
            label="Dimension (Optional)"
            placeholder="Specify size occupied"
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
