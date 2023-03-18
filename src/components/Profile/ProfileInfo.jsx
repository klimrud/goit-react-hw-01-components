import {PropTypes} from "prop-types";
import css from "components/Profile/ProfileInfo.module.css"

export const ProfileInfo = ({ followers, views, likes }) => {
  return (
    <ul className={css.stats}>
      <li className={css.list}>
        <span className={css.label}>Followers</span>
        <span className={css.quantity}>{followers}</span>
      </li>
      <li className={css.list}>
        <span className={css.label}>Views</span>
        <span className={css.quantity}>{views}</span>
      </li>
      <li className={css.list}>
        <span className={css.label}>Likes</span>
        <span className={css.quantity}>{likes}</span>
      </li>
    </ul>
  );
};

ProfileInfo.propTypes = {
  followers: PropTypes.number,
   views: PropTypes.number, 
   likes: PropTypes.number,
}
