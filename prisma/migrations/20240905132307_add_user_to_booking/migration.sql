/*
  Warnings:

  - A unique constraint covering the columns `[email]` on the table `User` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateTable
CREATE TABLE "Booking" (
    "id" SERIAL NOT NULL,
    "number_of_people" INTEGER NOT NULL,
    "booking_time" TIMESTAMP(3) NOT NULL,
    "booker_email" TEXT NOT NULL,
    "booker_phone" TEXT NOT NULL,
    "booker_first_name" TEXT NOT NULL,
    "booker_last_name" TEXT NOT NULL,
    "booker_occasion" TEXT,
    "booker_request" TEXT,
    "restaurant_id" INTEGER NOT NULL,
    "user_id" INTEGER NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Booking_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Table" (
    "id" SERIAL NOT NULL,
    "seats" INTEGER NOT NULL,
    "restaurant_id" INTEGER NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Table_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "BookingsOnTables" (
    "booking_id" INTEGER NOT NULL,
    "table_id" INTEGER NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "BookingsOnTables_pkey" PRIMARY KEY ("booking_id","table_id")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

-- AddForeignKey
ALTER TABLE "Booking" ADD CONSTRAINT "Booking_restaurant_id_fkey" FOREIGN KEY ("restaurant_id") REFERENCES "Restaurant"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Booking" ADD CONSTRAINT "Booking_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Table" ADD CONSTRAINT "Table_restaurant_id_fkey" FOREIGN KEY ("restaurant_id") REFERENCES "Restaurant"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "BookingsOnTables" ADD CONSTRAINT "BookingsOnTables_booking_id_fkey" FOREIGN KEY ("booking_id") REFERENCES "Booking"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "BookingsOnTables" ADD CONSTRAINT "BookingsOnTables_table_id_fkey" FOREIGN KEY ("table_id") REFERENCES "Table"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
