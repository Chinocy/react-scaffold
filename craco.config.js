const CracoLessPlugin = require('craco-less');
//import themeVariables from './src/theme/variables';
const themeVariables = require('./src/theme/variables');
const { getThemeVariables } = require('antd/dist/theme');
module.exports = {
  plugins: [
    {
      plugin: CracoLessPlugin,
      options: {
        lessLoaderOptions: {
          lessOptions: {
            modifyVars: themeVariables,
            javascriptEnabled: true,
          },
        },
      },
    },
  ],
};
