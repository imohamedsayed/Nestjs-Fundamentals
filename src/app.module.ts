import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
@Module({
  imports: [UsersModule], // to add another modules like user, order, ...
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
