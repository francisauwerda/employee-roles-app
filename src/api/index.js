/* eslint-disable no-undef */
import URL from './urls';

const BASE_URL = 'https://employee-statistics.herokuapp.com';

export const createEmployee = async (formData) => {
  const body = JSON.stringify(formData);

  const response = await fetch(
    `${BASE_URL}${URL.employees}`, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body,
    },
  );

  const successResponse = await response.json();

  return successResponse;
};

export const getEmployees = async () => {
  const response = await fetch(`${BASE_URL}${URL.employees}`);
  const jsonResponse = await response.json();
  const { employees } = jsonResponse;
  return employees;
};

export const deleteEmployee = async (employeeId) => {
  const response = await fetch(
    `${BASE_URL}${URL.deleteEmployee(employeeId)}`, {
      method: 'DELETE',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
    },
  );
  const jsonResponse = await response.json();
  const { employee } = jsonResponse;
  return employee;
};
