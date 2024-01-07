import { Module } from '@nestjs/common';
import { CsvToJsonController } from './csv-to-json.controller';
import { CsvToJsonService } from './csv-to-json.service';

@Module({
  controllers: [CsvToJsonController],
  providers: [CsvToJsonService],
})
export class CsvToJsonModule {}
