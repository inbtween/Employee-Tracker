const mysql = require("mysql");

const connection = mysql.createConnection({
  host: "localhost",

  // Your port; if not 3006
  port: 3006,

  // Your username
  user: "root",

  // Be sure to update with your own MySQL password!
  password: "painting",
  database: "employee_db",
});

const readRole = () => {
  console.log("Selecting all roles...\n");
  connection.query("SELECT * FROM role", (err, res) => {
    if (err) throw err;
    // Log all results of the SELECT statement
    console.log(res);
    connection.end();
  });
};

const deleteRole = () => {
  console.log("Deleting all roles...\n");
  connection.query(
    "DELETE FROM role WHERE ?",
    {
      title: "Manager",
    },
    (err, res) => {
      if (err) throw err;
      console.log(`${res.affectedRows} role deleted!\n`);
      // Call readRole AFTER the DELETE completes
      readRole();
    }
  );
};

const updateRole = () => {
  console.log("Updating manager and dept id...\n");
  const query = connection.query(
    "UPDATE Role SET ? WHERE ?",
    [
      {
        department_id: 100,
      },
      {
        title: "Manager",
      },
    ],
    (err, res) => {
      if (err) throw err;
      console.log(`${res.affectedRows} Role updated!\n`);
      // Call deleteRole AFTER the UPDATE completes
      deleteRole();
    }
  );

  // logs the actual query being run
  console.log(query.sql);
};

const createRole = () => {
  console.log("Inserting a new role...\n");
  const query = connection.query(
    "INSERT INTO role SET ?",
    {
      title: "Manager",
      salary: 3.0,
      department_id: 50,
    },
    (err, res) => {
      if (err) throw err;
      console.log(`${res.affectedRows} Role inserted!\n`);
      // Call updateRole AFTER the INSERT completes
      updateRole();
    }
  );

  // logs the actual query being run
  console.log(query.sql);
};

// Connect to the DB
connection.connect((err) => {
  if (err) throw err;
  console.log(`connected as id ${connection.threadId}\n`);
  createRole();
});
