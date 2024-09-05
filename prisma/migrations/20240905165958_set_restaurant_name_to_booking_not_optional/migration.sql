/*
  Warnings:

  - Made the column `restaurant_name` on table `Booking` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "Booking" ALTER COLUMN "restaurant_name" SET NOT NULL;
