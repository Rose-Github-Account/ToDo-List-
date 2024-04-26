#! /usr/bin/env node

import inquirer from "inquirer";
import chalk from "chalk";

let todoList :string[] =[];
let conditions =true;

console.log("\n \tWelcome to code with Nida - To-Do-List Aplication.\n");

let main = async () => {
    while(conditions){
        let options = await inquirer.prompt([
            {
                name:"choice",
                type:"list",
                message:"Select an option you want to do:",
                choices:["Add Task","Delete Task","Update Task","View Todo-List","Exit"],
            }
        ]);
        if(options.choice === "Add Task"){
            await addTask()
        }
        else if (options.choice === "Delete Task"){
            await deletetask();
        }
        else if(options.choice === "Update Task"){
            await updateTask();
        }
        else if(options.choice === "View Todo-List"){
            await viewTask();
        }
        else if(options.choice === "Exit"){
            conditions = false;
        }
    }
}
// Function to add new task to the List.
let addTask =async () => {
    let newTask =await inquirer.prompt([
        {
            name:"task",
            type:"input",
            message:"Enter your new task :",
        }
    ]);
    todoList.push(newTask.task);
    console.log(`\n ${newTask.task} task added successfuly in Todo-List.`);
}
// Function to view all Todo-List tasks.
let viewTask =async () => {
    console.log("\n Your Todo-List: \n");
    todoList.forEach((task, index) => {
        console.log(`${index + 1}: ${task}`)
    })
}
// Function to delete a task from list.
let deletetask =async () => {
    await viewTask();
    let taskIndex =await inquirer.prompt([
        {
            name:"index",
            type:"number",
            message:"Enter the 'index no.' of the task you want to delete :",
        }
    ]);
    let deletedtask=todoList.splice(taskIndex.index - 1, 1);
    console.log(`\n ${deletedtask} This task has been deleted successfully from your Todo-List.`);
}
// Function to update task from list.
let updateTask = async () => {
    await viewTask();
    let update_task_index = await inquirer.prompt([
        {
            name:"index",
            type:"number",
            message:"Enter the 'index no' of the task you want to update :"
        },
        {
            name:"new_task",
            type:"input",
            message:"now Enter new task name :" 
        }
    ]);
    todoList[update_task_index.index - 1] = update_task_index.new_task;
    console.log(`\n Task of index no. ${update_task_index.index - 1} updated successfully [for updated list Check option:"View todo-List"]`);
}

main();