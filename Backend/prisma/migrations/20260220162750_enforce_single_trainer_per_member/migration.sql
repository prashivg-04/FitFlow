/*
  Warnings:

  - A unique constraint covering the columns `[memberId]` on the table `TrainerMember` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "TrainerMember_memberId_key" ON "TrainerMember"("memberId");
