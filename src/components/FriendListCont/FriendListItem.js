import css from './FriendListItem.module.css';
import PropTypes from 'prop-types';

const FriendListItem = ({ isOnline, avatar, name, id }) => {
  return (
    <li key={id} className={css.item}>
      {isOnline === true ? (
        <span className={css.statusIsOnline}>{isOnline}</span>
      ) : (
        <span className={css.statusIsOffline}>{isOnline}</span>
      )}
      <img className={css.avatar} src={avatar} alt="User avatar" />
      <p className={css.name}>{name}</p>
    </li>
  );
}

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

export default FriendListItem;