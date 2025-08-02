function addWorkout() {
  let exercise = document.getElementById("exercise").value;
  let sets = document.getElementById("sets").value;
  let reps = document.getElementById("reps").value;
  let weight = document.getElementById("weight").value;

  let entry = `${exercise} - ${sets} sets x ${reps} reps @ ${weight}kg`;
  let listItem = document.createElement("li");
  listItem.textContent = entry;

  document.getElementById("workoutLog").appendChild(listItem);
}