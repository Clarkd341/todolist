// Début Gestion de la Liste des Tâches

let tasks = []; // Tableau pour stocker les tâches

document.addEventListener("DOMContentLoaded", function() {
  // Début Charger les tâches depuis le serveur JSON au démarrage
  const taskList = document.getElementById("taskList");

  fetch("http://localhost:3000/tasks")
    .then(response => response.json())
    .then(data => {
      tasks = data;
      tasks.forEach(task => displayTask(task)); // Afficher chaque tâche dans la liste
    });
  // Fin Charger les tâches depuis le serveur JSON au démarrage
}); 
// Fin Gestion de la Liste des Tâches

// Début Fonction pour ajouter une nouvelle tâche à la liste
function addTask() {
  const taskInput = document.getElementById("taskInput");
  const taskDate = document.getElementById("taskDate");
  const taskText = taskInput.value;
  const taskDueDate = taskDate.value;

  if (taskText === "" || taskDueDate === "") {
    return; // Ne rien faire si le champ de texte ou la date est vide
  }

  const newTask = { description: taskText, dueDate: taskDueDate, completed: false };
  tasks.push(newTask);

  displayTask(newTask);
  saveTasks();

  taskInput.value = "";
  taskDate.value = "";
}
 // Fin Fonction pour ajouter une nouvelle tâche à la liste

// Début Fonction pour afficher une tâche dans la liste
function displayTask(task) {
  const li = document.createElement("li");
  li.className = task.completed ? "completed" : ""; // Appliquer la classe completed si la tâche est terminée
  li.innerHTML = `${task.description} - Échéance : ${task.dueDate}`;

  // Case à cocher pour marquer la tâche comme terminée
  const checkbox = document.createElement("input");
  checkbox.type = "checkbox";
  checkbox.checked = task.completed;
  checkbox.onclick = function() {
    toggleTaskStatus(task, li);
  };

  const editButton = document.createElement("button");
  editButton.innerHTML = '<ion-icon name="pencil-outline" class="modify"></ion-icon>';
  editButton.onclick = function() {
    editTask(task, li);
  };

  const deleteButton = document.createElement("button");
  deleteButton.innerHTML = '<ion-icon name="trash-outline" class="delete"></ion-icon>';
  deleteButton.onclick = function() {
    deleteTask(task, li);
  };

  li.prepend(checkbox);
  li.appendChild(editButton);
  li.appendChild(deleteButton);
  document.getElementById("taskList").appendChild(li);
} 
// Fin Fonction pour afficher une tâche dans la liste

// Début Fonction pour changer le statut de la tâche
function toggleTaskStatus(task, li) {
  task.completed = !task.completed; 
  li.className = task.completed ? "completed" : "";
   // Appliquer ou retirer la classe terminer
  saveTasks();
} 
// Fin Fonction pour changer le statut de la tâche

// Début Fonction pour modifier une tâche existante
function editTask(task, li) {
  const newTaskText = prompt("Modifier la tâche :", task.description);
  const newTaskDate = prompt("Modifier la date d'échéance :", task.dueDate);

  if (newTaskText === null || newTaskText === "" || newTaskDate === null || newTaskDate === "") {
    return;
  }

  task.description = newTaskText;
  task.dueDate = newTaskDate;
  li.firstChild.textContent = `${task.description} - Échéance : ${task.dueDate}`;
  saveTasks();
} // Fin Fonction pour modifier une tâche existante

// Début Fonction pour supprimer une tâche de la liste
function deleteTask(task, li) {
  tasks = tasks.filter(t => t !== task);
  document.getElementById("taskList").removeChild(li);
  saveTasks();
}
 // Fin Fonction pour supprimer une tâche de la liste

// Début Fonction pour sauvegarder les tâches dans le serveur JSON
function saveTasks() {
  fetch("http://localhost:3000/tasks", {
    method: "PUT",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(tasks)
  });
} // Fin Fonction pour sauvegarder les tâches dans le serveur JSON

// Début Fonction pour filtrer les tâches par statut
function filterTasks(status) {
    const taskList = document.getElementById("taskList");
    taskList.innerHTML = "";
     // Efface toutes les tâches affichées
  
    tasks.forEach(task => {
      if (
        (status === "all") || 
        (status === "completed" && task.completed) ||
        (status === "active" && !task.completed)
      ) {
        displayTask(task); 
        // Affiche la tâche si elle correspond au filtre
      }
    });
  } // Fin Fonction pour filtrer les tâches par statut
  
  