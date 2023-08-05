import { SnackbarProps } from "@mui/material"

export interface CustomSnackbarProps extends SnackbarProps {
    /** Snackbar display message */
  message: string
  /** Snackbar varients */
  variant: "success" | "error" | "info" | "warning"
  onClose: () => void
}
