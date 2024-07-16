var students = [
  { 
    name: "Sandhya",
    id : '22p31a4223',
    branch: 'AIML'
  },
  { 
    name: "Sirisha",
    id : '22p31a0445',
    branch: 'ECE'
  },
  { 
    name: "Preethi",
    id : '22p31a4215',
    branch: 'AIML'
  },
  { 
    name: "Chahana",
    id : '22p31a0461',
    branch: 'ECE'
  },
  { 
    name: "Poojitha",
    id : '22p31a4216',
    branch:'Statistics'
  },
  { 
    name: "Supriya",
    id : '22p31a0402',
    branch:"ECE"
  }
];

var tableAdded = false;
// Function to create and display the table
function createTable() {
  // Get the table container
  var tableContainer = document.getElementById('tableContainer');
  // Create table element
  var table = document.createElement('table');
  table.classList.add('styled-table'); 
  // Create table headers
  var headers = ['Name', 'ID', 'Branch', 'Action'];
  var headerRow = table.insertRow();
  headers.forEach(function(headerText) {
    var header = document.createElement('th');
    var textNode = document.createTextNode(headerText);
    header.appendChild(textNode);
    headerRow.appendChild(header);
  });
  // Populate data rows
  students.forEach(function(student, index) {
    var row = table.insertRow();
    var nameCell = row.insertCell();
    var idCell = row.insertCell();
    var branchCell = row.insertCell();
    var actionCell = row.insertCell();
    nameCell.textContent = student.name;
    idCell.textContent = student.id;
    branchCell.textContent = student.branch;
    // Create Edit button
    var editButton = document.createElement('button');
    editButton.textContent = 'Edit';
    editButton.addEventListener('click', function() {
      editStudent(index); 
    });
    actionCell.appendChild(editButton);
    // Create Delete button
    var deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';
    deleteButton.addEventListener('click', function() {
      deleteStudent(index);
    });
    actionCell.appendChild(deleteButton);
  });
  // Append table to container
  tableContainer.innerHTML = ''; // Clear 
  tableContainer.appendChild(table);
  tableAdded = true;
}
// Function to edit student data
function editStudent(index) {
  var newName = prompt('Enter new name:');
  var newId = prompt('Enter new ID:');
  var newBranch = prompt('Enter new branch:');
  if (newName && newId && newBranch) {
    students[index].name = newName;
    students[index].id = newId;
    students[index].branch = newBranch;
    createTable(); // Re-create table after editing
  }
}
// Function to delete student data
function deleteStudent(index) {
  students.splice(index, 1);
  createTable(); 
}
// Function to add a new student
function addStudent() {
  var newName, newId, newBranch;
  // Check if table has been added initially
  if (tableAdded) {
    newName = prompt('Enter name:');
    newId = prompt('Enter ID:');
    newBranch = prompt('Enter branch:');
  } else {
    // Initial click, just create the table
    createTable();
    return;
  }
  if (newName && newId && newBranch) {
    students.push({
      name: newName,
      id: newId,
      branch: newBranch
    });
    createTable(); // Re-create table after adding new student
  }
}
// Event listener for button click to add new student
document.getElementById('addButton').addEventListener('click', addStudent);
