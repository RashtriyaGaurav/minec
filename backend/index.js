const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');

dotenv.config();

const app = express();
const port = process.env.PORT || 3001;

app.use(cors());
app.use(express.json());

app.post('/api/create-server', (req, res) => {
  const { serverName } = req.body;
  // Logic to create a new Minecraft server (placeholder)
  console.log(`Creating server: ${serverName}`);
  res.send({ message: `Server ${serverName} created successfully!` });
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
