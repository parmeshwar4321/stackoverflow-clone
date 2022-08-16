import { IsString } from 'class-validator';

class CreatePostDto {
  @IsString()
  public description: string;

  @IsString()
  public question: string;
}

export default CreatePostDto;
