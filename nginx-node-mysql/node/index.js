const express = require("express");
const app = express();
const port = 3000;
const config = {
  host: 'db',
  user: 'root',
  password: 'root',
  database: 'nodedb'
};
const mysql = require('mysql');

app.get('/', (req, res) => {
  const connection = mysql.createConnection(config);

  connection.query(`INSERT INTO people(name) values('Wesley'), ('Natan'), ('Messi')`, (insertError) => {
    if (insertError) {
      console.error('Erro ao inserir:', insertError);
      return res.status(500).send('Erro ao inserir dados');
    }

    connection.query(`SELECT name FROM people`, (selectError, results) => {
      if (selectError) {
        console.error('Erro ao consultar:', selectError);
        return res.status(500).send('Erro ao consultar dados');
      }

      const list = results.map(person => `<li>${person.name}</li>`).join('');

      res.send(`
        <h1>Full Cycle Rocks!</h1>
        <ul>
          ${list}
        </ul>
      `);

      connection.end();
    });
  });
});

app.listen(port, () => {
  console.log(`Rodando na porta ${port}`);
});