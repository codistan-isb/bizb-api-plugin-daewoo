import { createRequire } from "module";

const require = createRequire(import.meta.url);
const pkg = require("../package.json");
import schemas from "./schemas/index.js";
import resolvers from "./resolvers/index.js";
import mutations from "./mutations/index.js";
import queries from "./queries/index.js";

/**
 * @summary Import and call this function to add this plugin to your API.
 * @param {Object} app The ReactionAPI instance
 * @returns {undefined}
 */

export default async function register(app) {
  console.log("registering plugin", pkg.label); 
  console.log("registering plugin", pkg.name);
  await app.registerPlugin({
    label: "Daewoo",
    name: "daewoo",
    version: pkg.version,
    graphQL: {
      resolvers,
      schemas,
    },
    mutations,
    queries,
  });
}
