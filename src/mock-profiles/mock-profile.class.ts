import { ApiProperty, ApiPropertyOptional } from "@nestjs/swagger";

export class MockProfile {
    @ApiProperty({ type: String })
    id: string;
    @ApiProperty({ type: String })
    firstName: string;
    @ApiProperty({ type: String })
    lastName: string;
    @ApiProperty({ type: String, default: "Coder" })
    skill: string;
    @ApiPropertyOptional({ type: String })
    phoneNumber?: string;
}