export async function getSummonerByName(region: string, name: string) {
  const res = await fetch(
    `https://${region}.api.riotgames.com/tft/summoner/v1/summoners/by-name/${name}`,
    {
      headers: {
        Origin: "https://developer.riotgames.com",
        "X-Riot-Token": process.env.RIOT_API_KEY || "",
      },
    },
  );

  if (!res.ok) {
    return { status: res.status, message: res.statusText };
  }

  return { status: 200, summoner: await res.json() };
}

export async function getSummonerRankByID(region: string, id: string) {
  const res = await fetch(
    `https://${region}.api.riotgames.com/tft/league/v1/entries/by-summoner/${id}`,
    {
      headers: {
        Origin: "https://developer.riotgames.com",
        "X-Riot-Token": process.env.RIOT_API_KEY || "",
      },
    },
  );

  if (!res.ok) {
    return { status: res.status, message: res.statusText };
  }

  return { status: 200, ranking: await res.json() };
}
