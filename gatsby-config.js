var netlifyCmsPaths = {
  resolve: `gatsby-plugin-netlify-cms-paths`,
  options: {
    cmsConfig: `/static/admin/config.yml`,
  },
}

module.exports = {
  siteMetadata: {
    title: `Crosspass Podcast`,
    description: `Hosted by Daniel and Bosko, website maintained by Kevin`,
    author: `@kevin-crawford`,
  },
  plugins: [
    netlifyCmsPaths,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-netlify-cms-paths`,
    `gatsby-plugin-twitter`,
    `gatsby-plugin-netlify-cms`,
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          // gatsby-remark-relative-images must
          // go before gatsby-remark-images
          {
            resolve: `gatsby-remark-relative-images`,
          },
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 590,
            },
          },
          {
            resolve: 'gatsby-remark-audio',
            options: {
              preload: 'auto',
              loop: false,
              controls: true,
              muted: false,
              autoplay: false
            }
          },
        ],
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/static/img`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `pages`,
        path: `${__dirname}/src/pages`,
      },
    },
    `gatsby-plugin-netlify-cms`,
    `gatsby-plugin-catch-links`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-sass`,
    {
      resolve: `gatsby-source-twitter`,
      options: {
        credentials: {
          consumer_key: "kTODVshOyjhOtBfGnXwzRIcdw",
          consumer_secret: "jDRIiUT0akq0nnUpuhNWjgxkIPceyel4vst2Cpy7GNrQbJ1bDx",
          bearer_token: "AAAAAAAAAAAAAAAAAAAAALtGAQEAAAAArtzSFRw1KqnojgrPMRyTi2rLCpk%3DoEXm9RZgWVNz8TVQyrXj7qcULE5yDTmyhUgLnKHsdKbb0aswZX",
        },
        queries: {
          cppTwitterQuery: {
            endpoint: "statuses/user_timeline",
            params: {
              screen_name: "crosspasspod",
              include_rts: false,
              exclude_replies: true,
              tweet_mode: "extended",
              count: 5,
            },
          },
        },
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/cpp-logo.png`, // This path is relative to the root of the site.
      },
    },
    `gatsby-plugin-netlify`,
  ],
}
