import { PartialType } from "@nestjs/swagger";
import { CreateCartDto } from "./create-cart.dto";

export class UpdateCartDto extends PartialType(CreateCartDto) {
  ticketId?: number;
  customerId?: number;
  createdAt?: string;
  finishedAt?: string;
  statusId?: string;
}
