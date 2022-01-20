module.exports = {
  siteMetadata: {
    title: 'My Book Club',
    navItems: [
      {
        label: 'books',
        path: '/books',
      },
      {
        label: 'authors',
        path: '/authors',
      },
    ],
  },
  plugins: [
    'gatsby-theme-shared-nav',
    'gatsby-plugin-image',
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
  ],
};
