import { useState } from 'react'
import './App.css'

const players = [
  { id: 1, name: 'Virat Kohli', score: 85 },
  { id: 2, name: 'Rohit Sharma', score: 72 },
  { id: 3, name: 'Shubman Gill', score: 66 },
  { id: 4, name: 'KL Rahul', score: 91 },
  { id: 5, name: 'Hardik Pandya', score: 58 },
  { id: 6, name: 'Jasprit Bumrah', score: 43 },
  { id: 7, name: 'Suryakumar Yadav', score: 78 },
  { id: 8, name: 'Rishabh Pant', score: 63 },
  { id: 9, name: 'Shreyas Iyer', score: 69 },
  { id: 10, name: 'Yashasvi Jaiswal', score: 94 },
  { id: 11, name: 'Ishan Kishan', score: 55 }
]

const T20Players = ['Rohit Sharma', 'Virat Kohli', 'Hardik Pandya']
const RanjiTrophyPlayers = ['Shubman Gill', 'Rishabh Pant', 'Yashasvi Jaiswal']
const indianPlayers = [...T20Players, ...RanjiTrophyPlayers]
const indianTeam = ['Rohit Sharma', 'KL Rahul', 'Suryakumar Yadav', 'Shubman Gill', 'Rishabh Pant', 'Hardik Pandya']

function ListOfPlayers({ players }) {
  return (
    <ul>
      {players.map(({ id, name, score }) => (
        <li key={id}>
          <span className="player-name">{name}</span> – {score}
        </li>
      ))}
    </ul>
  )
}

function ScoreBelow70({ players }) {
  const below70 = players.filter(player => player.score < 70)

  return (
    <div>
      {below70.length === 0 ? (
        <p>No players have scores less than 70.</p>
      ) : (
        <ul>
          {below70.map(({ id, name, score }) => (
            <li key={id}>
              <span className="player-name">{name}</span> – {score}
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}

function OddPlayers({ team }) {
  const [first, second, third, fourth, fifth, sixth] = team
  const oddPlayerList = [first, third, fifth]

  return (
    <ul>
      {oddPlayerList.map((player, index) => (
        <li key={index}>{player}</li>
      ))}
    </ul>
  )
}

function EvenPlayers({ team }) {
  const [first, second, third, fourth, fifth, sixth] = team
  const evenPlayerList = [second, fourth, sixth]

  return (
    <ul>
      {evenPlayerList.map((player, index) => (
        <li key={index}>{player}</li>
      ))}
    </ul>
  )
}

function MergedIndianPlayers({ players }) {
  return (
    <ul>
      {players.map((player, index) => (
        <li key={index}>{player}</li>
      ))}
    </ul>
  )
}

function App() {
  const [showGeneral, setShowGeneral] = useState(true)

  return (
    <div className="app-shell">
      <h1>Cricket App - ES6 Practice</h1>
      <p>Use the button to switch between player lists and the Indian team view.</p>
      <button onClick={() => setShowGeneral(prev => !prev)}>
        {showGeneral ? 'Show Indian Team Info' : 'Show Player Score Lists'}
      </button>

      {showGeneral ? (
        <section>
          <h2>List of Players</h2>
          <ListOfPlayers players={players} />

          <h2>List of Players having Scores Less than 70</h2>
          <ScoreBelow70 players={players} />
        </section>
      ) : (
        <section>
          <h2>Indian Team</h2>
          <div className="team-section">
            <div>
              <h3>Odd Players</h3>
              <OddPlayers team={indianTeam} />
            </div>
            <div>
              <h3>Even Players</h3>
              <EvenPlayers team={indianTeam} />
            </div>
          </div>

          <h2>List of Indian Players Merged</h2>
          <MergedIndianPlayers players={indianPlayers} />
        </section>
      )}
    </div>
  )
}

export default App
