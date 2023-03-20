import PropTypes from 'prop-types';
import { StatsStatistics } from './StatsStatistics';
import css from 'components/Statistics/Statistics.module.css';

export const Statistics = ({ stats, title }) => {
  return (
    <section className={css.statistics}>
      {title && <h2 className={css.title}>{title}</h2>}
      <StatsStatistics stats={stats} />
    </section>
  );
};

Statistics.propTypes = {
  title: PropTypes.string,
};
