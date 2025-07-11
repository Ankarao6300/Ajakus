// app.js
document.addEventListener("DOMContentLoaded", () => {
    UIController.renderEmployees(EmployeeService.getAll());
    EventHandlers.init();
  });
