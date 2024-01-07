import { Injectable } from '@nestjs/common';
import { parseCsvString } from '../common/utils/parse-csv-string';
import { CsvToJsonDto } from './dto/csv-to-json.dto';

@Injectable()
export class CsvToJsonService {
  async readFile(
    file: Express.Multer.File,
    body: CsvToJsonDto,
  ): Promise<unknown> {
    return parseCsvString(file.buffer.toString(), {
      headers: Boolean(body.headers),
      delimiter: body.delimiter,
    });
  }
}
