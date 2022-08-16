import { IsString, IsBoolean ,isNumber} from "class-validator";

class CreateCommentDto {
  @IsString()
  public text: string;
  @IsBoolean()
  public isNumber: boolean;
  @IsBoolean()
  public vote: number;
}

export default CreateCommentDto;
