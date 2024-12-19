const fs = require("fs");

// write to a file //

// Callback version
fs.writeFile("test.txt", "Hello World", (err) => {
  if (err) throw err;
  console.log("The file has been saved!");
});

// Promise version
fs.writeFile("test2.txt", "Hello World 2")
  .then(() => console.log("The file has been saved!"))
  .catch((err) => console.error(err));