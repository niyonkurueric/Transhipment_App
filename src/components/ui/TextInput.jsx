import { Box, Typography } from "@mui/material";
import TextField from "@mui/material/TextField";

export default function TextInput({ label, placeholder }) {
  return (
    <Box sx={{ width: "100%", height: "100%" }}>
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
      <Box>
        <TextField
          sx={{ width: "100%", height: "100%", backgroundColor: "#F8F8F8" }}
          variant="outlined"
          placeholder={placeholder}
        />
      </Box>
    </Box>
  );
}
