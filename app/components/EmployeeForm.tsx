import React from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { addEmployee, updateEmployee } from "../store/employeeSlice";
import { Employee } from "../models/Employee";

interface EmployeeFormProps {
  employee?: Employee;
}

const EmployeeForm: React.FC<EmployeeFormProps> = ({ employee }) => {
  const { register, handleSubmit } = useForm<Employee>({
    defaultValues: employee || {
      id: 0,
      name: "",
      description: "",
      parentId: undefined,
    },
  });
  const dispatch = useDispatch();

  const onSubmit = (data: Employee) => {
    if (employee) {
      dispatch(updateEmployee(data));
    } else {
      dispatch(addEmployee({ ...data, id: Date.now() }));
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input {...register("name", { required: true })} placeholder="Name" />
      <textarea
        {...register("description", { required: true })}
        placeholder="Description"
      />
      <input type="number" {...register("parentId")} placeholder="Parent ID" />
      <button type="submit">{employee ? "Update" : "Add"} Employee</button>
    </form>
  );
};

export default EmployeeForm;
