CREATE TABLE restaurants(
  id BIGSERIAL NOT NULL PRIMARY KEY,
  name VARCHAR(50) NOT NULL,
  location VARCHAR(255) NOT NULL,
  price_range INT NOT NULL check(price_range >= 1 and price_range <=5)
);

Insert into restaurants (name, location, price_range) values ('Panera', 'Markham, Ontario', 4);
Insert into restaurants (name, location, price_range) values ('Kelseys', 'Pickering, Ontario', 4);