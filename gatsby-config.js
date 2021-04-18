module.exports = {
  siteMetadata: {
    title: `Gatsby Foodtruck Website`,
    description: `Simply Foodtruck Template.`,
    author: `@Felikso`,
    siteUrl: `https://projekty.ventus-trade.pl/`
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-image`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/assets/images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `videos`,
        path: `${__dirname}/src/assets/videos`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    `gatsby-plugin-gatsby-cloud`,
    `gatsby-transformer-json`,
    'gatsby-plugin-loadable-components-ssr',
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `./src/data/`,
      },
    },
    {
      resolve: 'gatsby-plugin-htaccess',
      options: {
        RewriteBase: true,
        https: true,
        www: true,
        SymLinksIfOwnerMatch: true,
        host: 'www.projekty.ventus-trade.pl',
        custom: `
             RewriteCond %{HTTP_HOST} ^projekty.ventus-trade.pl [NC]
             RewriteRule ^(.*)$ https://www.projekty.ventus-trade.pl/$1 [L,R=301,NC]
        `,
      },
    },
  ],
}
