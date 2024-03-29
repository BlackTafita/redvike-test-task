import {
  Body,
  Controller,
  FileTypeValidator,
  ParseFilePipe,
  Post,
  UploadedFile,
  UseGuards,
  UseInterceptors,
} from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { ApiBearerAuth, ApiConsumes, ApiTags } from '@nestjs/swagger';
import { AuthGuard } from '../auth/auth.guard';
import { CsvToJsonService } from './csv-to-json.service';
import { CsvToJsonDto } from './dto/csv-to-json.dto';

@Controller('csv-to-json')
@ApiTags('csv-to-json')
@ApiBearerAuth()
@UseGuards(AuthGuard)
export class CsvToJsonController {
  constructor(private readonly csvToJsonService: CsvToJsonService) {}

  @UseInterceptors(FileInterceptor('file'))
  @ApiConsumes('multipart/form-data')
  @Post()
  async csvFileToJson(
    @UploadedFile(
      new ParseFilePipe({
        validators: [new FileTypeValidator({ fileType: 'csv' })],
      }),
    )
    file: Express.Multer.File,
    @Body() body: CsvToJsonDto,
  ): Promise<unknown> {
    console.log(body);
    return this.csvToJsonService.readFile(file, body);
  }
}
