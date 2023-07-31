import React, { useState, useEffect } from 'react';
import TransactionList from './TransactionList';
import TransactionForm from './TransactionForm';
import Search from './Search';

function Bank() {
    const [transactions, setTransactions] = useState([]);
    const [filteredTransactions, setFilteredTransactions] = useState([]);

    useEffect(() => {
        async function fetchData() {
            try {
                const response = await fetch('https://jason-data-cabs.onrender.com/transactions');
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                const data = await response.json();
                setTransactions(data);
                setFilteredTransactions(data);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        }

        fetchData();
    }, []);

    function handleAddTransaction(newTransaction) {
        setTransactions([...transactions, newTransaction]);
        setFilteredTransactions([...filteredTransactions, newTransaction]);
    }

    function handleFilterTransactions(query) {
        const filtered = transactions.filter(transaction =>
            transaction.description.toLowerCase().includes(query.toLowerCase())
        );
        setFilteredTransactions(filtered);
    }

    return (
        <div>
            <Search onFilter={handleFilterTransactions} />
            <TransactionForm onAddTransaction={handleAddTransaction} />
            <TransactionList transactions={filteredTransactions} />
        </div>
    );
}

export default Bank;