import PropTypes from 'prop-types';
// import clsx from 'clsx';
import { FiCircle } from "react-icons/fi";
import css from "components/FriendList/FriendList.module.css";


export const FriendList = ({friends})=>{
 console.log()
  return <ul className={css['friend-list']}>
    {friends.map(friend =>
    <li key={friend.id} className={css.item}>
      <span className={css.stats}>{!friend.isOnline ? <FiCircle className={css.icon}/> : <FiCircle className={css.iconFalls}/>}</span>
      <img src={friend.avatar} alt="User avatar" className={css.avatar} />
      <p className={css.name}>{friend.name}</p>
    </li>)}
  </ul>
}

 FriendList.propTypes = {
    friends: PropTypes.arrayOf(PropTypes.shape({
      id: PropTypes.number.isRequired,
    }),
    ),
  };