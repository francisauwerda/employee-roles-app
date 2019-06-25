import React from 'react';

import { getRoles, rotateRole } from '../../../../api';
import Loading from '../../common/Loading';
import ListItem from '../../common/ListItem';
import RoleIcon from '../../../../assets/teamwork.png';
import EmployeeIcon from '../../../../assets/avatar.png';
import FlexContainer from '../../common/styled/FlexContainer';
import { generateId } from '../../../helpers';

class Home extends React.Component {
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

  rotateRole = async (roleId) => {
    await rotateRole(roleId);
    this.setState({ rolesLoading: true });
    await this.fetchRolesHandler();
  }

  render() {
    const { roles, rolesLoading } = this.state;
    return (
      <div>
        <h2>Team Roles</h2>
        {rolesLoading
          ? <Loading />
          : roles.map((role) => {
            const { employee } = role;
            return (
              <FlexContainer
                justifyContent="space-between"
                key={generateId()}
              >
                <button
                  type="button"
                  onClick={() => this.rotateRole(role.id)}
                >
                  Rotate role
                </button>
                <ListItem
                  itemId={role.id}
                  mainText={role.title}
                  secondaryText={role.description}
                  tertiaryText={`${role.durationInWeeks} weeks`}
                  avatarIcon={RoleIcon}
                />
                <ListItem
                  itemId={employee.id}
                  mainText={employee.firstName}
                  secondaryText={employee.nationality}
                  tertiaryText={employee.department}
                  avatarIcon={EmployeeIcon}
                />
              </FlexContainer>
            );
          })
        }
      </div>
    );
  }
}

export default Home;
