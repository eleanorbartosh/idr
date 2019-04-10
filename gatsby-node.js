const path = require('path');
const { createFilePath } = require(`gatsby-source-filesystem`);
const { copy } = require('fs-extra');

// Method that creates nodes based on the file system that we can use in our templates
exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions;
  // If the node type (file) is a markdown file
  if (node.internal.type === 'Mdx') {
    const dir = path.resolve(__dirname, '');
    const fileNode = getNode(node.parent);
    const slug = createFilePath({
      node,
      getNode,
      basePath: `content`,
      trailingSlash: false,
    });
    const currentPage = slug.split('/').pop();

    // example
    createNodeField({
      node,
      name: `slug`,
      value: slug,
    });

    // example: react
    createNodeField({
      node,
      name: `currentPage`,
      value: currentPage,
    });
  }
};

// Method that creates the pages for our website
exports.createPages = ({ actions, graphql }) => {
  const { createRedirect, createPage } = actions;

  return graphql(`
    {
      allMdx {
        edges {
          node {
            fields {
              slug
              currentPage
            }
          }
        }
      }
    }
  `).then(result => {
    result.data.allMdx.edges.forEach(({ node }) => {
      const slug = node.fields.slug;
      const currentPage = node.fields.currentPage;
      let currentPath = slug.slice(0, slug.lastIndexOf(currentPage));
      createPage({
        path: currentPath,
        component: path.resolve(`./src/templates/page.js`),
        context: {
          slug,
          currentPage,
        },
      });
    });
  });
};

exports.onCreateWebpackConfig = ({ actions, getConfig, stage, loaders }) => {
  actions.setWebpackConfig({
    module: {
      rules: [
        {
          test: /\.js/,
          include: path.dirname(require.resolve('ansi-regex')),
          use: [loaders.js()],
        },
        {
          test: /\.md$/,
          loaders: ['html-loader', 'markdown-loader'],
        },
        {
          test: /\.html$/,
          loader: 'html-loader',
          options: {
            minimize: false,
          },
        },
      ],
    },
  });
};

exports.onPostBuild = () => {
  let src;
  try {
    src = path.resolve(path.dirname(require.resolve('carbon-icons')), 'svg');
  } catch (err) {
    console.error('Error locating the icons directory', err.stack);
    return;
  }
  const dst = path.resolve(__dirname, 'public/assets/icons');
  return copy(src, dst);
};
