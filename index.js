const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

app.get('/api', (req, res) => {
    const {slack_name, track} = req.query;

    if (!slack_name || !track) {
        return res.status(400).json({ error: 'slack_name and track are required query parameters' });
    }

    const currentDate = new Date()

    const current = currentDate.getDay();
    const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const currentDay = daysOfWeek[current];

    const currentUTC = currentDate.toISOString();

    const githubFileURL = "https://github.com/elQ3ndie/Stage1_Backend/blob/main/index.js";
    const githubRepoURL = "https://github.com/elQ3ndie/Stage1_Backend"

    const jsonResponse = {
        slack_name,
        current_day: currentDay,
        utc_time: currentUTC,
        track,
        github_file_url: githubFileURL,
        github_repo_url: githubRepoURL,
        status_code: 200,
      };
    
      res.json(jsonResponse);
    
});


app.listen(port,() => {{}
console.log("Port is running on http://localhost:${port}");
});


