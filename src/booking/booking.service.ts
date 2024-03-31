import { Injectable } from "@nestjs/common";
import { CreateBookingDto } from "./dto/create-booking.dto";
import { UpdateBookingDto } from "./dto/update-booking.dto";
import { InjectModel } from "@nestjs/sequelize";
import { Booking } from "./models/booking.entity";

@Injectable()
export class BookingService {
  constructor(@InjectModel(Booking) private bookingRepo: typeof Booking) {}
  create(createBookingDto: CreateBookingDto) {
    return this.bookingRepo.create(createBookingDto);
  }

  findAll() {
    return this.bookingRepo.findAll();
  }

  findOne(id: number) {
    return this.bookingRepo.findOne({ where: { id } });
  }

  async update(id: number, updateBookingDto: UpdateBookingDto) {
    const update = await this.bookingRepo.update(updateBookingDto, {
      where: { id },
      returning: true,
    });

    return update[1][0];
  }

  remove(id: number) {
    return this.bookingRepo.destroy({ where: { id } });
  }
}
