import { createTheme, alpha, darken } from "https://esm.sh/@mui/material/styles";
import { blue, indigo, red, grey, common } from "https://esm.sh/@mui/material/colors";
import { colors } from "https://esm.sh/@mui/material";

// Optional: skip fontsource in CodeSandbox or preload via `<link>` in `index.html`

const palette = {
  mode: "light",
  primary: {
    light: "#BBBCFF",
    main: "#1C2271",
    dark: "#00003C",
  },
  secondary: {
    main: blue.A400,
  },
  success: {
    main: "#39AC73",
  },
  background: {
    default: common.white,
    light: "#F5F8FC",
    lighter: "#ff0000",
    paper: common.white,
  },
  text: {
    primary: "#1C2271",
    secondary: "#676980",
  },
  border: {
    main: indigo[100],
    light: "#ff0000",
    dark: "#ff0000",
    darker: "#ff0000",
  },
  customColor: {
    link: blue.A400,
  },
};

const caption = {
  fontWeight: 400,
  fontSize: "0.857143rem",
  lineHeight: 1.66,
  letterSpacing: "0.03333em",
};

const themeOptions = {
  palette,
  typography: {
    fontFamily: `"Source Sans 3", sans-serif`,
    h1: { fontSize: "2rem", fontWeight: 700, lineHeight: 1.25 },
    h2: { fontSize: "1.75rem", fontWeight: 700, lineHeight: 1.2857 },
    h3: { fontSize: "1.5rem", fontWeight: 700, lineHeight: 1.3333 },
    h4: { fontSize: "1.375rem", fontWeight: 700, lineHeight: 1.3636 },
    h5: { fontSize: "1.25rem", fontWeight: 700, lineHeight: 1.4 },
    h6: { fontSize: "1.125rem", fontWeight: 600, lineHeight: 1.4444 },
    subtitle1: { fontSize: "1rem", fontWeight: 400, lineHeight: 1.5 },
    subtitle2: { fontSize: "0.875rem", fontWeight: 400, lineHeight: 1.4286 },
    body1: { fontSize: "1rem", fontWeight: 400, lineHeight: 1.5 },
    body2: { fontSize: "0.875rem", fontWeight: 400, lineHeight: 1.4286 },
    caption: { fontSize: "0.875rem", fontWeight: 400, lineHeight: 1.2857 },
    overline: {
      fontSize: "0.75rem",
      fontWeight: 700,
      textTransform: "uppercase",
      letterSpacing: "0.02em",
    },
    th: {
      fontSize: "0.875rem",
      fontWeight: 700,
      lineHeight: "1.25rem",
    },
    loader: {
      ...caption,
      color: colors.indigo[700],
    },
    select: {
      ...caption,
      fontWeight: 600,
    },
  },
};

const theme = createTheme(themeOptions);
export default theme;
