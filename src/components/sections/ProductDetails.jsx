import AddIcon from "@mui/icons-material/Add";
import { Box, Button, Typography } from "@mui/material";
import SelectInput from "../ui/SelectInput";
import Snackbar from "../ui/Snackbar";
import TextInput from "../ui/TextInput";

export default function ProductDetails({ handleAddNewProduct }) {
  return (
    <Box component="section" sx={{ marginTop: "4.3125rem" }}>
      <Box
        sx={{
          color: "#26AAE1",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          paddingBottom: "11px",
          borderBottom: "1px solid rgba(38, 170, 225, 0.29)",
        }}
      >
        <Typography sx={{ fontWeight: 700, fontSize: "1.0625rem" }}>
          Product details
        </Typography>
        <Button
          variant="outlined"
          startIcon={<AddIcon fontSize="large" />}
          sx={{
            paddingTop: ".875rem",
            paddingBottom: ".875rempx",
            paddingInline: ".875rem",
          }}
        >
          Add New Product
        </Button>
      </Box>
      <Snackbar />
      <Box
        component="form"
        sx={{
          color: "#26AAE1",
          display: "flex",
          alignItems: "center",
          gap: "11rem",
          marginTop: "1.4375rem",
        }}
      >
        <SelectInput
          label="Select product name"
          onIconButtonClick={handleAddNewProduct}
        />
        <TextInput label="Number of items" />
      </Box>
      <Box
        component="form"
        sx={{
          color: "#26AAE1",
          display: "flex",
          alignItems: "center",
          gap: "11rem",
          marginTop: "2.6875rem",
        }}
      >
        <TextInput label="Weight/Item" />
        <TextInput label="Price/Item (Optional)" />
      </Box>
      <Box
        sx={{
          display: "flex",
          marginTop: "1.5rem",
          justifyContent: "flex-end",
        }}
      >
        <Button
          variant="contained"
          sx={{
            backgroundColor: "#26AAE1",
            paddingInline: "1.8125rem",
            paddingTop: ".5625rem",
            paddingBottom: ".5625rem",
          }}
        >
          Save Product
        </Button>
      </Box>
    </Box>
  );
}
