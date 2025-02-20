import "@mui/material/styles";

interface ExtendedColor extends Color {
  150: string;
  250: string;
  350: string;
  450: string;
  550: string;
  650: string;
}

declare module "@mui/material/styles" {
  interface TypographyVariants {
    subtitle3: React.CSSProperties;
    label1: React.CSSProperties;
    label2: React.CSSProperties;
    label3: React.CSSProperties;
    body3: React.CSSProperties;
  }

  // allow configuration using `createTheme()`
  interface TypographyVariantsOptions {
    subtitle3?: React.CSSProperties;
    label1?: React.CSSProperties;
    label2?: React.CSSProperties;
    label3?: React.CSSProperties;
    body3?: React.CSSProperties;
  }

  interface Palette {
    teal: Color;
    cerulean: PaletteColor;
    cobalt: PaletteColor;
    lightGrey: Color;
    darkGrey: Color;
    transparency: {
      darkGrey: Record<string, string>;
      white: Record<string, string>;
      teal: Record<string, string>;
      darkTeal: Record<string, string>;
    };
    data: Record<string, string>;
  }

  interface PaletteOptions {
    teal: Color;
    cerulean: PaletteColor;
    cobalt: PaletteColor;
    lightGrey: Color;
    darkGrey: Color;
    transparency: {
      darkGrey: Record<string, string>;
      white: Record<string, string>;
      teal: Record<string, string>;
      darkTeal: Record<string, string>;
    };
    data: Record<string, string>;
  }
}

// Update the Typography's variant prop options
declare module "@mui/material/Typography" {
  interface TypographyPropsVariantOverrides {
    subtitle3: true;
    label1: true;
    label2: true;
    label3: true;
    body3: true;
  }
}
