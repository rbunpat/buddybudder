-- CreateTable
CREATE TABLE "buddyRequest" (
    "id" SERIAL NOT NULL,
    "classId" INTEGER NOT NULL,
    "requestText" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "buddyRequest_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "buddyRequest_classId_key" ON "buddyRequest"("classId");
