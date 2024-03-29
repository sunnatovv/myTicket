import { Injectable } from "@nestjs/common";
import { CreateEventDto } from "./dto/create-event.dto";
import { UpdateEventDto } from "./dto/update-event.dto";
import { InjectModel } from "@nestjs/sequelize";
import { ApiTags, ApiOperation } from "@nestjs/swagger";
import { Event } from "./model/event.model";

@ApiTags("Event")
@Injectable()
export class EventService {
  constructor(@InjectModel(Event) private eventRepo: typeof Event) {}

  @ApiOperation({ summary: "Create a new event" })
  async create(createEventDto: CreateEventDto) {
    return this.eventRepo.create(createEventDto);
  }

  @ApiOperation({ summary: "Retrieve all events" })
  async findAll() {
    return this.eventRepo.findAll({ include: { all: true } });
  }

  @ApiOperation({ summary: "Retrieve an event by ID" })
  async findOne(id: number) {
    return this.eventRepo.findByPk(id);
  }

  @ApiOperation({ summary: "Update an event" })
  async update(id: number, updateEventDto: UpdateEventDto) {
    const event = await this.eventRepo.update(updateEventDto, {
      where: { id },
      returning: true,
    });
    return event[1][0];
  }

  @ApiOperation({ summary: "Remove an event by ID" })
  async remove(id: number) {
    const eventRows = await this.eventRepo.destroy({ where: { id } });
    if (eventRows == 0) return "Not found";
    return eventRows;
  }
}
