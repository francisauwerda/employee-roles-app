const URL = {
  employees: '/api/employees',
  deleteEmployee: id => `/api/employees/${id}`,
  roles: '/api/roles',
  deleteRole: id => `/api/roles/${id}`,
  rotateRole: id => `/api/roles/${id}/rotate`,
};

export default URL;
