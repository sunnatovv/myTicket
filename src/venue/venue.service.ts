import { Injectable } from "@nestjs/common";
import { CreateVenueDto } from "./dto/create-venue.dto";
import { UpdateVenueDto } from "./dto/update-venue.dto";
import { InjectModel } from "@nestjs/sequelize";
import { Venue } from "./models/venue.model";
import { FileService } from "../file/file.service";

@Injectable()
export class VenueService {
  constructor(
    @InjectModel(Venue) private venueRepo: typeof Venue,
    private readonly fileService: FileService
  ) {}

  async create(createVenueDto: CreateVenueDto, image: any) {
    try {
      const fileName = await this.fileService.saveFile(image);
      const venue = await this.venueRepo.create({
        ...createVenueDto,
        image: fileName,
      });
      return venue;
    } catch (error) {
      // Handle error appropriately (e.g., log, throw custom error)
      throw new Error(`Failed to create venue: ${error.message}`);
    }
  }

  async findAll() {
    try {
      return await this.venueRepo.findAll({ include: { all: true } });
    } catch (error) {
      throw new Error(`Failed to find venues: ${error.message}`);
    }
  }

  async findOne(id: number) {
    try {
      return await this.venueRepo.findByPk(id);
    } catch (error) {
      throw new Error(`Failed to find venue with id ${id}: ${error.message}`);
    }
  }

  async update(id: number, updateVenueDto: UpdateVenueDto) {
    try {
      const [updatedRows] = await this.venueRepo.update(updateVenueDto, {
        where: { id },
        returning: true,
      });
      if (updatedRows === 0) {
        throw new Error(`Venue with id ${id} not found`);
      }
      return updatedRows[0];
    } catch (error) {
      throw new Error(`Failed to update venue with id ${id}: ${error.message}`);
    }
  }

  async remove(id: number) {
    try {
      const deletedRows = await this.venueRepo.destroy({ where: { id } });
      if (deletedRows === 0) {
        throw new Error(`Venue with id ${id} not found`);
      }
      return deletedRows;
    } catch (error) {
      throw new Error(`Failed to remove venue with id ${id}: ${error.message}`);
    }
  }
}
