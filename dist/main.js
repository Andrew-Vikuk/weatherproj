"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const app_module_1 = require("./app.module");
const mongoose_1 = require("mongoose");
require('dotenv').config();
const db = process.env.DB_URL;
const port = process.env.PORT;
async function bootstrap() {
    console.log(process.env.DB_URL);
    console.log(process.env.TEXT);
    await mongoose_1.default.connect(db);
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    app.enableCors();
    await app.listen(port, () => console.log('SERVER STARTED ON PORT ' + port));
}
bootstrap();
//# sourceMappingURL=main.js.map