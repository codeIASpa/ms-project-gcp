-- CreateTable
CREATE TABLE "Turistic" (
    "id" SERIAL NOT NULL,
    "title" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "header" TEXT NOT NULL,
    "image" TEXT NOT NULL,
    "things_to_do" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Turistic_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Attraction" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "turisticId" INTEGER NOT NULL,

    CONSTRAINT "Attraction_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE INDEX "Attraction_turisticId_idx" ON "Attraction"("turisticId");

-- AddForeignKey
ALTER TABLE "Attraction" ADD CONSTRAINT "Attraction_turisticId_fkey" FOREIGN KEY ("turisticId") REFERENCES "Turistic"("id") ON DELETE CASCADE ON UPDATE CASCADE;
