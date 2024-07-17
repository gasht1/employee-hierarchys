import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import EmployeeTree from "./components/EmployeeTree";
import EmployeeForm from "./components/EmployeeForm";
import { setEmployees } from "./store/employeeSlice";
import { RootState } from "./store";
import { store } from "./store";
import { Provider } from "react-redux";

const Home = () => {
  const dispatch = useDispatch();
  const employees = useSelector(
    (state: RootState) => state.employees.employees
  );
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchEmployees = async () => {
      try {
        const response = await axios.get("/employees"); // Mock API endpoint
        dispatch(setEmployees(response.data));
      } catch (err) {
        setError(
          "Failed to fetch employees. Please check the API endpoint and try again."
        );
      }
    };

    fetchEmployees();
  }, [dispatch]);

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold">Employee Hierarchy</h1>
      {error ? (
        <p className="text-red-500">{error}</p>
      ) : (
        <>
          <EmployeeTree employees={employees} />
          <EmployeeForm />
        </>
      )}
    </div>
  );
};

export default function App() {
  return (
    <Provider store={store}>
      <Home />
    </Provider>
  );
}
