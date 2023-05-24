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
      <SketchPicker color={value} onChangeComplete={(e) => setValue(e.hex)} />
    </>
  );
}
