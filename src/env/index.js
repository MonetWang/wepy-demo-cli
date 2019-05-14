exports.envConfig = require(`./env.${process.env.NODE_ENV ? process.env.NODE_ENV : 'dev'}`).envConfig;
