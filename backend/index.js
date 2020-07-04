const express = require('express');
const app = express();
// const router = express.Router();

const PORT = process.env.PORT || 5000;

app.get('/',(req,res) => {
    res.send("Hii from node_authentications...");
});

app.listen(PORT, () => console.log(`Server is listening at port no ${PORT}`));