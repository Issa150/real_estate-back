/*
  Warnings:

  - You are about to drop the column `managerId` on the `agency` table. All the data in the column will be lost.

*/
-- DropIndex
DROP INDEX `Agency_managerId_key` ON `agency`;

-- AlterTable
ALTER TABLE `agency` DROP COLUMN `managerId`;
