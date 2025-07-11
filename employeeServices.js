// employeeService.js
const EmployeeService = (() => {
    let employees = [...mockEmployees];
  
    function getAll() {
      return [...employees];
    }
  
    function getById(id) {
      return employees.find((emp) => emp.id === id);
    }
  
    function add(employee) {
      employee.id = Utils.generateUniqueId();
      employees.push(employee);
    }
  
    function update(id, updatedData) {
      const index = employees.findIndex((emp) => emp.id === id);
      if (index !== -1) {
        employees[index] = { ...employees[index], ...updatedData };
      }
    }
  
    function remove(id) {
      employees = employees.filter((emp) => emp.id !== id);
    }
  
    return {
      getAll,
      getById,
      add,
      update,
      remove
    };
  })();
  