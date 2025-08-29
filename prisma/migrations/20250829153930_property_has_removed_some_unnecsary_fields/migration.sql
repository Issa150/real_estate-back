/*
  Warnings:

  - You are about to drop the column `status` on the `property` table. All the data in the column will be lost.
  - You are about to drop the column `title` on the `property` table. All the data in the column will be lost.
  - You are about to drop the column `type` on the `property` table. All the data in the column will be lost.
  - You are about to alter the column `price` on the `property` table. The data in that column could be lost. The data in that column will be cast from `Int` to `Double`.
  - You are about to alter the column `area` on the `property` table. The data in that column could be lost. The data in that column will be cast from `Int` to `Double`.

*/
-- AlterTable
ALTER TABLE `property` DROP COLUMN `status`,
    DROP COLUMN `title`,
    DROP COLUMN `type`,
    ADD COLUMN `isAvailable` BOOLEAN NULL DEFAULT true,
    MODIFY `price` DOUBLE NOT NULL,
    MODIFY `area` DOUBLE NOT NULL;
