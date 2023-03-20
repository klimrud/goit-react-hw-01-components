import {TransactionTd} from 'components/Transactions/TransactionTd.jsx'
import css from 'components/Transactions/TransactionHistory.module.css'

export const TransactionHistory = ({transactions}) => {
 return (
 <table className={css['transaction-history']}>
   <thead>
    <tr>
      <th className={css.th}>Type</th>
      <th className={css.th}>Amount</th>
      <th className={css.th}>Currency</th>
    </tr>
  </thead>
  <TransactionTd  transactions={transactions}/>
</table> )
}

