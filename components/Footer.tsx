import { Box, Typography } from "@mui/material";

const Navbar = () => {
  return (
    <Box height={"80px"} py={"15px"} component={"footer"} bgcolor={"#4caf50"}>
      <Box
        maxWidth={"1300px"}
        px={{ xs: 1, sm: 2, md: 3, lg: 4, xl: 5 }}
        mx={"auto"}
      >
        <Typography variant="h4" color="black" textAlign={"center"}>
          Footer
        </Typography>
      </Box>
    </Box>
  );
};

export default Navbar;
