// Arrays to keep track of each task's state
// const taskTitles = [];
// const taskComplete = [];
// // create a new description array and modify the newTask function
// const taskDescriptions = [];


// // Create a new task by adding to the arrays
// // A new task will be created as incomplete
// // removed arrays since it can get messy, use objects instead!
// function newTask(title, description) {
//   const task = {
//     title: title,
//     description: description,
//     complete: false
//   };
//   return task;
// }


// // REFACTOR!!!

// // prints out the provided task
// function logTasksState(task) {
//   console.log(`${task.title} has ${task.complete ? " " : " not "}been completed`);
// }

// // marks the provided tasks as completed
// function completeTask(task) {
//   task.complete = true;
// }

// // DRIVER CODE BELOW!!

// // Note we are putting our tasks into the newTask object!!
// const task1 = newTask("Clean Cat Littler", "Take all the 💩 out of the litter box");
// const task2 = newTask("Do Laundry", "😨");
// // Put it into 1 tasks array
// const tasks = [task1, task2];


// logTasksState(task1); // Clean Cat Litter has not been completed
// completeTask(task1); // update is as simple as passing the function
// logTasksState(task1); // Clean Cat litter has been completed


// // Make sure the tasks are there/working!
// console.log(tasks);

// These two functions are looking better as well. We can just pass a task to the function rather than an index.

// // Mark a task as complete by setting the task's status in the `taskComplete` array to `true`
// function completeTask(taskIndex) {
//   taskComplete[taskIndex] = true;
// }

// // Print the state of a task to the console in a nice readable way
// function logTaskState(taskIndex) {
//   const title = taskTitles[taskIndex];
//   const complete = taskComplete[taskIndex];
//   console.log(`${title} has${complete ? " " : " not "}been completed`);
// }

// // DRIVER CODE BELOW

// newTask("Clean Cat Litter"); // task 0
// newTask("Do Laundry"); // task 1

// logTaskState(0); // Clean Cat Litter has not been completed
// completeTask(0);
// logTaskState(0); // Clean Cat Litter has been completed


// Turn the 2 task functions into task object methods, like so:

// eslint-disable-next-line func-style
function newTask(title, description) {
  const task = {
    title: title,
    description: description,
    complete: false,

    logState: function() {
      console.log(`${this.title} has${this.complete ? " " : " not "}been completed`);
    },

    markCompleted: function() {
      this.complete = true;
    },
    changeDescription: function() {
      this.description = "✅";
    }
  };
  return task;
}

// DRIVER CODE CHANGES BELOW

const task1 = newTask("Clean Cat Litter", "Take all the 💩 out of the litter box");
const task2 = newTask("Do Laundry", "😨");
const tasks = [task1, task2];

// task1.logState(); // Clean Cat Litter has not been completed
// task1.markCompleted();
// task1.logState(); // Clean Cat Litter has been completed

// console.log(tasks);
// Acessing properties or methods of our tasks is as simple as writing code like this:

// Done! A Quick Retrospective
// We are now programming in an object oriented way. We are using objects to group state and logic in order to keep the code more organized. Now everything associated to a task has been encapsulated inside the task object.
// This also makes the code very readable. Accessing properties or methods of our tasks is as simple as writing code like this:

// TASK 2 TEST!!!c

task2.logState(); // Do Laundry has not been completed
console.log(task2); // Before: description '😨', complete: false
task2.title; // Not sure what this does!?!
console.log(`----------------------------------------------------`);
task2.markCompleted(); // Function executes and changes value to true
task2.changeDescription(); // Function executes and change value to '✅`
task2.logState();
// console.log(task2.title, task2.description, task2.complete);
console.log(task2); // After: description ''✅`, complete: true
