import { Injectable } from "@nestjs/common";
import { CreateVenuePhotoDto } from "./dto/create-venue_photo.dto";
import { UpdateVenuePhotoDto } from "./dto/update-venue_photo.dto";
import { InjectModel } from "@nestjs/sequelize";
import { VenuePhoto } from "./models/venue_photo.model";

@Injectable()
export class VenuePhotoService {
  constructor(
    @InjectModel(VenuePhoto) private venuePhotoRepo: typeof VenuePhoto
  ) {}

  async create(createVenuePhotoDto: CreateVenuePhotoDto) {
    return this.venuePhotoRepo.create(createVenuePhotoDto);
  }

  async findAll() {
    return this.venuePhotoRepo.findAll({ include: { all: true } });
  }

  async findOne(id: number) {
    return this.venuePhotoRepo.findByPk(id);
  }

  async update(id: number, updateVenuePhotoDto: UpdateVenuePhotoDto) {
    const venuePhoto = await this.venuePhotoRepo.update(updateVenuePhotoDto, {
      where: { id },
      returning: true,
    });
    return venuePhoto[1][0];
  }

  async remove(id: number) {
    const venuePhotoRows = await this.venuePhotoRepo.destroy({ where: { id } });
    if (venuePhotoRows == 0) return "Not found";
    return venuePhotoRows;
  }
}
