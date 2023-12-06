-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema mydb
-- -----------------------------------------------------
-- -----------------------------------------------------
-- Schema spark
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Table `Person`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `Person` ;

CREATE TABLE IF NOT EXISTS `Person` (
  `party_id` INT NOT NULL AUTO_INCREMENT,
  `last_name` VARCHAR(40) NOT NULL,
  `first_name` VARCHAR(40) NOT NULL,
  `middle_name` VARCHAR(40) NULL,
  `suffix` VARCHAR(40) NULL,
  `personal_title` VARCHAR(40) NULL,
  PRIMARY KEY (`party_id`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `Role_type`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `Role_type` ;

CREATE TABLE IF NOT EXISTS `Role_type` (
  `role_type_id` INT NOT NULL AUTO_INCREMENT,
  `description` VARCHAR(255) NOT NULL,
  PRIMARY KEY (`role_type_id`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `Login`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `Login` ;

CREATE TABLE IF NOT EXISTS `Login` (
  `login_id` INT NOT NULL AUTO_INCREMENT,
  `role_type_id` INT NOT NULL,
  `party_id` INT NOT NULL,
  `userName` VARCHAR(40) NOT NULL,
  `password` VARCHAR(40) NOT NULL,
  `isActive` TINYINT NOT NULL DEFAULT 1,
  PRIMARY KEY (`login_id`, `role_type_id`),
  INDEX `fk_login_role_type1_idx` (`role_type_id` ASC) VISIBLE,
  CONSTRAINT `fk_login_person1`
    FOREIGN KEY (`party_id`)
    REFERENCES `Person` (`party_id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_login_role_type1`
    FOREIGN KEY (`role_type_id`)
    REFERENCES `Role_type` (`role_type_id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB
COMMENT = '		';


-- -----------------------------------------------------
-- Table `Course`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `Course` ;

CREATE TABLE IF NOT EXISTS `Course` (
  `course_id` INT NOT NULL,
  `title` VARCHAR(40) NOT NULL,
  `description` VARCHAR(255) NOT NULL,
  PRIMARY KEY (`course_id`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `Teacher`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `Teacher` ;

CREATE TABLE IF NOT EXISTS `Teacher` (
  `teacher_id` INT NOT NULL,
  `email_address` VARCHAR(40) NULL,
  `phone_number` VARCHAR(40) NULL,
  PRIMARY KEY (`teacher_id`),
  INDEX `fk_teacher_person1_idx` (`teacher_id` ASC) VISIBLE,
  CONSTRAINT `fk_teacher_person1`
    FOREIGN KEY (`teacher_id`)
    REFERENCES `Person` (`party_id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `Class`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `Class` ;

CREATE TABLE IF NOT EXISTS `Class` (
  `class_id` INT NOT NULL,
  `course_id` INT NOT NULL,
  `teacher_id` INT NULL,
  `begin_dt` DATE NOT NULL,
  `end_dt` DATE NOT NULL,
  `start_time` DATE NOT NULL,
  `end_time` DATE NOT NULL,
  PRIMARY KEY (`class_id`),
  INDEX `fk_class_course1_idx` (`course_id` ASC) VISIBLE,
  INDEX `fk_class_teacher1_idx` (`teacher_id` ASC) VISIBLE,
  CONSTRAINT `fk_class_course1`
    FOREIGN KEY (`course_id`)
    REFERENCES `Course` (`course_id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_class_teacher1`
    FOREIGN KEY (`teacher_id`)
    REFERENCES `Teacher` (`teacher_id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
