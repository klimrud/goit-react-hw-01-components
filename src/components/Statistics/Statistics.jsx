 import { StatsStatistics } from "./StatsStatistics";
 import css from "components/Statistics/Statistics.module.css"

export const Statistics = ({stats}) => {
  return (
  <section className={css.statistics}>
     <h2 class="title">Upload stats</h2>
     <StatsStatistics stats={stats} />
  </section>
  );
};