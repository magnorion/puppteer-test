const express = require('express');
const app = express();

const bot = require('./src/controller/THWP');
const NUMERO_VEZES = 10; // Numero de vezes que o app vai rodar!!!
const timer = (Math.floor(Math.random() * (10 - 3) + 3) * 1000);
let counter = 0;

app.get('/', (req, res) => {
    for (let i = 0; i <= NUMERO_VEZES; i++) {
        setTimeout(async function () {
            await bot(timer);
            counter++;
            if (counter >= NUMERO_VEZES) {
                res.send('<h1> TERMINOU!!! </h1>');
            }
        }, NUMERO_VEZES * (i * 1000));
    }
});


const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`app rodando na porta ${PORT}`));
