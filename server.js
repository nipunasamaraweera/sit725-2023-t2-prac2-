var express = require("express");
const res = require("express/lib/response");
var app = express()
var port = process.env.port || 3000;

app.use(express.json());

app.get('/add', (req, res) => {
    const { num1, num2 } = req.query;
    if (!num1 || !num2) {
        return res.status(400).json({ error: 'Please provide both num1 and num2 parameters.' });
    }
    const result = parseFloat(num1) + parseFloat(num2);
    return res.json({ result });
});

app.post('/calculate', (req, res) => {
    const { operation, num1, num2 } = req.body;
    if (!operation || !num1 || !num2) {
        return res.status(400).json({ error: 'Please provide operation, num1, and num2 parameters.' });
    }
    let result;
    switch (operation) {
        case 'add':
            result = parseFloat(num1) + parseFloat(num2);
            break;
        case 'subtract':
            result = parseFloat(num1) - parseFloat(num2);
            break;
        case 'multiply':
            result = parseFloat(num1) * parseFloat(num2);
            break;
        case 'divide':
            result = parseFloat(num1) / parseFloat(num2);
            break;
        default:
            return res.status(400).json({ error: 'Invalid operation. Supported operations: add, subtract, multiply, divide.' });
    }
    return res.json({ result });
});

app.listen(port, () => {
    console.log(`App listening to http://localhost:${port}`);
});