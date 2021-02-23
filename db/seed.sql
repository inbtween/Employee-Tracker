-- Creates new rows containing data in all named columns --

INSERT INTO department 
(name)
VALUES (1, "Art Dept"),
(2, "Creative Services"),
(3, "On-Air Design"),
(4, "Off Air Design");

INSERT INTO role 
(title, salary, deptartment_id)
VALUES 
(1, "Designer", 80000),
(2, "Animator", 100000),
(3, "Art Director", 140000),
(4, "Creative Director", 180000),
(5, "Producer", 140000),
(6, "Executive Producer", 200000);

INSERT INTO employee 
(first_name, last_name, role_id, manager_id)
VALUES
(2, "Ahmed", "Mohammed", 1, NULL),
(5, "David", "Smith", 1, 2),
(7, "Erin", "Jones", 1, NULL),
(9, "Brad", "Davidson", 1, 4),
(13, "Ben", "Johnson", 1, NULL),
(11, "Anna", "Thompson", 1, NULL),
(15, "Beth", "Johansen", 1, NULL),
(1, "Andrea", "Montague", 1, NULL),
(3, "Dennis", "Brooks", 1, NULL),
(8, "Gordon", "Robinson", 1, NULL),
(10, "Julie", "Anderson", 1, 8),
(12, "Jeremy", "Cark", 1, NULL);


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
