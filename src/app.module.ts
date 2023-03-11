import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MockProfilesController } from './mock-profiles/mock-profiles.controller';
import { FirebaseService } from './firebase/firebase.service';
import { MockProfilesService } from './mock-profiles-service/mock-profiles-service';

@Module({
  imports: [],
  controllers: [AppController, MockProfilesController],
  providers: [AppService, FirebaseService, MockProfilesService],
})
export class AppModule {}
