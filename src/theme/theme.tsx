"use client";

import { createTheme } from "@mui/material/styles";

declare module "@mui/material/styles" {
  interface Palette {
    tertiary: Palette["primary"];
    neutral: Palette["primary"];
  }

  interface PaletteOptions {
    tertiary?: PaletteOptions["primary"];
    neutral?: PaletteOptions["primary"];
  }
}

/**
 * =========================================================
 * COLORS
 * =========================================================
 */

const colors = {
  primary: {
    main: "#0284C7",
    light: "#38BDF8",
    dark: "#0369A1",
    contrastText: "#FFFFFF",
  },

  secondary: {
    main: "#059669",
    light: "#34D399",
    dark: "#047857",
    contrastText: "#FFFFFF",
  },

  tertiary: {
    main: "#E11048",
    light: "#FB7185",
    dark: "#BE123C",
    contrastText: "#FFFFFF",
  },

  neutral: {
    main: "#64748B",
    light: "#94A3B8",
    dark: "#475569",
    contrastText: "#FFFFFF",
  },

  /**
   * Background principal da aplicação.
   *
   * Inspirado diretamente no azul/cinza da primeira
   * imagem e no fundo da segunda.
   */
  background: {
    default: "#E4E8F3",
    paper: "#F3F3F3",
  },

  /**
   * Superfícies utilizadas em cards, headers,
   * áreas de informação etc.
   */
  surface: {
    main: "#DAE3F3",
    light: "#E8EEF8",
    dark: "#C2D1E9",
  },

  text: {
    primary: "#1F2023",
    secondary: "#475569",
    disabled: "#94A3B8",
  },

  divider: "#C2D1E9",

  success: {
    main: "#059669",
    light: "#34D399",
    dark: "#047857",
    contrastText: "#FFFFFF",
  },

  warning: {
    main: "#D97706",
    light: "#F59E0B",
    dark: "#B45309",
    contrastText: "#FFFFFF",
  },

  error: {
    main: "#E11048",
    light: "#FB7185",
    dark: "#BE123C",
    contrastText: "#FFFFFF",
  },

  info: {
    main: "#0284C7",
    light: "#38BDF8",
    dark: "#0369A1",
    contrastText: "#FFFFFF",
  },
};

/**
 * =========================================================
 * THEME
 * =========================================================
 */

