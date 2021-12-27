
const { BLOCKS, MARKS, INLINES } = require('@contentful/rich-text-types')

require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})

module.exports = {
  siteMetadata: {
    siteUrl: "https://www.yourdomain.tld",
    title: "aboutshahzain",
  },
  plugins: [
    {
      resolve: "gatsby-source-contentful",
      options: {
        spaceId: '4gw3jsxtpa2w',
        accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
      },
    },
    "gatsby-plugin-image",
    "gatsby-plugin-sharp",
    'gatsby-plugin-postcss',
    "gatsby-transformer-sharp",
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `About Shahzain`,
        short_name: `shahzain`,
        description: `Modern Front-End developer`,
        start_url: `/`,
        background_color: `#252525`,
        theme_color: `#252525`,
        display: `standalone`,
        icon: `src/assets/transLogo.png`,
        icons: [
          {
            src: `src/assets/transLogo.png`,
            sizes: `192x192`,
            type: `image/png`
          },
          {
            src: `src/assets/transLogo.png`,
            sizes: `512x512`,
            type: `image/png`
          }
        ]
      },
    },
    `gatsby-plugin-offline`,
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "assets",
        path: "./src/assets/",
      },
      __key: "images",
    },
  ],
};
