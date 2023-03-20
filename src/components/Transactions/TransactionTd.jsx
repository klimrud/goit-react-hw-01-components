import PropTypes from 'prop-types';
import css from 'components/Transactions/TransactionTd.module.css';

export const TransactionTd = ({ transactions }) => {
  return (
    <tbody>
      {transactions.map(transaction => (
        <tr key={transaction.id} className={css.tr}>
          <td className={css.td}>{transaction.type}</td>
          <td className={css.td}>{transaction.amount}</td>
          <td className={css.td}>{transaction.currency}</td>
        </tr>
      ))}
    </tbody>
  );
};

TransactionTd.propTypes = {
  friends: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
  }),
  ),
};