import { buildCollection, buildProperty } from "firecms";
import { WebPage } from "./types";

export const webPagesCollection = buildCollection<WebPage>({
  name: "Strony",
  singularName: "Strona",
  path: "pages",
  icon: "Web",
  properties: {
    url: buildProperty({
      name: "URL",
      description: "pole do identylfikacji wpisu - nie zminiać",
      validation: { required: true },
      dataType: "string",
    }),
    name: buildProperty({
      name: "Tytuł",
      description: "Tytuł widoczny na stronie",
      validation: { required: true },
      dataType: "string",
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
              "Tu możesz dodać jedno lub więcej zdjęć, które będą wyświetlane na stronie.",
          }),
          files: buildProperty({
            name: "Pliki",
            singularName: "plik",
            icon: "file",
            dataType: "array",
            of: buildProperty({
              dataType: "string",
              storage: {
                storagePath: "files",
                metadata: {
                  cacheControl: "max-age=1000000",
                },
              },
            }),
            description:
              "Tu możesz dodać jeden lub więcej plików, które będzie można pobrać ze strony.",
          }),
          text: buildProperty({
            dataType: "string",
            name: "Tekst",
            markdown: true,
          }),
        },
      },
    }),
    meta_description: buildProperty({
      name: "Opis - meta",
      description: "Opis strony, który będzie wyświetlany w wyszukiwarce.",
      validation: { required: true },
      dataType: "string",
    }),
    meta_title: buildProperty({
      name: "Tytuł - meta",
      description: "Tytuł strony, który będzie wyświetlany w wyszukiwarce.",
      validation: { required: true },
      dataType: "string",
    }),
  },
});
