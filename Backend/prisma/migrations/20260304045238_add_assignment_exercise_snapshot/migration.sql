-- CreateTable
CREATE TABLE "WorkoutAssignmentExcercise" (
    "id" TEXT NOT NULL,
    "assignmentId" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "sets" INTEGER NOT NULL,
    "reps" TEXT NOT NULL,
    "restSeconds" INTEGER NOT NULL,
    "notes" TEXT,
    "orderIndex" INTEGER NOT NULL,

    CONSTRAINT "WorkoutAssignmentExcercise_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "WorkoutAssignmentExcercise_assignmentId_orderIndex_key" ON "WorkoutAssignmentExcercise"("assignmentId", "orderIndex");

-- AddForeignKey
ALTER TABLE "WorkoutAssignmentExcercise" ADD CONSTRAINT "WorkoutAssignmentExcercise_assignmentId_fkey" FOREIGN KEY ("assignmentId") REFERENCES "WorkoutAssignment"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
