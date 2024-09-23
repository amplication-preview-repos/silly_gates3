/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { ArgsType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { SudokuGameWhereInput } from "./SudokuGameWhereInput";
import { IsOptional, ValidateNested, IsInt } from "class-validator";
import { Type } from "class-transformer";
import { SudokuGameOrderByInput } from "./SudokuGameOrderByInput";

@ArgsType()
class SudokuGameFindManyArgs {
  @ApiProperty({
    required: false,
    type: () => SudokuGameWhereInput,
  })
  @IsOptional()
  @ValidateNested()
  @Field(() => SudokuGameWhereInput, { nullable: true })
  @Type(() => SudokuGameWhereInput)
  where?: SudokuGameWhereInput;

  @ApiProperty({
    required: false,
    type: [SudokuGameOrderByInput],
  })
  @IsOptional()
  @ValidateNested({ each: true })
  @Field(() => [SudokuGameOrderByInput], { nullable: true })
  @Type(() => SudokuGameOrderByInput)
  orderBy?: Array<SudokuGameOrderByInput>;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsOptional()
  @IsInt()
  @Field(() => Number, { nullable: true })
  @Type(() => Number)
  skip?: number;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsOptional()
  @IsInt()
  @Field(() => Number, { nullable: true })
  @Type(() => Number)
  take?: number;
}

export { SudokuGameFindManyArgs as SudokuGameFindManyArgs };