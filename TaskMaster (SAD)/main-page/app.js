document.getElementById("taskForm").addEventListener("submit", function(event) {
  event.preventDefault();
  
  const title = document.getElementById("title").value;
  const description = document.getElementById("description").value;
  const dueDate = document.getElementById("dueDate").value;
  const priority = document.getElementById("priority").value;
  const status = document.getElementById("status").value;

  if (title && description && dueDate && priority && status) {
    // Perform task addition logic here
    console.log("Task added successfully:");
    console.log("Title:", title);
    console.log("Description:", description);
    console.log("Due Date:", dueDate);
    console.log("Priority:", priority);
    console.log("Status:", status);

    // You can also reset the form after adding the task
    document.getElementById("taskForm").reset();
  } else {
    console.log("Please fill in all fields.");
  }
});
