export interface CustomButtonProps {
  /** Button Colors */
  color: "primary" | "secondary" | "default"
  /** Button sizes */
  size: "small" | "medium" | "large"
  /** Button on click handler */
  onClick?: () => void
}