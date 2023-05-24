import { buildCollection, buildProperty } from "firecms";
import { BlogEntry } from "./types";

export const blogCollection = buildCollection<BlogEntry>({
  name: "Aktualności",
  singularName: "Wpis aktualności",
  path: "blog",
  icon: "Article",
  properties: {
    name: buildProperty({
      name: "Tytuł",
      validation: { required: true },
      dataType: "string",
    }),
    header_image: buildProperty({
      name: "Główne zdjęcie",
      dataType: "string",
      storage: {
        mediaType: "image",
        storagePath: "images",
        acceptedFiles: ["image/*"],
        metadata: {
          cacheControl: "max-age=1000000",
        },
      },
    }),
    flagged: buildProperty({
      name: "Piękne umysły",
      dataType: "boolean",
      description:
        "Zaznacz jeśli wpis ma być oznaczomy tagiem 'Piękne umysły'.",
      defaultValue: false,
    }),
    content: buildProperty({
      name: "Treść",
      description: "Tu moższe dodać zdjęcia i tekst",
      validation: { required: true },
      dataType: "array",
      columnWidth: 400,
      oneOf: {
        typeField: "type", // you can ommit these `typeField` and `valueField` props to use the defaults
        valueField: "value",
        properties: {
          images: buildProperty({
            name: "Zdjęcia",
            singularName: "zdjęcie",
            icon: "image",
            dataType: "array",
            of: buildProperty({
              dataType: "string",
              storage: {
                mediaType: "image",
                storagePath: "images",
                acceptedFiles: ["image/*"],
                metadata: {
                  cacheControl: "max-age=1000000",
                },
              },
            }),
            description:
              "Tu możesz dodać jedno lub więcej zdjęć, które będą wyświetlane we wpisie.",
          }),
          text: buildProperty({
            dataType: "string",
            name: "Tekst",
            markdown: true,
          }),
        },
      },
    }),
    status: buildProperty(({ values }) => ({
      name: "Status",
      validation: { required: true },
      dataType: "string",
      columnWidth: 140,
      enumValues: {
        published: {
          id: "published",
          label: "Opublikowany",
          disabled: !values.header_image,
        },
        draft: "Wersja robocza",
      },
      defaultValue: "draft",
    })),
    date: buildProperty({
      name: "Data",
      validation: { required: false },
      dataType: "date",
    }),
    created_on: buildProperty({
      name: "Data utworzenia",
      dataType: "date",
      autoValue: "on_create",
    }),
    modified_on: buildProperty({
      name: "Data modyfikacji",
      dataType: "date",
      autoValue: "on_update",
    }),
    tags: buildProperty({
      dataType: "array",
      name: "Tagi",
      of: buildProperty({
        dataType: "reference",
        description: "Wybierz tagi, które mają być przypisane do wpisu.",
        path: "tags",
      }),
    }),
  },
});
