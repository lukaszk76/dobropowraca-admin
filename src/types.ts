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
  date: Date;
  status: string;
  mainPage: boolean;
  content: (BlogEntryImages | BlogEntryText)[];
  tags: Tag[];
};

export type Tag = {
  tag: string;
  color: string;
};

export type WebPage = {
  name: string;
  url: string;
  content: (BlogEntryImages | BlogEntryText)[];
  meta_description: string;
  meta_title: string;
};
