docker compose -f mysql.yml -p nodejs-sql up -d

CREATE TABLE Users (
id int NOT NULL AUTO_INCREMENT,
email varchar(255),
name varchar(255),
city varchar(255)
);

INSERT INTO Users VALUES (1, 'abc@gmail.com', 'abc', 'hanoi');

Nếu chạy bị lỗi: …there can be only one auto column and it must be defined as a key, sử
dụng câu lệnh bên dưới:

CREATE TABLE Users (
id int NOT NULL AUTO_INCREMENT,
email varchar(255),
name varchar(255),
city varchar(255),
primary key (id)
)
