const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const swaggerUi = require('swagger-ui-express');
const YAML = require('yamljs');
const jokesRoutes = require('./routes/jokes');

const app = express();
app.use(cors());
app.use(bodyParser.json());

const swaggerDocument = YAML.load('./public/openapi.yaml');
app.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

app.use('/api', jokesRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`🚀 Server running at http://localhost:${PORT}`);
  console.log(`📘 Swagger Docs at http://localhost:${PORT}/docs`);
});
