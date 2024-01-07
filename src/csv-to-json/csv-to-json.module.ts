import { Module } from '@nestjs/common';
import { AuthModule } from '../auth/auth.module';
import { CsvToJsonController } from './csv-to-json.controller';
import { CsvToJsonService } from './csv-to-json.service';

@Module({
  imports: [AuthModule],
  controllers: [CsvToJsonController],
  providers: [CsvToJsonService],
})
export class CsvToJsonModule {}
