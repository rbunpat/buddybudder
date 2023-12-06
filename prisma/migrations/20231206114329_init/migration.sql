/*
  Warnings:

  - A unique constraint covering the columns `[classId]` on the table `buddyRequest` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "buddyRequest_classId_key" ON "buddyRequest"("classId");
