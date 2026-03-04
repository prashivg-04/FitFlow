/*
  Warnings:

  - You are about to drop the column `assignedAt` on the `WorkoutAssignment` table. All the data in the column will be lost.
  - You are about to drop the `WorkoutAssignmentExcercise` table. If the table is not empty, all the data it contains will be lost.
  - A unique constraint covering the columns `[memberId,assignedDate]` on the table `WorkoutAssignment` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `assignedDate` to the `WorkoutAssignment` table without a default value. This is not possible if the table is not empty.
  - Added the required column `dayName` to the `WorkoutAssignment` table without a default value. This is not possible if the table is not empty.
  - Added the required column `isRestDay` to the `WorkoutAssignment` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "WorkoutAssignmentExcercise" DROP CONSTRAINT "WorkoutAssignmentExcercise_assignmentId_fkey";

-- DropIndex
DROP INDEX "WorkoutAssignment_memberId_programDayId_key";

-- AlterTable
ALTER TABLE "WorkoutAssignment" DROP COLUMN "assignedAt",
ADD COLUMN     "assignedDate" TIMESTAMP(3) NOT NULL,
ADD COLUMN     "dayName" TEXT NOT NULL,
ADD COLUMN     "isRestDay" BOOLEAN NOT NULL;

-- DropTable
DROP TABLE "WorkoutAssignmentExcercise";

-- CreateTable
CREATE TABLE "WorkoutAssignmentExercise" (
    "id" TEXT NOT NULL,
    "assignmentId" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "sets" INTEGER NOT NULL,
    "reps" TEXT NOT NULL,
    "restSeconds" INTEGER NOT NULL,
    "notes" TEXT,
    "orderIndex" INTEGER NOT NULL,

    CONSTRAINT "WorkoutAssignmentExercise_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "WorkoutAssignmentExercise_assignmentId_orderIndex_key" ON "WorkoutAssignmentExercise"("assignmentId", "orderIndex");

-- CreateIndex
CREATE UNIQUE INDEX "WorkoutAssignment_memberId_assignedDate_key" ON "WorkoutAssignment"("memberId", "assignedDate");

-- AddForeignKey
ALTER TABLE "WorkoutAssignmentExercise" ADD CONSTRAINT "WorkoutAssignmentExercise_assignmentId_fkey" FOREIGN KEY ("assignmentId") REFERENCES "WorkoutAssignment"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
