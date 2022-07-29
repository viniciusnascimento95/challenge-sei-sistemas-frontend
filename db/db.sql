-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema mydb
-- -----------------------------------------------------
DROP SCHEMA IF EXISTS `dev` ;

-- -----------------------------------------------------
-- Schema mydb
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `dev` DEFAULT CHARACTER SET utf8 ;
USE `dev` ;

-- -----------------------------------------------------
-- Table `mydb`.`tb_Conta`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `dev`.`tb_Conta` ;

CREATE TABLE IF NOT EXISTS `dev`.`tb_Conta` (
  `id` INT NOT NULL,
  `nome` VARCHAR(255) NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `mydb`.`tb_Orcamentos`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `dev`.`tb_Orcamentos` ;

CREATE TABLE IF NOT EXISTS `dev`.`tb_Orcamentos` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `vlr_orcado` DECIMAL NULL,
  `vlr_real` FLOAT NULL,
  `id_Conta` INT NOT NULL,
  PRIMARY KEY (`id`),
  INDEX `fk_tb_Orcamentos_tb_Conta_idx` (`id_Conta` ASC) VISIBLE,
  CONSTRAINT `fk_tb_Orcamentos_tb_Conta`
    FOREIGN KEY (`id_Conta`)
    REFERENCES `dev`.`tb_Conta` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;

