import { FieldDescription, FieldProps } from "firecms";
import { SketchPicker } from "react-color";

export default function CustomColorTextField({
  property,
  value,
  setValue,
}: FieldProps<string>) {
  console.log("value", value);
  return (
    <>
      <FieldDescription property={property} />
      <SketchPicker
        color={value}
        presetColors={[
          "#0C0468",
          "#840032",
          "#7A6F9B",
          "#51513D",
          "#F7B32B",
          "#086375",
          "#9E7B9B",
        ]}
        onChangeComplete={(e) => setValue(e.hex)}
      />
    </>
  );
}
