import { Injectable } from '@nestjs/common';
import { CreateVenuePhotoDto } from './dto/create-venue_photo.dto';
import { UpdateVenuePhotoDto } from './dto/update-venue_photo.dto';
import { VenuePhoto } from './models/venue_photo.model';
import { InjectModel } from '@nestjs/sequelize';

@Injectable()
export class VenuePhotoService {
  constructor(@InjectModel(VenuePhoto) private VenuePhotoRepo: typeof VenuePhoto) {}
  create(createVenuePhotoDto: CreateVenuePhotoDto) {
    return this.VenuePhotoRepo.create(createVenuePhotoDto)
  }

  findAll() {
    return this.VenuePhotoRepo.findAll()
  }

  findOne(id: number) {
    return `This action returns a #${id} venuePhoto`;
  }

  update(id: number, updateVenuePhotoDto: UpdateVenuePhotoDto) {
    return `This action updates a #${id} venuePhoto`;
  }

  remove(id: number) {
    return `This action removes a #${id} venuePhoto`;
  }
}
