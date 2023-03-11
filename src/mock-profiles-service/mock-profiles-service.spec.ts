import { Test, TestingModule } from '@nestjs/testing';
import { MockProfilesService } from './mock-profiles-service';

describe('MockProfilesServiceService', () => {
  let service: MockProfilesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [MockProfilesService],
    }).compile();

    service = module.get<MockProfilesService>(MockProfilesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
