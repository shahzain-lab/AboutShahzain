module.exports = {
  siteMetadata: {
    siteUrl: "https://www.yourdomain.tld",
    title: "aboutshahzain",
  },
  plugins: [
    {
      resolve: "gatsby-source-contentful",
      options: {
        accessToken: "PvtYzuP3rptQCB48HlVellqPh9HeZbdJwWI3mh3su8w",
        spaceId: "c6fdmx0egqqr",
      },
    },
    "gatsby-plugin-image",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: "./src/images/",
      },
      __key: "images",
    },
  ],
};