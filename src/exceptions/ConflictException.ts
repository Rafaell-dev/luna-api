
import { AppException } from "./appException";
import { HttpStatus } from "@nestjs/common";

export class ConflictException extends AppException {
  constructor(message: string) {
    super({
      message,
      status: HttpStatus.CONFLICT,
    });
  }
}