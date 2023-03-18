import css from 'components/Statistics/StatsStatistics.module.css';

export const StatsStatistics = ({stats}) =>{

  return <ul className={css['stat-list']}>
  {stats.map(stat =>  
     <li key={stat.id} class={css.item}>
      <span className={css.label}>{stat.label}</span>
      <span className={css.percentage}>{stat.percentage}%</span>
</li>)}
</ul>
}
