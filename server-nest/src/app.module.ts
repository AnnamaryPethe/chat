import { Module } from '@nestjs/common';
import {EventsModule } from './events/events.module';
import {RegisterModule} from './Register/register.module';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
  MongooseModule.forRoot(
      ('mongodb+srv://test:pIw3MXPMqJ2gblyq@chat-qnd1q.gcp.mongodb.net/test?retryWrites=true&w=majority'),
  ),
  EventsModule, RegisterModule],
})
export class AppModule {}
