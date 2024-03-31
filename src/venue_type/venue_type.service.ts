import { Injectable } from '@nestjs/common';
import { CreateVenueTypeDto } from './dto/create-venue_type.dto';
import { UpdateVenueTypeDto } from './dto/update-venue_type.dto';
import { InjectModel } from '@nestjs/sequelize';
import { VenueType } from './models/venue_type.model';

@Injectable()
export class VenueTypeService {
  constructor(@InjectModel(VenueType)private VenueTypeRepo:typeof VenueType){}
  create(createVenueTypeDto: CreateVenueTypeDto) {
    return this.VenueTypeRepo.create(createVenueTypeDto)
  }

  findAll() {
    return this.VenueTypeRepo.findAll()
  }

  findOne(id: number) {
    return this.VenueTypeRepo.findOne({where:{id}})
  }

  update(id: number, updateVenueTypeDto: UpdateVenueTypeDto) {
    return `This action updates a #${id} venueType`;
  }

  remove(id: number) {
    return `This action removes a #${id} venueType`;
  }
}
