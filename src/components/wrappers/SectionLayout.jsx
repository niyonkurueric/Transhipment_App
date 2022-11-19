import { Box } from "@mui/material";

export default function SectionLayout({ children }) {
  return (
    <Box
      sx={{
        width: "90%",
        maxWidth: "1305px",
        marginInline: "auto",
        marginBottom: "80px",
      }}
    >
      {children}
    </Box>
  );
}
