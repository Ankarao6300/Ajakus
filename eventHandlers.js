// eventHandlers.js
const EventHandlers = (() => {
    const form = document.getElementById("employee-form");
    const nameInput = form.querySelector("#firstName");
    const emailInput = form.querySelector("#email");
    const departmentInput = form.querySelector("#department");
    const roleInput = form.querySelector("#role");
  
    function handleFormSubmit(e) {
      e.preventDefault();
  
      const id = form.dataset.editing;
      const data = {
        firstName: nameInput.value.trim(),
        lastName: form.querySelector("#lastName").value.trim(),
        email: emailInput.value.trim(),
        department: departmentInput.value.trim(),
        role: roleInput.value.trim(),
        location: form.querySelector("#location").value.trim(),
        image: form.querySelector("#image").value.trim() || "https://via.placeholder.com/100"
      };
  
      // Basic validation
      if (!data.firstName || !data.lastName || !data.email || !Utils.isValidEmail(data.email)) {
        alert("Please fill all fields correctly.");
        return;
      }
  
      if (id) {
        EmployeeService.update(Number(id), data);
      } else {
        EmployeeService.add(data);
      }
  
      UIController.clearForm(form);
      UIController.renderEmployees(EmployeeService.getAll());
    }
  
    function handleCardActions(e) {
      const target = e.target;
      const id = Number(target.dataset.id);
  
      if (target.classList.contains("delete-btn")) {
        if (confirm("Are you sure you want to delete this employee?")) {
          EmployeeService.remove(id);
          UIController.renderEmployees(EmployeeService.getAll());
        }
      }
  
      if (target.classList.contains("edit-btn")) {
        const emp = EmployeeService.getById(id);
        if (emp) {
          form.querySelector("#firstName").value = emp.firstName;
          form.querySelector("#lastName").value = emp.lastName;
          form.querySelector("#email").value = emp.email;
          form.querySelector("#department").value = emp.department;
          form.querySelector("#role").value = emp.role;
          form.querySelector("#location").value = emp.location;
          form.querySelector("#image").value = emp.image;
          form.dataset.editing = emp.id;
          window.scrollTo({ top: 0, behavior: "smooth" });
        }
      }
    }
  
    function init() {
      form.addEventListener("submit", handleFormSubmit);
      document
        .getElementById("employee-list")
        .addEventListener("click", handleCardActions);
    }
  
    return { init };
  })();
  