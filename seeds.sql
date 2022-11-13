USE employee_db;

INSERT INTO department (name)
VALUES
("Finance"),
("Operations"),
("Marketing"),
("Production");

INSERT INTO roles (title, salary, department_id)
VALUES
("Operations manager", 80000.00, 2),
("Marketing manager", 80000.00, 3),
("Production coordinator", 60000.00, 4),
("Line handler", 45000.00, 4),
("Social Media rep", 50000.00, 3),
("Accounting specialist", 90000.00, 1),
("CFO", 140000.00, 1),
("COO", 140000.00, 2),
("Engineer", 85000.00, 4),
("Administrator", 75000.00, 2);

INSERT INTO employees (name_first, name_last, roles_id, manager_id)
VALUES
('Jim', 'Lond', 7, NULL),
('Sara', 'Michelle', 2, 1),
('Brim', 'Jones', 3, 1),
('Jessica', 'Frank', 4, 1),
('Jayden', 'Barnsdale', 1, 1),
('Amy', 'Winterhouse', 8, 1),
('Home', 'West', 9, 1),
('Anthony',' Gorland', 6,1),
('Karl', 'Kilatchnikova', 5, 1),
('Smiley', 'Danster', 4, 1),
('Priyana', 'Donalin', 4, 1),
('Ashley', 'Greem', 4, 1);



