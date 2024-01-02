"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const app_module_1 = require("./app.module");
const common_1 = require("@nestjs/common");
const fs = require("fs");
async function bootstrap() {
    const httpsOptions = {
        key: fs.readFileSync('./secrets/cert.key'),
        cert: fs.readFileSync('./secrets/cert.crt'),
    };
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    app.enableCors();
    app.useGlobalPipes(new common_1.ValidationPipe());
    await app.listen(3333);
}
bootstrap();
//# sourceMappingURL=main.js.map