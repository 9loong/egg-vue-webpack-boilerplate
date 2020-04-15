'use strict';
module.exports = agent => {
  let newAgent = new Proxy(agent, {
    get:(obj, prop) => {
      if (prop === 'baseDir') {
        return agent.appDir;
      } else {
        return agent[prop];
      }
    }
  });
  require('egg-webpack/agent')(newAgent);
};