const theme = createTheme({
  /**
   * -------------------------------------------------------
   * PALETTE
   * -------------------------------------------------------
   */

  palette: {
    mode: "light",

    primary: colors.primary,
    secondary: colors.secondary,
    tertiary: colors.tertiary,
    neutral: colors.neutral,

    success: colors.success,
    warning: colors.warning,
    error: colors.error,
    info: colors.info,

    background: colors.background,

    text: colors.text,

    divider: colors.divider,
  },

  /**
   * -------------------------------------------------------
   * TYPOGRAPHY
   * -------------------------------------------------------
   *
   * Hanken Grotesk:
   * - títulos
   * - textos
   * - interface
   *
   * JetBrains Mono:
   * - labels
   * - números
   * - horários
   * - status
   * - dados técnicos
   */

  typography: {
    fontFamily: '"Hanken Grotesk", Arial, sans-serif',

    h1: {
      fontFamily: '"Hanken Grotesk", Arial, sans-serif',
      fontWeight: 700,
      fontSize: "2.5rem",
      lineHeight: 1.1,
      letterSpacing: "-0.02em",
    },

    h2: {
      fontFamily: '"Hanken Grotesk", Arial, sans-serif',
      fontWeight: 700,
      fontSize: "2rem",
      lineHeight: 1.15,
      letterSpacing: "-0.02em",
    },

    h3: {
      fontFamily: '"Hanken Grotesk", Arial, sans-serif',
      fontWeight: 700,
      fontSize: "1.5rem",
      lineHeight: 1.2,
    },

    h4: {
      fontFamily: '"Hanken Grotesk", Arial, sans-serif',
      fontWeight: 700,
      fontSize: "1.25rem",
      lineHeight: 1.25,
    },

    h5: {
      fontFamily: '"Hanken Grotesk", Arial, sans-serif',
      fontWeight: 600,
      fontSize: "1.1rem",
      lineHeight: 1.3,
    },

    h6: {
      fontFamily: '"Hanken Grotesk", Arial, sans-serif',
      fontWeight: 600,
      fontSize: "1rem",
      lineHeight: 1.3,
    },

    body1: {
      fontFamily: '"Hanken Grotesk", Arial, sans-serif',
      fontSize: "0.875rem",
      lineHeight: 1.5,
    },

    body2: {
      fontFamily: '"Hanken Grotesk", Arial, sans-serif',
      fontSize: "0.8125rem",
      lineHeight: 1.45,
      color: colors.text.secondary,
    },

    subtitle1: {
      fontFamily: '"Hanken Grotesk", Arial, sans-serif',
      fontWeight: 600,
      fontSize: "0.95rem",
    },

    subtitle2: {
      fontFamily: '"Hanken Grotesk", Arial, sans-serif',
      fontWeight: 600,
      fontSize: "0.8125rem",
    },

    button: {
      fontFamily: '"Hanken Grotesk", Arial, sans-serif',
      fontWeight: 600,
      fontSize: "0.75rem",
      textTransform: "none",
    },

    caption: {
      fontFamily: '"JetBrains Mono", monospace',
      fontSize: "0.625rem",
      lineHeight: 1.4,
      letterSpacing: "0.02em",
    },

    overline: {
      fontFamily: '"JetBrains Mono", monospace',
      fontSize: "0.625rem",
      fontWeight: 600,
      lineHeight: 1.4,
      letterSpacing: "0.08em",
      textTransform: "uppercase",
    },
  },

  /**
   * -------------------------------------------------------
   * SHAPE
   * -------------------------------------------------------
   *
   * A interface não possui aquele aspecto "app mobile"
   * extremamente arredondado.
   */

  shape: {
    borderRadius: 4,
  },

  /**
   * -------------------------------------------------------
   * SPACING
   * -------------------------------------------------------
   */

  spacing: 8,

  /**
   * -------------------------------------------------------
   * BREAKPOINTS
   * -------------------------------------------------------
   */

  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 900,
      lg: 1200,
      xl: 1536,
    },
  },

  /**
   * -------------------------------------------------------
   * COMPONENTS
   * -------------------------------------------------------
   */

  components: {
    /**
     * =====================================================
     * CSS BASELINE
     * =====================================================
     */

    MuiCssBaseline: {
      styleOverrides: {
        html: {
          minHeight: "100%",
        },

        body: {
          minHeight: "100vh",
          margin: 0,
          backgroundColor: colors.background.default,
          color: colors.text.primary,
        },

        "*": {
          boxSizing: "border-box",
        },

        "::selection": {
          backgroundColor: colors.primary.main,
          color: "#FFFFFF",
        },

        "::-webkit-scrollbar": {
          width: 8,
          height: 8,
        },

        "::-webkit-scrollbar-track": {
          backgroundColor: colors.surface.main,
        },

        "::-webkit-scrollbar-thumb": {
          backgroundColor: colors.neutral.light,
          borderRadius: 4,
        },

        "::-webkit-scrollbar-thumb:hover": {
          backgroundColor: colors.neutral.main,
        },
      },
    },

    /**
     * =====================================================
     * PAPER
     * =====================================================
     */

    MuiPaper: {
      defaultProps: {
        elevation: 0,
      },

      styleOverrides: {
        root: {
          backgroundImage: "none",
          border: `1px solid ${colors.divider}`,
        },

        rounded: {
          borderRadius: 4,
        },
      },
    },

    /**
     * =====================================================
     * CARD
     * =====================================================
     */

    MuiCard: {
      defaultProps: {
        elevation: 0,
      },

      styleOverrides: {
        root: {
          border: `1px solid ${colors.divider}`,
          borderRadius: 6,
          backgroundColor: colors.background.paper,
          boxShadow: "none",
        },
      },
    },

    /**
     * =====================================================
     * BUTTON
     * =====================================================
     */

    MuiButton: {
      defaultProps: {
        disableElevation: true,
      },

      styleOverrides: {
        root: {
          minHeight: 32,
          borderRadius: 3,
          padding: "5px 12px",
          fontWeight: 600,
          fontSize: "0.75rem",
          lineHeight: 1.2,
        },

        containedPrimary: {
          "&:hover": {
            backgroundColor: colors.primary.dark,
          },
        },

        containedSecondary: {
          "&:hover": {
            backgroundColor: colors.secondary.dark,
          },
        },

        outlined: {
          borderWidth: 1,

          "&:hover": {
            borderWidth: 1,
          },
        },

        sizeSmall: {
          minHeight: 28,
          padding: "4px 9px",
          fontSize: "0.6875rem",
        },

        sizeLarge: {
          minHeight: 38,
          padding: "8px 16px",
        },
      },
    },

    /**
     * =====================================================
     * ICON BUTTON
     * =====================================================
     */

    MuiIconButton: {
      styleOverrides: {
        root: {
          borderRadius: 4,
          padding: 6,
          color: colors.neutral.dark,

          "&:hover": {
            backgroundColor: colors.surface.main,
          },
        },
      },
    },

    /**
     * =====================================================
     * TEXT FIELD
     * =====================================================
     */

    MuiTextField: {
      defaultProps: {
        size: "small",
      },
    },

    /**
     * =====================================================
     * OUTLINED INPUT
     * =====================================================
     */

    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          borderRadius: 3,
          backgroundColor: "#F8F9FC",
          fontFamily: '"Hanken Grotesk", Arial, sans-serif',
          fontSize: "0.8125rem",

          "& fieldset": {
            borderColor: colors.neutral.light,
          },

          "&:hover fieldset": {
            borderColor: colors.neutral.main,
          },

          "&.Mui-focused fieldset": {
            borderColor: colors.primary.main,
            borderWidth: 1,
          },
        },

        input: {
          padding: "7px 10px",
        },
      },
    },

    /**
     * =====================================================
     * INPUT LABEL
     * =====================================================
     */

    MuiInputLabel: {
      styleOverrides: {
        root: {
          fontFamily: '"Hanken Grotesk", Arial, sans-serif',
          fontSize: "0.8125rem",
        },
      },
    },

    /**
     * =====================================================
     * FORM CONTROL
     * =====================================================
     */

    MuiFormControl: {
      styleOverrides: {
        root: {
          marginBottom: 8,
        },
      },
    },

    /**
     * =====================================================
     * CHIP
     * =====================================================
     */

    MuiChip: {
      styleOverrides: {
        root: {
          height: 24,
          borderRadius: 3,
          fontFamily: '"JetBrains Mono", monospace',
          fontSize: "0.625rem",
          fontWeight: 600,
        },

        label: {
          paddingLeft: 8,
          paddingRight: 8,
        },
      },
    },

    /**
     * =====================================================
     * ALERT
     * =====================================================
     */

    MuiAlert: {
      styleOverrides: {
        root: {
          borderRadius: 4,
          padding: "5px 10px",
          fontSize: "0.75rem",
          border: "1px solid",
        },

        message: {
          padding: "3px 0",
        },

        icon: {
          fontSize: 18,
        },
      },
    },

    /**
     * =====================================================
     * TABLE
     * =====================================================
     */

    MuiTableContainer: {
      styleOverrides: {
        root: {
          border: `1px solid ${colors.divider}`,
          borderRadius: 4,
          backgroundColor: colors.background.paper,
        },
      },
    },

    MuiTable: {
      styleOverrides: {
        root: {
          borderCollapse: "separate",
          borderSpacing: 0,
        },
      },
    },

    MuiTableHead: {
      styleOverrides: {
        root: {
          backgroundColor: colors.surface.main,
        },
      },
    },

    MuiTableCell: {
      styleOverrides: {
        root: {
          borderBottom: `1px solid ${colors.divider}`,
          padding: "7px 10px",
          fontSize: "0.6875rem",
          color: colors.text.primary,
        },

        head: {
          fontFamily: '"JetBrains Mono", monospace',
          fontSize: "0.5625rem",
          fontWeight: 600,
          letterSpacing: "0.04em",
          textTransform: "uppercase",
          color: colors.neutral.dark,
          backgroundColor: colors.surface.main,
        },

        body: {
          fontFamily: '"Hanken Grotesk", Arial, sans-serif',
        },
      },
    },

    /**
     * =====================================================
     * TOOLTIP
     * =====================================================
     */

    MuiTooltip: {
      styleOverrides: {
        tooltip: {
          backgroundColor: "#1F2023",
          color: "#FFFFFF",
          fontFamily: '"JetBrains Mono", monospace',
          fontSize: "0.625rem",
          borderRadius: 3,
          padding: "5px 8px",
        },

        arrow: {
          color: "#1F2023",
        },
      },
    },

    /**
     * =====================================================
     * DIVIDER
     * =====================================================
     */

    MuiDivider: {
      styleOverrides: {
        root: {
          borderColor: colors.divider,
        },
      },
    },

    /**
     * =====================================================
     * TABS
     * =====================================================
     */

    MuiTab: {
      styleOverrides: {
        root: {
          minHeight: 36,
          padding: "6px 12px",
          fontFamily: '"Hanken Grotesk", Arial, sans-serif',
          fontSize: "0.75rem",
          fontWeight: 600,
          textTransform: "none",
        },
      },
    },

    /**
     * =====================================================
     * APP BAR
     * =====================================================
     */

    MuiAppBar: {
      defaultProps: {
        elevation: 0,
      },

      styleOverrides: {
        root: {
          backgroundColor: colors.background.paper,
          color: colors.text.primary,
          borderBottom: `1px solid ${colors.divider}`,
          backgroundImage: "none",
        },
      },
    },

    /**
     * =====================================================
     * TOOLBAR
     * =====================================================
     */

    MuiToolbar: {
      styleOverrides: {
        root: {
          minHeight: "48px !important",
          paddingLeft: "16px !important",
          paddingRight: "16px !important",
        },
      },
    },

    /**
     * =====================================================
     * DRAWER
     * =====================================================
     */

    MuiDrawer: {
      styleOverrides: {
        paper: {
          backgroundColor: colors.background.paper,
          borderColor: colors.divider,
          backgroundImage: "none",
        },
      },
    },

    /**
     * =====================================================
     * DIALOG
     * =====================================================
     */

    MuiDialog: {
      styleOverrides: {
        paper: {
          borderRadius: 5,
          border: `1px solid ${colors.divider}`,
          boxShadow: "0 8px 24px rgba(31, 32, 35, 0.12)",
        },
      },
    },

    /**
     * =====================================================
     * DIALOG TITLE
     * =====================================================
     */

    MuiDialogTitle: {
      styleOverrides: {
        root: {
          fontFamily: '"Hanken Grotesk", Arial, sans-serif',
          fontSize: "1rem",
          fontWeight: 700,
          padding: "14px 16px",
        },
      },
    },

    /**
     * =====================================================
     * BADGE
     * =====================================================
     */

    MuiBadge: {
      styleOverrides: {
        badge: {
          fontFamily: '"JetBrains Mono", monospace',
          fontSize: "0.5625rem",
          minWidth: 16,
          height: 16,
        },
      },
    },
  },
});

export default theme;