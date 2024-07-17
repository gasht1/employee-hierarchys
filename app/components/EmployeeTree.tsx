import React from "react";
import { Employee } from "../models/Employee";

interface EmployeeTreeProps {
  employees: Employee[];
  parentId?: number;
}

const EmployeeTree: React.FC<EmployeeTreeProps> = ({ employees, parentId }) => {
  const filteredEmployees = employees.filter(
    (emp) => emp.parentId === parentId
  );

  return (
    <ul>
      {filteredEmployees.map((emp) => (
        <li key={emp.id}>
          {emp.name}
          <EmployeeTree employees={employees} parentId={emp.id} />
        </li>
      ))}
    </ul>
  );
};

export default EmployeeTree;
