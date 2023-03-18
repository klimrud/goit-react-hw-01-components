import { Profile } from './components/Profile/Profile.jsx';
import user from './path/user.json';
import { Statistics } from 'components/Statistics/Statistics.jsx';
import data from './path/data.json';
import { FriendList } from 'components/FriendList/FriendList.jsx';
import friends from 'path/friends.json';
import { TransactionHistory } from 'components/Transactions/TransactionHistory.jsx';
import transactions from './path/transactions.json'; 

export const App = () => {
  return (<div><h2>PROFILE</h2>
       <Profile
        avatar={user.avatar}
        username={user.username}
        tag={user.tag}
        location={user.location}
        stats={user.stats}
        followers={user.stats.followers}
        views={user.stats.views}
        likes={user.stats.likes} />
        <h2>STATISTICS</h2>
        <Statistics title="Upload stats" stats={data} />
        <h2>FRIENDLIST</h2>
        <FriendList friends={friends} />
        <h2>TRANSACTIONS</h2>
        <TransactionHistory items={transactions} />
        </div>);
};


