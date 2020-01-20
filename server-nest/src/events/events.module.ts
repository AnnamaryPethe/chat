import { Module} from "@nestjs/common";
import { EventsGateway } from './events.gateway';

import { UsersService } from './users.service';

@Module({
    providers: [EventsGateway, UsersService]
})
export class EventsModule {}
