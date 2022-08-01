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

FriendListItem.propTypes = {
  isOnline: PropTypes.bool.isRequired,
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
};

FriendListItem.defaultProps = {
  isOnline: null,
  avatar: "нет фото",
  name: "нет имени",
  id: 0,
};

export default FriendList;

