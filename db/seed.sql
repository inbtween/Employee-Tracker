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
("Andrea", "Montague", 1, NULL),
("Dennis", "Brooks", 1, NULL),
("Gordon", "Robinson", 1, NULL),
("Julie", "Anderson", 1, 8),
("Jeremy", "Cark", 1, NULL);


-- -- -- ////// --
-- INSERT INTO department (name) VALUES ('Art Dept', 1);
-- INSERT INTO department (name) VALUES ('Creative Services', 2);
-- INSERT INTO department (name) VALUES ('On-Air Design', 3);
-- INSERT INTO department (name) VALUES ('Off-Air Design', 4);

-- INSERT INTO parties (party_name, party_type, party_cost, client_id) VALUES ('Everybody Loves Raymond', 'tv', 500, 1);
-- INSERT INTO parties (party_name, party_type, party_cost, client_id) VALUES ('Big Bang Theory', 'tv', 900, 1);
-- INSERT INTO parties (party_name, party_type, party_cost, client_id) VALUES ('Top Gun', 'movie', 200, 2);
-- INSERT INTO parties (party_name, party_type, party_cost, client_id) VALUES ('Whiskey', 'grown-up', 300, 2);
-- INSERT INTO parties (party_name, party_type, party_cost, client_id) VALUES ('Cigar', 'grown-up', 250, 3);
