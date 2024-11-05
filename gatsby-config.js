/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/reference/config-files/gatsby-config/
 */

/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  plugins: [
    {
      resolve: `gatsby-omni-font-loader`,
      options: {
        enableListener: true,
        preconnect: [`https://fonts.googleapis.com`, `https://fonts.gstatic.com`],
        web: [
          {
            name: `Gentium Book Plus`,
            file: `https://fonts.googleapis.com/css2?family=Days+One&family=Gentium+Book+Plus:ital,wght@0,400;0,700;1,400;1,700&display=swap`,
          },
        ],
      },
    },
    'gatsby-plugin-postcss',
  ],
}
