import React from 'react';

import PageContainer from '../../common/styled/PageContainer';
import Container from '../../common/Container';
import RoleList from './RolesList';
import RoleForm from './RoleForm';
import { getRoles, deleteRole } from '../../../../api';

class Roles extends React.Component {
  state = {
    roles: [],
    rolesLoading: true,
  }

  async componentDidMount() {
    await this.fetchRolesHandler();
  }

  fetchRolesHandler = async () => {
    const roles = await getRoles();
    this.setState({
      roles,
      rolesLoading: false,
    });
  }

  deleteRoleHandler = async (roleId) => {
    const deletedRole = await deleteRole(roleId);

    if (!deletedRole) {
      console.log(`Couldn't delete role ${roleId}`);
    }

    const { roles } = this.state;

    const updatedRoles = roles.filter(role => role.id !== deletedRole.id);
    this.setState({ roles: updatedRoles });
  }

  render() {
    const {
      roles,
      rolesLoading,
    } = this.state;

    return (
      <PageContainer>
        <Container>
          <RoleList
            roles={roles}
            rolesLoading={rolesLoading}
            fetchRoles={this.fetchRolesHandler}
            deleteRole={this.deleteRoleHandler}
          />
        </Container>
        <Container>
          <RoleForm
            fetchRoles={this.fetchRolesHandler}
          />
        </Container>
      </PageContainer>
    );
  }
}

export default Roles;
