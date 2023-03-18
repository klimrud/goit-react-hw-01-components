import {PropTypes} from "prop-types";
import { ProfileInfo } from "components/Profile/ProfileInfo.jsx";
import css from 'components/Profile/Profile.module.css';

export const Profile = ({
  username,
  tag,
  avatar,
  location,
  stats}
) => {
  return (
    <div className={css.profile}>
      <div className={css.description}>
        <img src={avatar} alt="User avatar" className={css.avatar} />
        <p className={css.name}>{username}</p>
        <p className={css.tag}>@{tag}</p>
        <p className={css.location}>{location}</p>
      </div>
        <ProfileInfo  
        stats={stats}
        followers={stats.followers}
        views={stats.views}
        likes={stats.likes}/>
    </div>
  );
};

 Profile.propTypes = {
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  avatar: PropTypes.string,
  location: PropTypes.string,
  stats: PropTypes.string,
};

