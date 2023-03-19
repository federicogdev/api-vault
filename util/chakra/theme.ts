import "@fontsource/inter/500.css";
import "@fontsource/inter/700.css";

import { extendTheme } from "@chakra-ui/react";
import { mode, GlobalStyleProps } from "@chakra-ui/theme-tools";

const styles = {
  global: (props: GlobalStyleProps) => ({
    body: {
      // bg: mode("#ffffff40", "#202023")(props),
    },
  }),
};

const components = {};

const fonts = {
  heading: "'Inter'",
  body: "'Inter'",
};

const colors = {
  grassTeal: "#88ccca",
};

const config = {
  initialColorMode: "dark",
  useSystemColorMode: true,
};

const theme = extendTheme({ config, styles, components, fonts, colors });

export default theme;
