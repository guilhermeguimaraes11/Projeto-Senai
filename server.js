// Importar a instância do Express configurada em index.js
const app = require("./index");

// Inicia o servidor na porta 5000, neste caso a Api será
// acessível em http://localhost:5000/projeto_reserva_senai/health/
app.listen(5000);