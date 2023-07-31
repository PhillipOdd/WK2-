import React, { useState } from 'react';


function TransactionForm({ onAddTransaction }) {
    const [date, setDate] = useState('');
    const [description, setDescription] = useState('');
    const [category, setCategory] = useState('');
    const [amount, setAmount] = useState('');

    function handleSubmit(event) {
        event.preventDefault();
        const newTransaction = { date, description, category, amount };
        onAddTransaction(newTransaction);
        setDate('');
        setDescription('');
        setCategory('');
        setAmount('');
    }

    return (
        <form onSubmit={handleSubmit}>
            <h2>Add a New Transaction</h2>
            <label>
                Date:
                <input type="date" value={date} onChange={event => setDate(event.target.value)} />
            </label>
            <label>
                Description:
                <input type="text" value={description} onChange={event => setDescription(event.target.value)} />
            </label>
            <label>
                Category:
                <input type="text" value={category} onChange={event => setCategory(event.target.value)} />
            </label>
            <label>
                Amount:
                <input type="number" value={amount} onChange={event => setAmount(event.target.value)} />
            </label>
            <button type="submit">Add Transaction</button>
        </form>
    );
}

export default TransactionForm;