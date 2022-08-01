import css from './FriendList.module.css';
import PropTypes from 'prop-types';
import FriendListItem from './FriendListItem';

const FriendList = ({ friends }) => {
  return (
    <ul className={css.friend__list}>
         {friends.map(friend => (
             <FriendListItem
                key={friend.id}
                isOnline={friend.isOnline}
                avatar={friend.avatar}
                name={friend.name}
                />
            ))}
    </ul>
  );
};

// FriendList.propTypes = {
//   isOnline: PropTypes.string.isRequired,
//   avatar: PropTypes.string.isRequired,
//   name: PropTypes.string.isRequired,
//   id: PropTypes.number.isRequired,
// };

export default FriendList;

