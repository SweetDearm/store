CREATE TABLE xz_cart (
  id int(11) NOT NULL,
  img_url` varchar(25) DEFAULT NULL,
  price decimal(10,2) DEFAULT NULL,
  title varchar(255) DEFAULT NULL,
  count int(11) DEFAULT NULL,
  uid` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
INSERT INTO xz_cart (id,img_url,price,title,count,uid) VALUES
(1, '011.jpg', '100.00', '罗技鼠标', 1, 1),
(8, '012.jpg', '110.00', '内存条', 1, 1),
(10, '011.jpg', '102.00', '罗技鼠标4', 1, 1),
(12, '012.jpg', '110.00', '内存条', 1, 1),
(13, '011.jpg', '101.00', '罗技鼠标3', 1, 1),
(14, '011.jpg', '102.00', '罗技鼠标4', 1, 1),
(15, '011.jpg', '100.00', '罗技鼠标', 1, 1);
ALTER TABLE xz_cart
  ADD PRIMARY KEY (id);
ALTER TABLE xz_cart
  MODIFY id int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=16;
COMMIT;
