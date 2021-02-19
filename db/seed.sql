-- Creates new rows containing data in all named columns --

INSERT INTO department 
(name)
VALUES ("Art Dept"),
("Creative Services"),
("On-Air Design"),
("Off Air Design");

INSERT INTO role 
(title, salary, deptartment_id)
VALUES 
("Designer", 80000),
("Animator", 100000),
("Art Director", 140000),
("Creative Director", 180000),
("Producer", 140000),
("Executive Producer", 200000);

INSERT INTO employee 
(first_name, last_name, role_id, manager_id)
VALUES
("Ahmed", "Mohammed", 1, NULL),
("David", "Smith", 1, 2),
("Erin", "Jones", 1, NULL),
("Brad", "Davidson", 1, 4),
("Ben", "Johnson", 1, NULL),
("Anna", "Thompson", 1, NULL),
("Beth", "Johansen", 1, NULL),
("Andrea", "Montague", 1, 6),
("Dennis", "Brooks", 1, NULL),
("Gordon", "Robinson", 1, NULL),
("Julie", "Anderson", 1, 8),
("Jeremy", "Cark", 1, NULL);



-- -- ////// --

-- INSERT INTO buyers (buyer_name) VALUES ('Kevon');
-- INSERT INTO buyers (buyer_name) VALUES ('Jane');

-- INSERT INTO pets (animal_breed, animal_name, price, buyer_id) VALUES ('wolf', 'Cassie', 195, 1);
-- INSERT INTO pets (animal_breed, animal_name, price, buyer_id) VALUES ('bear', 'Rachel', 745, 1);
-- INSERT INTO pets (animal_breed, animal_name, price, buyer_id) VALUES ('hawk', 'Tobias', 850, 2);
-- INSERT INTO pets (animal_breed, animal_name, price, buyer_id) VALUES ('gorilla', 'Marco', 400, 2);
-- INSERT INTO pets (animal_breed, animal_name, price, buyer_id) VALUES ('tiger', 'Jake', 300, 2);
