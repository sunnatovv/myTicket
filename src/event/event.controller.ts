import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from "@nestjs/common";
import {
  ApiTags,
  ApiOperation,
  ApiResponse,
  ApiParam,
  ApiBody,
} from "@nestjs/swagger";
import { EventService } from "./event.service";
import { CreateEventDto } from "./dto/create-event.dto";
import { UpdateEventDto } from "./dto/update-event.dto";

@ApiTags("event")
@Controller("event")
export class EventController {
  constructor(private readonly eventService: EventService) {}

  @ApiOperation({ summary: "Create an event" })
  @ApiBody({ type: CreateEventDto })
  @Post()
  async create(@Body() createEventDto: CreateEventDto) {
    return this.eventService.create(createEventDto);
  }

  @ApiOperation({ summary: "Get all events" })
  @Get()
  async findAll() {
    return this.eventService.findAll();
  }

  @ApiOperation({ summary: "Get an event by ID" })
  @ApiParam({ name: "id", type: "string", description: "Event ID" })
  @Get(":id")
  async findOne(@Param("id") id: string) {
    return this.eventService.findOne(+id);
  }

  @ApiOperation({ summary: "Update an event" })
  @ApiParam({ name: "id", type: "string", description: "Event ID" })
  @ApiBody({ type: UpdateEventDto })
  @Patch(":id")
  async update(
    @Param("id") id: string,
    @Body() updateEventDto: UpdateEventDto
  ) {
    return this.eventService.update(+id, updateEventDto);
  }

  @ApiOperation({ summary: "Delete an event" })
  @ApiParam({ name: "id", type: "string", description: "Event ID" })
  @Delete(":id")
  async remove(@Param('id') id: string) {
    return this.eventService.remove(+id);
  }
}
