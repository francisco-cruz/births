import { styled } from "../stitches.config";

export const Input = styled("input", {
  width: "100%",
  boxSizing: "border-box",
  paddingLeft: 8,
  paddingRight: 8,
  outline: "none",
  border: "1px solid $borderDefault",
  fontWeight: 400,
  fontFamily: "$1",
  backgroundColor: "white",
  color: '#102732',
  "&:focus": {
    border: "1px solid $borderFocus",
    boxShadow: "$inputFocus",
    color: "$black",
  },
  variants: {
    size: {
      small: {
        height: "$5",
        fontSize: "$2",
      },
      default: {
        height: "$6",
        fontSize: "$3",
      },
      large: {
        height: "$7",
        fontSize: "$4",
      },
    },
    radii: {
      0: {
        borderRadius: "$0",
      },
      1: {
        borderRadius: "$1",
      },
      2: {
        borderRadius: "$2",
      },
      3: {
        borderRadius: "$3",
      },
      4: {
        borderRadius: "$4",
      },
      5: {
        borderRadius: "$5",
      },
    },
    disable: {
      true: {
        cursor: "none",
        pointerEvents: "none",
        color: "$blackDisable",
      },
      false: {
        cursor: "pointer",
        color: "$blackMedium",
      },
    },
  },
  defaultVariants: {
    size: 'default',
    radii: "2",
    disable: "false"
  },
});

