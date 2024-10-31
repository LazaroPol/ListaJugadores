import { useEffect, useState } from "react";
import { getPlayerList, getTeams } from "./services/api";
import "./styles/styles.css";

const App = () => {
  const [teams, setTeams] = useState([]);
  const [teamsId, setTeamsId] = useState([]);
  const [players, setPlayers] = useState([]);

  useEffect(() => {
    getTeams().then(setTeams);
  }, []);

  const handleTeamChange = (event) => {
    if (event.target.value === null || event.target.value === "") {
      event.target.value === 1;
      console.log(111111111111, event.target.value);
    } else {
      setTeamsId(event.target.value);
      console.log("qqqqqqqq", event.target.value);
    }
  };

  useEffect(() => {
    if (teamsId === null || teamsId === "") {
      teamsId === 1;
      console.log(4444444444444, teamsId);
    } else {
      getPlayerList(teamsId).then(setPlayers);
      console.log(222222222222, teamsId);
    }
  }, [teamsId]);

  return (
    <div>
      <p>Select a team</p>
      <select name="team" id="team" onChange={handleTeamChange}>
        {teams.map((team) => (
          <option key={team.equipoCod} value={team.equipoCod}>
            {team.nombre}
          </option>
        ))}
      </select>

      <table>
        <thead>
          <tr>
            <th>Player ID</th>
            <th>Player Name</th>
            <th>Shirt Number</th>
            <th>Calidad</th>
          </tr>
        </thead>
        <tbody>
          {players.map((player) => (
            
            <tr key={player.jugadorCod}>
              <td>{player.jugadorCod}</td>
              <td>{player.nombre}</td>
              <td>{player.numeroCamiseta}</td>
              
              <div className="divCalidad" style={{ width: { loanSum * 30} }}>
                {player.calidad}
              </div>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default App;
