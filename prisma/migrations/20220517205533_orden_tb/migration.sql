-- CreateTable
CREATE TABLE `Orden` (
    `ord_id` INTEGER NOT NULL AUTO_INCREMENT,
    `ord_nombre` VARCHAR(191) NOT NULL,
    `ord_fecha` VARCHAR(191) NOT NULL,
    `ord_total` DOUBLE NOT NULL,
    `ord_pedido` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`ord_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
