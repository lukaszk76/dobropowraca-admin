import { buildCollection, buildProperty } from "firecms";
import { Tag } from "./types";
import CustomColorTextField from "./TagField";
import { TagPreview } from "./TagPreview";

export const tagCollection = buildCollection<Tag>({
  name: "Tagi",
  singularName: "Tag",
  path: "tags",
  icon: "Tag",
  properties: {
    tag: buildProperty({
      name: "Tag",
      validation: { required: true },
      dataType: "string",
    }),
    color: buildProperty({
      name: "Kolor",
      dataType: "string",
      description: "Wybierz kolor tagu",
      Field: CustomColorTextField,
      Preview: TagPreview,
    }),
  },
});
