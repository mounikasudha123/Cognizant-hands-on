import { useState } from 'react';

function CurrencyConverter() {
  const [amount, setAmount] = useState('');
  const [result, setResult] = useState('');
  const conversionRate = 0.0115;

  const handleSubmit = (event) => {
    event.preventDefault();
    const numericAmount = parseFloat(amount);

    if (Number.isNaN(numericAmount)) {
      setResult('Please enter a valid number.');
      return;
    }

    const euroValue = numericAmount * conversionRate;
    setResult(`${numericAmount.toFixed(2)} INR = €${euroValue.toFixed(2)}`);
  };

  return (
    <div className="card">
      <h2>Currency Converter</h2>
      <p>Convert Indian Rupees to Euros.</p>
      <form onSubmit={handleSubmit}>
        <label>
          Amount (INR):
          <input
            type="number"
            value={amount}
            onChange={(event) => setAmount(event.target.value)}
            placeholder="Enter amount in INR"
          />
        </label>
        <button type="submit">Convert</button>
      </form>
      {result && <p className="result">{result}</p>}
    </div>
  );
}

function App() {
  const [count, setCount] = useState(0);
  const [message, setMessage] = useState('');
  const [welcomeText, setWelcomeText] = useState('');
  const [pressText, setPressText] = useState('');

  const sayHello = () => {
    setMessage('Hello! This message was added from the event handler.');
  };

  const handleIncrease = () => {
    setCount((prev) => prev + 1);
    sayHello();
  };

  const handleDecrease = () => {
    setCount((prev) => prev - 1);
  };

  const handleWelcome = (text) => {
    setWelcomeText(`Message received: ${text}`);
  };

  const handlePress = (event) => {
    setPressText(`I was clicked using a synthetic event: ${event.type}`);
  };

  return (
    <div className="app-shell">
      <header>
        <h1>React Event Handling Lab</h1>
        <p>Demonstrates React event handlers, synthetic events, and component communication.</p>
      </header>

      <section className="card">
        <h2>1. Counter with Multiple Event Handlers</h2>
        <p>Use the buttons below to change the counter value.</p>
        <div className="button-row">
          <button onClick={handleIncrease}>Increase</button>
          <button onClick={handleDecrease}>Decrease</button>
        </div>
        <p>Counter value: <strong>{count}</strong></p>
        {message && <p className="message">{message}</p>}
      </section>

      <section className="card">
        <h2>2. Say Welcome</h2>
        <button onClick={() => handleWelcome('welcome')}>Say Welcome</button>
        {welcomeText && <p>{welcomeText}</p>}
      </section>

      <section className="card">
        <h2>3. Synthetic Event Handler</h2>
        <button onClick={handlePress}>OnPress</button>
        {pressText && <p>{pressText}</p>}
      </section>

      <section className="card">
        <CurrencyConverter />
      </section>
    </div>
  );
}

export default App;
