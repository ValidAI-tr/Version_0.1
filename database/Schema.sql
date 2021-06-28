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