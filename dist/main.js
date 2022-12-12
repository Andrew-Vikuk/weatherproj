"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const app_module_1 = require("./app.module");
const mongoose_1 = require("mongoose");
require('dotenv').config();
const db2 = process.env.DBURL;
const DB = 'mongodb+srv://WeatherUser:gordon123@weather.geysrty.mongodb.net/Users?retryWrites=true&w=majority';
const PORT = 5000;
async function bootstrap() {
    console.log(process.env.DBURL);
    await mongoose_1.default.connect(db2);
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    app.enableCors();
    await app.listen(PORT, () => console.log('SERVER STARTED ON PORT ' + PORT));
}
bootstrap();
//# sourceMappingURL=main.js.map