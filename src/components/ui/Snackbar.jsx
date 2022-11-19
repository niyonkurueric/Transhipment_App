import DoneIcon from "@mui/icons-material/Done";
import { Box, Typography } from "@mui/material";

export default function Snackbar() {
  return (
    <Box
      sx={{
        position: "relative",
        border: "1px solid #26AAE1",
        marginTop: "1.5rem",
        borderRadius: ".3125rem",
        display: "flex",
        alignItems: "center",
        backgroundColor: "rgba(38, 170, 225, 0.04)",
        justifyContent: "space-between",
        paddingTop: "1.8125rem",
        paddingBottom: "1.8125rem",
        fontWeight: 500,
        fontSize: ".9375rem",
        color: "#000",
        lineHeight: "1.125rem",
      }}
    >
      <Box
        sx={{
          position: "absolute",
          height: "100%",
          width: ".75rem",
          backgroundColor: "#26AAE1",
          top: 0,
        }}
      ></Box>
      <Typography sx={{ marginLeft: "3.3125rem" }}>Sugar</Typography>
      <Typography>23 items</Typography>
      <Typography>50 KG/item</Typography>
      <DoneIcon
        fontSize="large"
        color="primary"
        sx={{ marginRight: "1.8125rem" }}
      />
    </Box>
  );
}
