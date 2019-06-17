import React from 'react';
import { getRoles } from '../../../../api';
import Loading from '../../common/Loading';
import ListItem from '../../common/ListItem';
import RoleIcon from '../../../../assets/teamwork.png';
import EmployeeIcon from '../../../../assets/avatar.png';
import FlexContainer from '../../common/styled/FlexContainer';

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
              >
                <ListItem
                  key={role.id}
                  itemId={role.id}
                  mainText={role.title}
                  secondaryText={role.description}
                  // secondaryActionHandler={() => deleteRole(role.id)}
                  avatarIcon={RoleIcon}
                />
                <ListItem
                  key={employee.id}
                  itemId={employee.id}
                  mainText={employee.firstName}
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
