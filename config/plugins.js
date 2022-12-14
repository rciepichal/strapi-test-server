module.exports = {
  // ...
  publisher: {
    enabled: true,
    resolve: "./src/plugins/publisher",
  },
  categorybtn: {
    enabled: true,
    resolve: "./src/plugins/categorybtn",
  },
  slugify: {
    enabled: true,
    config: {
      contentTypes: {
        article: {
          field: "slug",
          references: "title",
        },
      },
    },
  },
  // ...
};
