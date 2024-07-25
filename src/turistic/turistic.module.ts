import { Module } from '@nestjs/common';
import { TuristicService } from './turistic.service';
import { PrismaModule } from '../prisma/prisma.module';

@Module({
  imports: [PrismaModule],
  providers: [TuristicService],
  exports: [TuristicService],
})
export class TuristicModule {}
