
import { Profile } from './components/Profile/Profile.jsx';
import user from './user.json';

export const App = () => {
  return (<div><Profile
        avatar={user.avatar}
        username={user.username}
        tag={user.usertag}
        location={user.location}
        stats={user.stats}
        />
    </div>);
};

//  export const App = () => {
//   return (
//     <div><Profile />
//     </div>
//   );
// };
