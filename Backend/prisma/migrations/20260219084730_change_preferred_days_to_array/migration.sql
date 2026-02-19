/*
  Warnings:

  - The `preferredDays` column on the `Trainer` table would be dropped and recreated. This will lead to data loss if there is data in the column.

*/
-- AlterTable
ALTER TABLE "Trainer" DROP COLUMN "preferredDays",
ADD COLUMN     "preferredDays" TEXT[];
