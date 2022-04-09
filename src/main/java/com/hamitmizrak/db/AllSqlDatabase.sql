
-- create database
CREATE SCHEMA `springboot` DEFAULT CHARACTER SET utf8 COLLATE utf8_turkish_ci ;

-- databse chooise
use springboot;

-- Insert
INSERT INTO `springboot`.`admin` (`name`, `surname`) VALUES ('Hamit1', 'Mızrak1');


-- create table
CREATE TABLE `springboot`.`admin` (
`id` INT NOT NULL AUTO_INCREMENT,
`name` VARCHAR(150) NULL DEFAULT 'adi girilmedi',
`surname` VARCHAR(150) NULL DEFAULT 'soyadi girilmedi',
`created_date` TIMESTAMP NULL DEFAULT CURRENT_TIMESTAMP,
PRIMARY KEY (`id`));

