//theme
import {
  createTheme,
  type PaletteOptions,
  type SimplePaletteColorOptions,
} from "@mui/material/styles";
import { type ToastOptions } from "react-toastify";
import {
  grey,
  blue,
  blueGrey,
  indigo,
  red,
  common,
} from "@mui/material/colors";
import { type ThemeOptions, alpha, darken } from "@mui/material/styles";
//import type {} from "@mui/x-data-grid/themeAugmentation"; // https://github.com/mui/mui-x/issues/1755
import "@fontsource/source-sans-3"; //JC Note: need to add a few <link> things to public/index.html to make google font load
import React from "react";
import { colors } from "@mui/material";
declare module "@mui/material/styles" {
  interface TypographyVariants {
    select: React.CSSProperties;
    loader: React.CSSProperties;
    th: React.CSSProperties;
  }

  interface TypographyVariantsOptions {
    select?: React.CSSProperties;
    loader?: React.CSSProperties;
    th?: React.CSSProperties;
  }
}

declare module "@mui/material/Typography" {
  interface TypographyPropsVariantOverrides {
    select: true;
    loader: true;
    th: true;
  }
}

interface SimplePaletteOptions extends PaletteOptions {
  primary: SimplePaletteColorOptions;
  secondary: SimplePaletteColorOptions;
  success: SimplePaletteColorOptions;
}

export const toastOptions: ToastOptions = {
  position: "top-right",
  autoClose: 5000,
  hideProgressBar: false,
  closeOnClick: true,
  pauseOnHover: true,
  draggable: true,
  progress: undefined,
  theme: "light",
};

const palette: SimplePaletteOptions = {
  mode: "light",
  primary: {
    light: "#BBBCFF",
    main: "#1C2271",
    dark: "#00003C",
  },
  secondary: {
    main: blue.A400, //JC Should this be blue for links and buttons or something else in the long term?
  },
  success: {
    main: "#39AC73",
  },
  background: {
    default: common.white,
    light: "#F5F8FC", //api key and marketplace banner at the moment
    lighter: "#ff0000", //TBD
    paper: common.white,
  },
  text: {
    primary: "#1C2271",
    secondary: "#676980",
  },
  border: {
    main: indigo[100],
    light: "#ff0000", //TBD
    dark: "#ff0000", //TBD
    darker: "#ff0000", //TBD
  },
  customColor: {
    link: blue.A400, //should links (button and text) be a custom var?
  },
};

// Deleting this section
// const sharedButtonStyles = {
//   height: 40,
//   lineHeight: 0,
//   fontSize: "0.875rem", // 14px
//   padding: "0 0.75rem", // 12px
//   "& .MuiButton-startIcon": { marginRight: "0.375rem" }, // 6px
//   boxShadow: `4px 4px 0px ${grey[100]}`,
//   "&:hover": {
//     boxShadow: `4px 4px 0px ${grey[300]}`,
//   },
// };

// Default caption style
const caption = {
  fontWeight: 400,
  fontSize: "0.857143rem", // MUI defines font sizes in pixels and then uses helper functions to convert them to rem, which is why the value seems unusual.
  lineHeight: 1.66,
  letterSpacing: "0.03333em",
};

