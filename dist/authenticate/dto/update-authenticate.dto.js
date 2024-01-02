"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateAuthenticateDto = void 0;
const mapped_types_1 = require("@nestjs/mapped-types");
const create_authenticate_dto_1 = require("./create-authenticate.dto");
class UpdateAuthenticateDto extends (0, mapped_types_1.PartialType)(create_authenticate_dto_1.CreateAuthenticateDto) {
}
exports.UpdateAuthenticateDto = UpdateAuthenticateDto;
//# sourceMappingURL=update-authenticate.dto.js.map