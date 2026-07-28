import { useState } from 'react';

function LoginButton(props) {
  return (
    <button className="login" onClick={props.onClick}>
      Login
    </button>
  );
}

function LogoutButton(props) {
  return (
    <button className="logout" onClick={props.onClick}>
      Logout
    </button>
  );
}

function GuestGreeting() {
  return <p>Please sign up.</p>;
}

function UserGreeting() {
  return <p>Welcome back!</p>;
}

function Greeting(props) {
  const isLoggedIn = props.isLoggedIn;
  if (isLoggedIn) {
    return <UserGreeting />;
  }
  return <GuestGreeting />;
}

function TicketList() {
  const tickets = [
    { id: 1, name: 'Theatre show', price: '$45' },
    { id: 2, name: 'Concert', price: '$60' },
    { id: 3, name: 'Movie night', price: '$12' },
  ];

  return (
    <div>
      <h2>Available tickets</h2>
      <ul>
        {tickets.map((ticket) => (
          <li key={ticket.id}>
            {ticket.name} - {ticket.price}
          </li>
        ))}
      </ul>
    </div>
  );
}

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => setIsLoggedIn(true);
  const handleLogout = () => setIsLoggedIn(false);

  return (
    <div className="app-container">
      <h1>Ticket Booking App</h1>
      <Greeting isLoggedIn={isLoggedIn} />

      <div style={{ margin: '20px 0' }}>
        {isLoggedIn ? (
          <LogoutButton onClick={handleLogout} />
        ) : (
          <LoginButton onClick={handleLogin} />
        )}
      </div>

      {isLoggedIn ? (
        <TicketList />
      ) : (
        <p>You must log in to browse tickets.</p>
      )}
    </div>
  );
}

export default App;
