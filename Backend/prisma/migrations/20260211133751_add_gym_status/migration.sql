-- CreateEnum
CREATE TYPE "GymStatus" AS ENUM ('NONE', 'PENDING', 'ACTIVE');

-- AlterTable
ALTER TABLE "Member" ADD COLUMN     "gymStatus" "GymStatus" NOT NULL DEFAULT 'NONE';

-- AlterTable
ALTER TABLE "Trainer" ADD COLUMN     "gymStatus" "GymStatus" NOT NULL DEFAULT 'NONE';
