import { Injectable } from "@nestjs/common";
import { CreateVenueDto } from "./dto/create-venue.dto";
import { UpdateVenueDto } from "./dto/update-venue.dto";
import { InjectModel } from "@nestjs/sequelize";
import { Venue } from "./models/venue.model";

@Injectable()
export class VenueService {
  constructor(@InjectModel(Venue) private VenueRepo: typeof Venue) {}
  create(createVenueDto: CreateVenueDto) {
    return this.VenueRepo.create(createVenueDto);
  }

  findAll() {
    return this.VenueRepo.findAll({ include: { all: true } });
  }

  findOne(id: number) {
    return this.VenueRepo.findOne({ where: { id } });
  }

  async update(id: number, updateVenueDto: UpdateVenueDto) {
    const updateVanue = await this.VenueRepo.update(updateVenueDto, {
      where: { id },
      returning: true,
    });
    return updateVanue[1][0];
  }

  remove(id: number) {
    return this.VenueRepo.destroy({ where: { id } });
  }
}
