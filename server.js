const { prompt } = require("inquirer");
const db = require("./db/dbaccess");
require("console.table");
mainMenu();

const inputARR = [];
function mainMenu() {
  prompt([
    {
      type: "list",
      name: "action",
      message: "what would you like to do?",
      choices: [
        {
          name: "view all departments",
          value: "view_departments",
        },
        {
          name: "quit",
          value: "quit",
        },
        {
          name: "view all roles",
          value: "view_roles",
        },
        {
          name: "view all employees",
          value: "view_employees",
        },
        {
          name: "add a New department",
          value: "new_department",
        },
        {
          name: "add a role",
          value: "new_role",
        },
        {
          name: "add a New employee",
          value: "new_employee",
        },
        {
            name: "Edit Employee details",
            value: 'edit_employee'
        }
      ],
    },
  ]).then((response) => {
    switch (response.action) {
      case "view_departments":
        show_departments();
        break;
      case "view_roles":
        show_roles();
        break;
      case "view_employees":
        show_employees();
        break;
      case "new_department":
        add_department();
        break;
      case "new_role":
        add_role();
        break;
      case "new_employee":
        add_employee();
        break;
      case "edit_employee":
        update_employee();
        break;  
      default:
        quit();
    }
  });
}

// function to update an employee

async function update_employee(){
    const [roles]= await db.getAllRoles();
    const [employee] = await db.getAllEmployees();
    const employees = await prompt([
        {
            name: "name_first",
            message: 'which employee would you like to update?',
            type: 'list',
            choices: employee.map(({name_first, name_last, id})=>({name:name_first+' '+name_last, value:id}))
        },
        {
            name: "roles_id",
            message: "what is the new role?",
            type: 'list',
            choices: roles.map(({title, id})=>({name:title, value:id}))
        },
    ]);
    const [rows] = await db.updateEmployee(employees);
  console.log('Employee updated!')
  mainMenu();

}

// function to add employee

async function add_employee() {
    const [roles]= await db.getAllRoles();
    const [managers]= await db.getAllEmployees();
  const employee = await prompt([
    {
      name: "name_first",
      message: "What is the new employees first name?",
      type: "input",
    },
    {
      name: "name_last",
      message: "What is the last name?",
      type: "input",
    },
    {
      name: "roles_id",
      message: "what is this employees role?",
      type: "list",
      choices: roles.map(({title, id})=>({name:title, value:id}))
    },
    {
      name: "manager_id",
      message: "who is the employee manager?",
      type: "list",
      choices: managers.map(({name_first, name_last, id})=>({name:name_first+' '+name_last, value:id}))
    },
  ]);
  const [rows] = await db.addNewEmployee(employee);
  console.log('New Employee Added!')
  mainMenu();
}

// function to add a department

async function add_department() {
    const department = await prompt([
    {
      name: "name",
      message: "what is the new department name?",
      type: "input",
    },
  ]);
  const [rows] = await db.addNewDepartment(department);
  console.log('New Department Added!');
 mainMenu();
}

// function to add role

async function add_role() {
    const [departments]= await db.getAllDepartments();
    const role = await prompt([
    {
      name: "title",
      message: "what is the new role you want to add?",
      type: "input",
    },
    {
      name: "salary",
      message: "what is the salary for this position?",
      type: "input",
    },
    {
      name: "department_id",
      message: "what department does this role belong to?",
      type: "list",
      choices: departments.map(({name, id})=>({name:name, value:id}))
    },
  ]);
  const [rows] = await db.addNewRole(role);
  console.log('New Role has been Added!')
  mainMenu();
}

// function to view all employees

function show_employees() {
  db.getAllEmployees()
    .then(([rows]) => {
      let employees = rows;
      console.table(employees);
    })
    .then(() => mainMenu());
}

// function to view all roles

function show_roles() {
  db.getAllRoles()
    .then(([rows]) => {
      let roles = rows;
      console.table(roles);
    })
    .then(() => mainMenu());
}

// function to view all roles

function show_departments() {
  db.getAllDepartments()
    .then(([rows]) => {
      let departments = rows;
      console.table(departments);
    })
    .then(() => mainMenu());
}

// Return to main menu
function quit() {
  process.exit();
}
