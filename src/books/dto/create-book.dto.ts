import { IsBoolean, IsNotEmpty, IsNumber, IsString } from "class-validator";

export class CreateBookDto {
    @IsNotEmpty()
    @IsNumber()
    id: number

    @IsNotEmpty()
    @IsString()
    title: string

    @IsNotEmpty()
    @IsString()
    author: string

    @IsNotEmpty()
    @IsString()
    isbn: string

    @IsNotEmpty()
    @IsNumber()
    publishYear: number

    @IsNotEmpty()
    @IsBoolean()
    reserved: boolean
}