const themeOptions: ThemeOptions = {
  palette,
  typography: {
    fontFamily: `"Source Sans 3", sans-serif`,
    // fontSize: 16, // do not change this value, it is used for font rem calculation everywhere
    // JC I commented out the fontSize to get the typography to match the desired size. Lets chat about it
    // fontWeightRegular: 400,
    //button: {
    //  textTransform: "capitalize",
    //  fontWeight: 700,
    //  fontSize: "1rem",
    //},
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
    // caption: {
    //  ...caption,
    //},
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
  components: {
    MuiButtonBase: {
      defaultProps: { disableRipple: true },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          transition: "none",
          textTransform: "none",
          fontWeight: 600,
          //letterSpacing: ".02em",
        },
        contained: ({ theme }) => ({
          backgroundColor: theme.palette.customColor.link,
          color: common.white,
          boxShadow: "none",
          "&:hover": {
            backgroundColor: darken(theme.palette.customColor.link, 0.1),
            boxShadow: "none",
          },
        }),
        outlined: ({ theme }) => ({
          borderColor: theme.palette.customColor.link,
          color: theme.palette.customColor.link,
          // fontWeight: 600,
          "&:hover": {
            backgroundColor: alpha(theme.palette.customColor.link, 0.0),
            boxShadow: `4px 4px 0px ${alpha(
              theme.palette.customColor.link,
              0.1
            )}`,
          },
        }),

        text: ({ theme }) => ({
          color: theme.palette.customColor.link,
          // fontWeight: 400,
          "&:hover": {
            backgroundColor: alpha(theme.palette.customColor.link, 0.03),
          },
        }),
      },
    },

    MuiDialogTitle: {
      styleOverrides: {
        root: {
          fontSize: "1.5rem", //JC What does this do?
          fontWeight: 900, //JC What does this do?
          margin: "1rem 0 0 0",
        },
      },
    },
    MuiDialogActions: {
      defaultProps: {
        sx: { px: 3, py: 2 },
      },
      styleOverrides: {
        root: {
          "& .MuiButton-text": {
            fontSize: "0.875rem", // Targeting all "cancel" buttons of text variant in mui dialogs
          },
        },
      },
    },
    MuiFormControl: {
      defaultProps: {
        sx: {
          mb: 2,
        },
        size: "small",
      },
    },
    MuiFormHelperText: {
      styleOverrides: {
        root: {
          marginLeft: 0,
          marginRight: 0,
        },
      },
    },
    MuiLink: {
      defaultProps: {
        underline: "hover",
        color: "secondary",
        sx: { cursor: "pointer" },
        rel: "noopener noreferrer",
      },
    },
    MuiDataGrid: {
      styleOverrides: {
        root: {
          border: "none",
          fontSize: "1rem",
          "& .MuiDataGrid-columnHeaderTitle": {
            // Mui Data Grid Header Styles
            fontWeight: 700,
            fontSize: "0.875rem",
            textTransform: "uppercase",
          },
          "& .MuiDataGrid-columnHeaders": {
            outline: "none",
          },
          "& .MuiDataGrid-columnHeader:focus": {
            outline: "none",
          },
          "& .MuiDataGrid-columnSeparator": {
            display: "none",
          },
          "& .MuiDataGrid-cell:focus": {
            outline: 0,
          },
          "& .MuiDataGrid-cell:focus-within": {
            outline: 0,
          },
          "& .MuiDataGrid-row:hover": {
            backgroundColor: "unset",
          },
        },
      },
    },
    MuiPagination: {
      defaultProps: {
        color: "primary",
        shape: "rounded",
      },
    },
    MuiContainer: {
      defaultProps: {
        maxWidth: false,
        sx: {
          width: "96%",
        },
      },
    },
    MuiTabs: {
      defaultProps: {
        textColor: "inherit",
        sx: {
          "& .MuiTabs-indicator": {
            backgroundColor: red[700],
          },
        },
      },
    },
    MuiTab: {
      defaultProps: {
        sx: {
          textTransform: "none",
          minWidth: 0,
        },
      },
    },
    MuiTextField: {
      defaultProps: {
        InputLabelProps: { shrink: true },
        margin: "normal",
      },
      styleOverrides: {
        root: {
          input: {
            "&:-webkit-autofill": {
              WebkitBoxShadow: "0 0 0 100px #FFFFFF inset",
              WebkitTextFillColor: "default",
            },
          },
        },
      },
    },
    MuiInputLabel: {
      styleOverrides: {
        root: ({ theme }) => ({
          color: theme.palette.text.primary,
        }),
      },
    },
    // Fixes "Select" form label background color
    MuiFormLabel: {
      styleOverrides: {
        root: {
          backgroundColor: common.white,
        },
      },
    },
    MuiDivider: {
      styleOverrides: {
        root: {
          borderColor: (theme) => theme.palette.border.main,
        },
      },
    },
    MuiCheckbox: {
      styleOverrides: {
        root: ({ theme }) => ({
          // Unchecked state
          color: theme.palette.primary.main,

          // Checked state
          "&.Mui-checked": {
            color: theme.palette.customColor.link,
          },
        }),
      },
    },
  },
};

export const theme = createTheme(themeOptions);
export default theme;
