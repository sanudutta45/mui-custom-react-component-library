import { SnackbarProps } from "@mui/material"

export interface CustomSnackbarProps extends SnackbarProps {
  message: string
  variant: "success" | "error" | "info" | "warning"
  onClose: () => void
}
