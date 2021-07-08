DROP TABLE IF EXISTS Auth;

CREATE TABLE Auth (
  id SERIAL,
  username VARCHAR(500) NULL DEFAULT NULL,
  PRIMARY KEY (id)
);
-- ---
-- Globals
-- ---

-- SET SQL_MODE="NO_AUTO_VALUE_ON_ZERO";
-- SET FOREIGN_KEY_CHECKS=0;

-- ---
-- Table 'Events'
--
-- ---

DROP TABLE IF EXISTS Events;

CREATE TABLE Events (
  id SERIAL,
  gateway_id INTEGER NULL DEFAULT NULL,
  driver_id INTEGER NULL DEFAULT NULL,
  ext_cam VARCHAR(500) NULL DEFAULT NULL,
  int_cam VARCHAR(500) NULL DEFAULT NULL,
  acceleration VARCHAR(500) NULL DEFAULT NULL,
  incident_loc VARCHAR(500) NULL DEFAULT NULL,
  tags VARCHAR(500) NULL DEFAULT NULL,
  PRIMARY KEY (id)
);

-- ---
-- INITIALIZE SERIALIZATION
-- ---

SELECT setval(pg_get_serial_sequence('Auth', 'id'), coalesce(max(id)+1, 1), false) FROM Auth;
SELECT setval(pg_get_serial_sequence('Events', 'id'), coalesce(max(id)+1, 1), false) FROM Events;

-- ---
-- Table Properties
-- ---

-- ALTER TABLE `Events` ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

-- ---
-- Test Data
-- ---

INSERT INTO Events(id, gateway_id, driver_id, ext_cam, int_cam, acceleration, incident_loc, tags)
VALUES (1001, 1,1,'http://www.imgurl.com/12345','http://www.imgurl.com/678910','{"speed_limit": 35, "acceleration": "[35,36,36,36,38,40,40,40,40,38,34,32,31,30,30,30,31,33,34,35,37]"}','51.3309754, 19.3744004','Harsh Turn');

INSERT INTO Auth(id, username)
VALUES (1, 'test_user');

-- ---
-- Seed Data
-- ---
COPY Events FROM '/Users/curtiscastro/Desktop/ValidAI.tr/repos/Version_0.1/database/Events.csv' DELIMITER ',' CSV HEADER;