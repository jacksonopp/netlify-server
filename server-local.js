'use strict';

const app = require("./express/server");
const PORT = 3000;

app.listen(PORT, () => console.log(`app listening on port ${PORT}`))
