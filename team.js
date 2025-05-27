function showStats(playerName) {
  const statsSection = document.getElementById('player-stats');
  const statsContent = document.getElementById('stats');

  const playerStats = {
    "Sakib Al Hasan": { Matches: 230, Runs: 6764, Wickets: 300 },
    "Ab De Villiers": { Matches: 228, Runs: 9577, Wickets: 2 },
    "David Warner": { Matches: 142, Runs: 6030, Wickets: 0 },
    "Virat Kohli": { Matches: 275, Runs: 12898, Wickets: 4 },
    "Kumar Sangakara": { Matches: 404, Runs: 14234, Wickets: 0 },
    "Steve Smith": { Matches: 100, Runs: 4545, Wickets: 17 },
    "Shane Watson": { Matches: 190, Runs: 5757, Wickets: 168 },
    "MS Dhoni": { Matches: 350, Runs: 10773, Catches: 321 },
    "Shane Warne": { Matches: 194, Runs: 1018, Wickets: 293 },
    "Dale Steyn": { Matches: 125, Runs: 365, Wickets: 196 },
    "Mitchell Starc": { Matches: 110, Runs: 675, Wickets: 219 }
  };

  const stats = playerStats[playerName];

  if (!stats)
  {
    statsContent.innerHTML = `<p><strong>${playerName}</strong>: Stats not available.</p>`;
  }
   else 
  {
    let rows = "";
    for (let key in stats)
    {
      rows += `<tr><td>${key}</td><td>${stats[key]}</td></tr>`;
    }

    statsContent.innerHTML = `
      <h3>${playerName}'s Statistics</h3>
      <table style="margin: auto; border-collapse: collapse; width: 60%;">
        <thead>
          <tr style="background-color: #4CAF50; color: white;">
            <th style="padding: 8px; border: 1px solid #ccc;">Stat</th>
            <th style="padding: 8px; border: 1px solid #ccc;">Value</th>
          </tr>
        </thead>
        <tbody>
          ${rows}
        </tbody>
      </table>
    `;
  }

  statsSection.scrollIntoView({ behavior: 'smooth' });
}
