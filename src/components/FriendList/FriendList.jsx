import { FriendListItem } from './FriendsListItem';
import css from './FriendList.module.css';
import PropTypes from 'prop-types'

export const FriendList = ({ friends }) => {
  return (
    <ul className={css.friendList}>
      {friends.map(({ avatar, name, isOnline, id }) => {
       return ( <FriendListItem
          key={id}
          avatar={avatar}
          name={name}
          isOnline={isOnline}
        />)
      })}
    </ul>
  );
};

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.number.isRequired,
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      isOnline: PropTypes.bool.isRequired,
    })
  ).isRequired,
};