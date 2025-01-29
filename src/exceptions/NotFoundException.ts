import { ErrorMessage } from "../types/ExceptionMessages";
import { AppException } from "./appException";
import { HttpStatus } from "@nestjs/common";

export class NotFoundException extends AppException {
  constructor(message = ErrorMessage.NOT_FOUND) {
    super({
      message,
      status: HttpStatus.NOT_FOUND,
    });
  }
}