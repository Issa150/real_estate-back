import { IsOptional, IsString, IsPhoneNumber, MaxLength, MinLength, IsBoolean, IsEmail } from 'class-validator';
// import { ApiPropertyOptional } from '@nestjs/swagger'; // Optional, for Swagger documentation

export class CreateUserDto {
    @IsString()
    @MinLength(12)
    @IsEmail()
    email: string
    //   @ApiPropertyOptional()
    @IsOptional()
    @IsString()
    @MinLength(2)
    @MaxLength(50)
    firstname?: string;

    //   @ApiPropertyOptional()
    @IsOptional()
    @IsString()
    @MinLength(2)
    @MaxLength(50)
    lastname?: string;


    //   @ApiPropertyOptional()
    @IsOptional()
    @IsString()
    @IsPhoneNumber('FR') // Example: Validate as a French phone number
    phone?: string;

    //   @ApiPropertyOptional()
    @IsOptional()
    @IsString() // Assuming profilePicture is a string path
    profilePicture?: string;

}