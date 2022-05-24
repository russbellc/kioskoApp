-- CreateTable
CREATE TABLE `Producto` (
    `prod_id` INTEGER NOT NULL AUTO_INCREMENT,
    `prod_nombre` VARCHAR(191) NOT NULL,
    `prod_precio` DOUBLE NOT NULL,
    `prod_imagen` VARCHAR(191) NOT NULL,
    `prod_categoria` INTEGER NOT NULL,

    PRIMARY KEY (`prod_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Categoria` (
    `cat_id` INTEGER NOT NULL AUTO_INCREMENT,
    `cat_nombre` VARCHAR(191) NOT NULL,
    `cat_icono` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`cat_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Producto` ADD CONSTRAINT `Producto_prod_categoria_fkey` FOREIGN KEY (`prod_categoria`) REFERENCES `Categoria`(`cat_id`) ON DELETE RESTRICT ON UPDATE CASCADE;
