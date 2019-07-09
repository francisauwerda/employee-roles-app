import React from 'react';
import PropTypes from 'prop-types';

import ListStyled from '../../common/styled/ListStyled';
import ListItem from '../../common/ListItem';
import { roleType } from './types';

import avatarIcon from '../../../../assets/teamwork.png';
import Loading from '../../common/Loading';
import CardContainer from '../../common/styled/CardContainer';

class RoleList extends React.Component {
  async componentDidMount() {
    const { fetchRoles } = this.props;
    await fetchRoles();
  }

  render() {
    const {
      roles,
      rolesLoading,
      deleteRole,
    } = this.props;

    return (
      <ListStyled>
        {
          rolesLoading
            ? <Loading />
            : roles.map((role) => {
              const duration = `${role.durationInWeeks} weeks`;
              return (
                <CardContainer
                  key={`${role.id}${role.title}`}
                >
                  <ListItem
                    key={role.id}
                    itemId={role.id}
                    mainText={role.title}
                    secondaryText={role.description}
                    tertiaryText={duration}
                    secondaryActionHandler={() => deleteRole(role.id)}
                    avatarIcon={avatarIcon}
                  />
                </CardContainer>
              );
            })
        }
      </ListStyled>
    );
  }
}

RoleList.propTypes = {
  roles: PropTypes.arrayOf(roleType).isRequired,
  rolesLoading: PropTypes.bool.isRequired,
  fetchRoles: PropTypes.func.isRequired,
  deleteRole: PropTypes.func.isRequired,
};

export default RoleList;
