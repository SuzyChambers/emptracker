//import required things
// Be sure to create ENV file or none of this will work!!!
const inquirer = require("inquirer");
const mysql = require("mysql2");
const cTable = require("console.table");
//require env
require("dotenv").config();

// database connection that goes thru env user, pw, and name
const db = mysql.createConnection({
  host: "localhost",
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
});
//Questions prompt in terminal
const options = [
  {
    type: "list",
    message: "What would you like to do?",
    choices: [
      "View all departments",
      "View all roles",
      "View all employees",
      "Add a department",
      "Add a role",
      "Add an employee",
      "Update an employee role",
      "Exit the application",
    ],
    name: "options",
  },
];
//async function to get you to query db
//Think try/catch
//conditional logic within the try before you catch an error
async function init(){
try {
    inquirer
    //start the prompt
    //Write SQL syntax as the awaited promised result
    .prompt(options)
    .then(async (res)=> {
        if ('view all departments' === res.options) {
            const[results] = await db.promise.()query(`SELECT * FROM department`)
            console.table(results);
            return init();
        } else if ('view all roles' === res.options) {
            const [results] = await db.promise().query(`SELECT role.title, role.id, role.salary, department.name AS department_id
            FROM role
            JOIN department ON role.department_id = department_id;`);
            console.table(results);
            return init();

        })
        }
    
} catch (err) {
  console.log(err);
}
};
//initialize
init();
