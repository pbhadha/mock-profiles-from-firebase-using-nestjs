import { Test, TestingModule } from '@nestjs/testing';
import { MockProfilesController } from './mock-profiles.controller';

describe('MockProfilesController', () => {
  let controller: MockProfilesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [MockProfilesController],
    }).compile();

    controller = module.get<MockProfilesController>(MockProfilesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
