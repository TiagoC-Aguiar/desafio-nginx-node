import express from 'express';
import axios from 'axios';
import mysql from 'mysql';
import app from './server.js';

// const app = express();
const PORT = 3000;

const config = {
  host: 'db',
  user: 'root',
  password: 'password',
  database: 'nodedb',
};

app.get('/', (req, res) => {
  insertPeopleName(res);
});

app.listen(PORT, () => {
  console.log('STARTED AT ' + PORT);
});

async function getPersonName() {
  const RANDOM = Math.floor(Math.random() * 10);
  const response = await axios.get('https://swapi.dev/api/people');
  const personName = response.data.results;
  return personName[RANDOM].name;
}

async function insertPeopleName(res: any) {
  const name = await getPersonName();
  const connection = mysql.createConnection(config);
  const sql = `INSERT INTO people(name) values('${name}')`;

  connection.query(sql);
  console.log(`${name} inserido no banco!`);
  getPeople(res, connection);
}

function getPeople(res: any, connection: any) {
  const sql = `SELECT id, name FROM people`;

  connection.query(sql, (error: any, results: any, fields: any) => {
    if (error) {
      throw error
    };

    let table = '<table>';
    table += '<tr><th>#</th><th>Name</th></tr>';
    for (let people of results) {
      table += `<tr><td>${people.id}</td><td>${people.name}</td></tr>`;
    }

    table += '</table>';
    res.send('<h1>Full Cycle Rocks!</h1>' + table);
  });
  connection.end();
}
