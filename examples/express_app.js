const express = require('express');
const { InteractionType, InteractionResponseType, verifyKeyMiddleware } = require('../dist');
const PORT = process.env.PORT || 5000

const app = express();

app.post('/interactions', verifyKeyMiddleware("38fcfd13604c251410c8d31f3bf06a9bc78fb50b012a99ff35717ed16d81b465"), (req, res) => {
  const interaction = req.body;
  if (interaction.type === InteractionType.APPLICATION_COMMAND) {
    res.send({
      type: InteractionResponseType.CHANNEL_MESSAGE_WITH_SOURCE,
      data: {
        content: 'Hello world',
      },
    });
  }
});

app.listen(PORT, () => {
  console.log('Example app listening at ' + PORT);
});
