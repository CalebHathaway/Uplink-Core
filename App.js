
import React, { useState } from 'react';
import './App.css';

function App() {
  const [form, setForm] = useState({ reward: '', promo: '', amount: '' });
  const [entries, setEntries] = useState([]);

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    setEntries([...entries, form]);
    setForm({ reward: '', promo: '', amount: '' });
  };

  const attachRate = () => {
    if (!entries.length) return '0%';
    const attached = entries.filter(e => e.reward === 'Yes').length;
    return ((attached / entries.length) * 100).toFixed(1) + '%';
  };

  return (
    <div className="App">
      <h1>Uplink Core</h1>
      <form onSubmit={handleSubmit}>
        <label>Reward Sign-Up:</label>
        <select name="reward" value={form.reward} onChange={handleChange}>
          <option value="">--</option>
          <option value="Yes">Yes</option>
          <option value="No">No</option>
        </select><br/>
        <label>Paper Promo:</label>
        <select name="promo" value={form.promo} onChange={handleChange}>
          <option value="">--</option>
          <option value="Yes">Yes</option>
          <option value="No">No</option>
        </select><br/>
        <label>Amount ($):</label>
        <input type="number" name="amount" value={form.amount} onChange={handleChange} /><br/>
        <button type="submit">Submit</button>
      </form>
      <h2>Attach Rate: {attachRate()}</h2>
      <ul>
        {entries.map((e, i) => (
          <li key={i}>{e.reward} | {e.promo} | ${e.amount}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
