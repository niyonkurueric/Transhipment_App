import UploadFileIcon from "@mui/icons-material/UploadFile";
import { Box, Button, TextField, Typography } from "@mui/material";

export default function FileInput({ label }) {
  return (
    <Box>
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

      <Box
        sx={{
          display: "flex",
          position: "relative",
          flexDirection: "column",
          gap: "1.8125rem",
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "#F8F8F8",
          padding: "2.5rem",
          border: ".0525rem dashed #9E9E9E",
          borderRadius: ".525rem",
        }}
      >
        <UploadFileIcon fontSize="large" />
        <Typography
          sx={{
            fontWeight: 600,
            fontSize: ".875rem",
            lineHeight: "1rem",
            color: "#6D6D6D",
          }}
        >
          Select file to upload
        </Typography>
        <TextField
          type="file"
          sx={{
            position: "absolute",
            width: "100%",
            height: "100%",
            opacity: 0,
            cursor: "pointer",
          }}
        />
      </Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          fontWeight: 600,
          fontSize: ".9375rem",
          lineHeight: "1.125rem",
          marginTop: "4.75rem",
        }}
      >
        <Button
          variant="contained"
          sx={{
            paddingInline: "2.4375rem",
            paddingBottom: ".9375rem",
            paddingTop: ".9375rem",
            borderRadius: ".625rem",
            backgroundColor: "#333333",
          }}
        >
          Cancel
        </Button>
        <Button
          variant="contained"
          sx={{
            paddingInline: "2.4375rem",
            paddingBottom: ".9375rem",
            paddingTop: ".9375rem",
            borderRadius: ".625rem",
            backgroundColor: "#26AAE1",
          }}
        >
          Next
        </Button>
      </Box>
    </Box>
  );
}
