const connection = require("./connection");

class DbAccess {
    // Keeping a reference to the connection on the class in case we need it later
    constructor(connection) {
      this.connection = connection;
};
    getAllDepartments() {
    return this.connection.promise().query(
      "SELECT department.id, department.name FROM department;"
    );
  }
    getAllRoles() {
    return this.connection.promise().query(
        "SELECT roles.id, roles.title, roles.salary FROM roles;"
    );
  }
    getAllEmployees() {
    return this.connection.promise().query(
        "SELECT employees.id, employees.name_first, employees.name_last, employees.roles_id, employees.manager_id FROM employees;"
    );
  }
   addNewEmployee(employee) {
    return this.connection.promise().query(
        "INSERT INTO employees SET ?  ;", employee
    );
  }
   addNewDepartment(department) {
    return this.connection.promise().query(
        "INSERT INTO department SET ? ;", department
    )
   }
   addNewRole(role) {
    return this.connection.promise().query(
        "INSERT INTO roles SET ? ;", role
    )
   }
   updateEmployee(employees) {
    return this.connection.promise().query(
        "INSERT INTO employees SET ? ;", employees
    )
   }
};


module.exports = new DbAccess(connection);


