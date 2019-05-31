import React from 'react';
import PropTypes from 'prop-types';

import ListStyled from '../../common/styled/ListStyled';
import ListItem from '../../common/ListItem';
import { roleType } from './types';

import avatarIcon from '../../../../assets/teamwork.png';

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
            ? <p>Loading...</p>
            : roles.map((role) => {
              const duration = `${role.durationInWeeks} weeks`;
              return (
                <ListItem
                  key={role.id}
                  mainText={role.title}
                  secondaryText={role.description}
                  tertiaryText={duration}
                  deleteListItem={() => deleteRole(role.id)}
                  avatarIcon={avatarIcon}
                />
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
