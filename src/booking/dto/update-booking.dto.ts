import { PartialType } from "@nestjs/swagger";
import { CreateBookingDto } from "./create-booking.dto";

export class UpdateBookingDto extends PartialType(CreateBookingDto) {
  cartId?: number;
  createdAt?: string;
  finished?: string;
  paymentMethodId?: number;
  deliveryMethodId?: number;
  discountCouponId?: number;
  statusId?: number;
}
