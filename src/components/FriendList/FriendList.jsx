import css from 'components/FriendList/FriendList.module.css';


export const FriendList = (friends)=>{
  console.log(friends);
  return <ul className={css['friend-list']}>
    {/* {friends.map(friend => <li key={friend.id} className={friend.item}></li>)} */}
  </ul>
}

/* {friends.map(friend =>
  <li key={friend.id} class="item">
    <span class="status">{friend.isOnline}</span>
    <img src={friend.avatar} alt="User avatar" class={friend.avatar} width="48"/>
    <p class="name">{friend.name}</p>
  </li>)} */