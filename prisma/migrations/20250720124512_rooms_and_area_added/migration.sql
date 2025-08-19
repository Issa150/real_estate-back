/*
  Warnings:

  - Added the required column `area` to the `Property` table without a default value. This is not possible if the table is not empty.
  - Added the required column `rooms` to the `Property` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `property` ADD COLUMN `area` INTEGER NOT NULL,
    ADD COLUMN `rooms` INTEGER NOT NULL;

-- AlterTable
ALTER TABLE `user` ADD COLUMN `profilePicture` VARCHAR(191) NULL;
