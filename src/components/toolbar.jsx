import React from "react";
import { Box } from "grommet";

export const Toolbar = ({ props, children }) => {
  return (
    <Box
      tag="header"
      direction="row"
      align="center"
      ustify="between"
      background="light-2"
      pad={{ vertical: "small", horizontal: "medium" }}
      elevation="medium"
      {...props}
    >
      {children}
    </Box>
  );
};
