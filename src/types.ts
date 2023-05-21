export type BlogEntryImages = {
  type: "images";
  value: string[];
};

export type BlogEntryText = {
  type: "text";
  value: string;
};

export type BlogEntry = {
  name: string;
  header_image: string;
  created_on: Date;
  modified_on: Date;
  status: string;
  content: (BlogEntryImages | BlogEntryText)[];
};
