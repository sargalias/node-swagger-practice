import express from 'express';
import { initialize } from 'express-openapi';
import v1WorldsService from './api-v1/services/worldsService.js';
import v1ApiDoc from './api-v1/api-doc.js';

const app = express();
const PORT = 3000;

initialize({
  app,
  // NOTE: If using yaml you can provide a path relative to process.cwd() e.g.
  // apiDoc: './api-v1/api-doc.yml',
  apiDoc: v1ApiDoc,
  dependencies: {
    worldsService: v1WorldsService,
  },
  paths: './src/api-v1/paths',
});

app.listen(PORT, (error) => {
  if (!error)
    console.log(
      'Server is Successfully Running and App is listening on port ' + PORT,
    );
  else console.log("Error occurred, server can't start", error);
});
