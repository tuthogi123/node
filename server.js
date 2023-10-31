const express = require('express');
const app = express();
const todoRoutes = require('./routes/todoRoutes');

app.use('/todos', todoRoutes);

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
