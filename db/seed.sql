--populate database
INSERT INTO department (name)
--Values youll be inserting into tables below
VALUES ("Engineering"),
        ("Communications"),
        ("Legal"),
        ("Accounting");
--Insert into: Department, role, and employee
-- role: title, salary, dept_id
INSERT INTO role (title, salary, department_id)
--random data to insert into db based on positioned values
VALUES ("Software Engineer", 150000, 1),
        ("Lead Engineer", 200000, 1),
        ("Communications Lead", 70000, 2),
        ("Communications Assistant", 40000, 2),
        ("Lawyer", 300000, 3),
        ("Paralegal", 200000, 3),
        ("Bookkeeper", 70000, 4),
        ("Controller", 100000, 4);

        --employee insert (first and last name, role and manager id's)
        INSERT INTO employee (first_name, last_name, role_id, manager_id)
        --random employee data
        VALUES ("Tony", "Thompson", 1, NULL),
        ("David", "Davidson", 3, NULL),
        ("Edwina", "Edwards",5, NULL),
        ("Zoe", "Zimby", 8, NULL),
        ("Martha", "Mathis", 2, NULL),   
		("Barbara", "Bobos", 4, NULL),
		("Ron", "Swanson", 6, NULL),
        ("Charlotte", "Little", 7, NULL);