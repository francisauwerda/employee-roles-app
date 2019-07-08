import React from 'react';
import styled from 'styled-components';
import _ from 'lodash';

import { getRoles, rotateRole } from '../../../../api';
import Loading from '../../common/Loading';
import ListItem from '../../common/ListItem';
import RoleIcon from '../../../../assets/teamwork.png';
import EmployeeIcon from '../../../../assets/avatar.png';
import FlexContainer from '../../common/styled/FlexContainer';
import { generateId } from '../../../helpers';
import Button from '../../common/styled/Button';
import CardContainer from '../../common/styled/CardContainer';

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
      roles: _.sortBy(roles, ['title']),
      rolesLoading: false,
    });
  }

  rotateRole = async (roleId) => {
    await rotateRole(roleId);
    await this.fetchRolesHandler();
  }

  render() {
    const { roles, rolesLoading } = this.state;
    return (
      <PageContainer>
        <h2>Team Roles</h2>
        <div>
          {rolesLoading
            ? <Loading />
            : roles.map((role) => {
              const { employee } = role;
              return (
                <CardContainer
                  justifyContent="space-between"
                  alignItems="center"
                  key={generateId()}
                >
                  <GridContainer>
                    <ListItem
                      itemId={role.id}
                      mainText={role.title}
                      secondaryText={role.description}
                      tertiaryText={`${role.durationInWeeks} weeks`}
                      secondaryActionHandler={null}
                      avatarIcon={RoleIcon}
                    />
                    <ListItem
                      itemId={employee.id}
                      mainText={`${employee.firstName} ${employee.lastName}`}
                      secondaryText={employee.nationality}
                      tertiaryText={employee.department}
                      secondaryActionHandler={null}
                      avatarIcon={EmployeeIcon}
                    />
                  </GridContainer>
                  <ButtonContainer>
                    <Button
                      type="button"
                      marginTop={0}
                      onClick={() => this.rotateRole(role.id)}
                    >
                      <FlexContainer>
                        <span>Rotate</span>
                      </FlexContainer>
                    </Button>
                  </ButtonContainer>
                </CardContainer>
              );
            })
        }
        </div>
      </PageContainer>
    );
  }
}

const GridContainer = styled.div`
  display: grid;
  grid-template-columns: 300px 300px;

  @media only screen and (max-width: 720px) {
    grid-template-columns: auto;
    grid-template-rows: auto;
    grid-row-gap: 10px;
  }
`;

const ButtonContainer = styled(FlexContainer)`
  padding: 10px;
`;


const PageContainer = styled.div`
  margin: 16px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export default Home;
