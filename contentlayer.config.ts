import {
  defineComputedFields,
  defineDocumentType,
  makeSource,
} from "contentlayer/source-files";
import readingTime from "reading-time";

const computedFields = defineComputedFields<"Post">({
  slug: {
    type: "string",
    resolve: (doc) => doc._raw.sourceFileName.replace(/\.mdx$/, ""),
  },
  url: {
    type: "string",
    resolve: (doc) => {
      return `https://ademilter.com/post/${doc.slug}`;
    },
  },
  readingTime: {
    type: "json",
    resolve: (doc) => {
      return readingTime(doc.body.raw);
    },
  },
});

const Post = defineDocumentType(() => ({
  name: "Post",
  contentType: "mdx",
  filePathPattern: `posts/*.mdx`,
  fields: {
    date: { type: "date", required: true },
    title: { type: "string", required: true },
    subtitle: { type: "string", required: false },
    tweetUrl: { type: "string", required: false },
  },
  computedFields,
}));

export default makeSource({
  contentDirPath: "data",
  documentTypes: [Post],
});
