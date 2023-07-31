import React from 'react';
import Transaction from './Transaction';

function TransactionList({ transactions }) {
    return (
        <table>
            <thead>
                <tr>
                    <th>Date</th>
                    <th>Description</th>
                    <th>Category</th>
                    <th>Amount</th>
                </tr>
            </thead>
            <tbody>
                {transactions && transactions.map(transaction => (
                    <Transaction key={transaction.id} {...transaction} />
                ))}
            </tbody>
        </table>
    );
}

export default TransactionList;