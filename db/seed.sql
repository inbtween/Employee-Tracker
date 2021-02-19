-- Creates new rows containing data in all named columns --
INSERT INTO department (id, name)
VALUES (101, "Art Dept");

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ("Ahmed", "Mohammed", 10, 1);

INSERT INTO role (id, title, salary, deptartment_id)
VALUES (10, "designer", 80,000, 101);

-- ////// --

INSERT INTO buyers (buyer_name) VALUES ('Kevon');
INSERT INTO buyers (buyer_name) VALUES ('Jane');

INSERT INTO pets (animal_breed, animal_name, price, buyer_id) VALUES ('wolf', 'Cassie', 195, 1);
INSERT INTO pets (animal_breed, animal_name, price, buyer_id) VALUES ('bear', 'Rachel', 745, 1);
INSERT INTO pets (animal_breed, animal_name, price, buyer_id) VALUES ('hawk', 'Tobias', 850, 2);
INSERT INTO pets (animal_breed, animal_name, price, buyer_id) VALUES ('gorilla', 'Marco', 400, 2);
INSERT INTO pets (animal_breed, animal_name, price, buyer_id) VALUES ('tiger', 'Jake', 300, 2);
