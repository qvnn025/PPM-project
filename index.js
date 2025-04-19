const express = require('express');
const app = express();
// Imposta Pug come motore di template
app.set('view engine', 'pug');
app.set('views', './views');
// Definisci una route di esempio
app.get('/', (req, res) => {
  res.render('index', { title: 'Progetto Pug', message: 'Ciao, questo è un test con Pug!' });
});
// Avvia il server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server in esecuzione su http://localhost:${PORT}`);
});
