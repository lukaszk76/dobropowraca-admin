import { PropertyPreviewProps } from "firecms";
import { Chip } from "@mui/material";

export function TagPreview({ value }: PropertyPreviewProps<string>) {
  return (
    <Chip
      label="TAG"
      sx={{
        fontWeight: 500,
        color: "white",
        px: 5,
        width: "max-content",
        backgroundColor: value,
      }}
    />
  );
}
