DROP TABLE IF EXISTS Auth;

CREATE TABLE Auth (
  id SERIAL,
  username VARCHAR(500) NULL DEFAULT NULL,
  PRIMARY KEY (id)
);

-- ---
-- INITIALIZE SERIALIZATION
-- ---

SELECT setval(pg_get_serial_sequence('Auth', 'id'), coalesce(max(id)+1, 1), false) FROM Auth;

INSERT INTO Auth(id, username)
VALUES (1, 'test_user');



-- ---
-- Globals
-- ---

-- SET SQL_MODE="NO_AUTO_VALUE_ON_ZERO";
-- SET FOREIGN_KEY_CHECKS=0;

-- ---
-- Table 'Events'
--
-- ---

DROP TABLE IF EXISTS `Events`;

CREATE TABLE `Events` (
  `id` INTEGER NULL AUTO_INCREMENT DEFAULT NULL,
  `gateway_id` INTEGER NULL DEFAULT NULL,
  `driver_id` INTEGER NULL DEFAULT NULL,
  `ext_cam` VARCHAR NULL DEFAULT NULL,
  `int_cam` VARCHAR NULL DEFAULT NULL,
  `acceleration` MEDIUMTEXT NULL DEFAULT NULL,
  `incident_loc` MEDIUMTEXT NULL DEFAULT NULL,
  `tags` MEDIUMTEXT NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
);

-- ---
-- Table Properties
-- ---

-- ALTER TABLE `Events` ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

-- ---
-- Test Data
-- ---

-- INSERT INTO `Events` (`id`,`gateway_id`,`driver_id`,`ext_cam`,`int_cam`,`acceleration`,`incident_loc`,`tags`) VALUES
-- ('','','','','','','','');