import AddIcon from "@mui/icons-material/Add";
import { Box, Button, Typography } from "@mui/material";
import Select from "react-select";

const options = [
  { value: "chocolate", label: "Chocolate" },
  { value: "strawberry", label: "Strawberry" },
  { value: "vanilla", label: "Vanilla" },
];

export default function SelectInput({ label, onIconButtonClick }) {
  return (
    <Box sx={{ width: "100%" }}>
      <Typography
        variant="h6"
        sx={{
          paddingBottom: ".4375rem",
          fontWeight: 500,
          color: "#000",
          fontSize: ".9375rem",
          lineHeight: "1.125rem",
        }}
      >
        {label}
      </Typography>
      <Box sx={{ display: "flex", gap: ".5rem" }}>
        <Select
          options={options}
          styles={{
            container: (baseStyles, state) => ({
              ...baseStyles,
              width: "100%",
              fontWeight: 500,
              lineHeight: ".9375rem",
              fontSize: ".8125rem",
              color: "#9E9E9E",
            }),
            control: (baseStyles, state) => ({
              ...baseStyles,
              width: "100%",
              paddingInline: "1.5rem",
              paddingBottom: ".875rem",
              paddingTop: ".6875rem",
              backgroundColor: "#F8F8F8",
            }),
          }}
        />
        <Button
          variant="contained"
          sx={{ backgroundColor: "#26AAE1" }}
          onClick={onIconButtonClick}
        >
          <AddIcon fontSize="large" />
        </Button>
      </Box>
    </Box>
  );
}
