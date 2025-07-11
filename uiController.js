// uiController.js
const UIController = (() => {
    const listContainer = document.getElementById("employee-list");
  
    function createEmployeeCard(emp) {
      return `
        <div class="employee-card" data-id="${emp.id}">
          <img src="${emp.image}" alt="${emp.firstName}" class="employee-avatar" />
          <h3>${emp.firstName} ${emp.lastName}</h3>
          <p><strong>Email:</strong> ${emp.email}</p>
          <p><strong>Department:</strong> ${emp.department}</p>
          <p><strong>Role:</strong> ${emp.role}</p>
          <div class="card-actions">
            <button class="edit-btn" data-id="${emp.id}">Edit</button>
            <button class="delete-btn" data-id="${emp.id}">Delete</button>
          </div>
        </div>
      `;
    }
  
    function renderEmployees(employeeList) {
      listContainer.innerHTML = employeeList.map(createEmployeeCard).join("");
    }
  
    function clearForm(formElement) {
      formElement.reset();
      formElement.dataset.editing = "";
    }
  
    return {
      renderEmployees,
      clearForm
    };
  })();
  