-- DropForeignKey
ALTER TABLE `request` DROP FOREIGN KEY `Request_agentId_fkey`;

-- DropForeignKey
ALTER TABLE `request` DROP FOREIGN KEY `Request_clientId_fkey`;

-- DropIndex
DROP INDEX `Request_agentId_fkey` ON `request`;

-- DropIndex
DROP INDEX `Request_clientId_fkey` ON `request`;

-- AddForeignKey
ALTER TABLE `Request` ADD CONSTRAINT `Request_clientId_fkey` FOREIGN KEY (`clientId`) REFERENCES `User`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Request` ADD CONSTRAINT `Request_agentId_fkey` FOREIGN KEY (`agentId`) REFERENCES `User`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;
