import { Body, Controller, Get, HttpException, HttpStatus, Param, Post, Query } from '@nestjs/common';
import { ApiCreatedResponse, ApiInternalServerErrorResponse, ApiOkResponse, ApiOperation, ApiProduces, ApiTags, ApiUnprocessableEntityResponse } from '@nestjs/swagger';
import { MockProfile } from './mock-profile.class';
import { MockProfilesService } from '../mock-profiles-service/mock-profiles-service';

@Controller('mock-profiles')
@ApiTags('mock-profiles')
export class MockProfilesController { 
    constructor(private readonly mockProfileService: MockProfilesService) {
        this.mockProfileService = mockProfileService;
    }

    @Get(':mockProfileID')
    @ApiProduces('application/json')
    @ApiOperation({ summary: 'Get Mock Profile with path.' })
    @ApiOkResponse({ description: 'Mock Profile retrieved successfully.' })
    @ApiUnprocessableEntityResponse({ description: 'Error when no ID is supplied' })
    @ApiInternalServerErrorResponse({ description: 'Something went wrong!' })
    getMockProfileByIDWithPath(@Param('mockProfileID') mockProfileID: string) {
        return this.getMockProfile(mockProfileID);
    }

    @Get()
    @ApiProduces('applicaiton/json')
    @ApiOperation({ summary: 'Get Mock Profile with query params.' })
    @ApiOkResponse({ description: 'Mock Profile retrieved successfully.' })
    @ApiInternalServerErrorResponse({ description: 'Something went wrong!' })
    getMockProfileByIDWithQueryString(@Query('mockProfileID') mockProfileID: string) {
        return this.getMockProfile(mockProfileID);
    }

    private async getMockProfile(mockProfileID){
        if(!mockProfileID || mockProfileID.trim() == ""){
            throw new HttpException({
                status: HttpStatus.UNPROCESSABLE_ENTITY,
                error: "Missing mockProfileID parameter!",
            }, HttpStatus.UNPROCESSABLE_ENTITY);
        }
        try {
            const result = await this.mockProfileService.getMockProfileByID(mockProfileID)
            if (!result.exists) {
                return 'No profile with mockID: ' + mockProfileID;
            }
            return result.data();
        }
        catch (error: any) {
            throw new HttpException({
                status: HttpStatus.INTERNAL_SERVER_ERROR,
                error: error,
            }, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @Post()
    @ApiProduces('applicaiton/json')
    @ApiOperation({ summary: 'Create a new Mock Profile' })
    @ApiCreatedResponse({ description: 'Mock Profile successfully created.', type: MockProfile })
    @ApiInternalServerErrorResponse({ description: 'Something went wrong!' })
    async createMockProfile(@Body() mockProfile: MockProfile, @Query('mockProfileID') mockProfileID: string) {
        const createDoc = await this.mockProfileService.createMockProfile(mockProfileID, mockProfile);
        return createDoc;
    }
}
