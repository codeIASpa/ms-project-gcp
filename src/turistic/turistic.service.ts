import { Injectable } from '@nestjs/common';

import { Turistic } from '@prisma/client';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class TuristicService {
  constructor(private readonly prisma: PrismaService) {}

  async createTuristic(data: {
    title: string;
    description: string;
    header: string;
    image: string;
    things_to_do: string;
    attractions: string[];
  }): Promise<Turistic> {
    return this.prisma.turistic.create({
      data: {
        title: data.title,
        description: data.description,
        header: data.header,
        image: data.image,
        thingsToDo: data.things_to_do,
        attractions: {
          create: data.attractions.map((attraction) => ({ name: attraction })),
        },
      },
      include: {
        attractions: true,
      },
    });
  }
}
