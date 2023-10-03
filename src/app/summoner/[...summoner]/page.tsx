import Box from "@/components/box";
import CharacterHeader from "@/components/character-header";
import Divider from "@/components/divider";
import ProgressBar from "@/components/progress-bar";
import { getSummonerByName, getSummonerRankByID } from "@/lib/getSummoner";
import { Averia_Gruesa_Libre } from "next/font/google";
import Image from "next/image";

type Props = {
  params: { summoner: string };
};

function RankingStat({
  title,
  value,
  ratio,
}: {
  title: string;
  value: string;
  ratio?: number | undefined;
}): JSX.Element {
  return (
    <div className="flex justify-between items-center p-2">
      <span className="w-1/3">{title}</span>
      <span className="w-1/3">
        {ratio ? <ProgressBar ratio={ratio} /> : ""}
      </span>
      <span className="w-1/3 text-right">{value}</span>
    </div>
  );
}

export default async function Summoner({
  params,
}: Props): Promise<JSX.Element> {
  const region = params.summoner[0];
  const name = params.summoner[1];

  // const summonerResponse = await getSummonerByName(region, name);
  // if (summonerResponse.status === 400 || !summonerResponse?.summoner)
  //   return <div>deo co</div>;

  // const { summoner } = summonerResponse;
  // const { ranking: rankingSummoners } = await getSummonerRankByID(
  //   region,
  //   summoner.id,
  // );
  // const rankingSummoner = rankingSummoners[0];

  const textColorByRank = {
    IRON: "zinc-500",
    BRONZE: "yellow-700",
    SILVER: "stale-600",
    GOLD: "yellow-600",
    PLATINUM: "cyan-600",
    DIAMOND: "blue-400",
    MASTER: "purple-500",
    GRANDMASTER: "red-500",
    CHALLENGER: "orange-300",
  };

  const summoner = {
    id: "wIPyYpBhTPgZoefMye3DuxQfyo_6QqdiVNzwySE7_ZkJ5k_XnU1vhEp_nw",
    accountId: "Ge_reZPBkkXmIV-OU6x3xiKlv5eNux17vwIQ6_YOKzj2-R9tv2X0oMxX",
    puuid:
      "HvXlYw-FbGcLlRpzLuGwIT7AqLTJ6jRclokPuxHTLPtneRXPNki14muIdIt8EoPJCpPVx1UOflmP8A",
    name: "Luôn yêu đời",
    profileIconId: 4073,
    revisionDate: 1696146836000,
    summonerLevel: 315,
  };

  const rankingSummoner = {
    puuid:
      "HvXlYw-FbGcLlRpzLuGwIT7AqLTJ6jRclokPuxHTLPtneRXPNki14muIdIt8EoPJCpPVx1UOflmP8A",
    leagueId: "d3f02f97-6402-4c37-a9c2-b8b5c53b05f8",
    queueType: "RANKED_TFT",
    tier: "DIAMOND",
    rank: "IV",
    summonerId: "wIPyYpBhTPgZoefMye3DuxQfyo_6QqdiVNzwySE7_ZkJ5k_XnU1vhEp_nw",
    summonerName: "Luôn yêu đời",
    leaguePoints: 13,
    wins: 56,
    losses: 45,
    veteran: false,
    inactive: false,
    freshBlood: true,
    hotStreak: false,
  };

  const { wins, losses } = rankingSummoner;
  const totalGames = wins + losses;
  const topFouthRatio = ((wins / totalGames) * 100).toFixed();

  const hideRank = ["CHALLENGER", "GRANDMASTER", "MASTER"].includes(
    rankingSummoner.tier,
  );

  return (
    <div className="flex my-8">
      <div className="pr-4 w-1/4">
        <div className="flex flex-col justify-center items-center gap-4 mb-6">
          <div className="relative">
            <Image
              src={`https://raw.communitydragon.org/latest/game/assets/ux/summonericons/profileicon${summoner.profileIconId.toString()}.png`}
              alt="Rank Icon"
              width={120}
              height={120}
              className="rounded-full overflow-hidden"
            />
            <div
              className="absolute -bottom-2 left-1/2 -translate-x-1/2 
          bg-slate-800 rounded-sm px-1 "
            >
              {summoner.summonerLevel}
            </div>
          </div>
          <h2 className="text-center text-2xl text-white font-bold">
            {summoner.name}
          </h2>
        </div>
        <Box className="rounded-sm pb-4 px-2">
          <div className="flex flex-col justify-center items-center mb-4">
            <Image
              src={`https://raw.communitydragon.org/latest/plugins/rcp-fe-lol-shared-components/global/default/${rankingSummoner.tier.toLowerCase()}.png`}
              alt="Rank Icon"
              width={100}
              height={100}
            />
            <p>
              <span
                className={`font-bold text-${
                  textColorByRank[
                    rankingSummoner.tier as keyof typeof textColorByRank
                  ]
                }`}
              >
                {rankingSummoner.tier}
                {hideRank ? "" : " " + rankingSummoner.rank}
              </span>
              <span className="text-sm ml-2">
                {rankingSummoner.leaguePoints} LP
              </span>
            </p>
          </div>

          <RankingStat title="Games" value={totalGames.toString()} />
          {/* <RankingStat title="Wins" ratio={30} value="20" /> */}
          <RankingStat
            title="Top 4"
            ratio={(wins / totalGames) * 100}
            value={`${wins} (${topFouthRatio}%)`}
          />
          {/* <RankingStat title="Avg. Place" ratio={60} value="3.3" /> */}
        </Box>
      </div>
      <div className="w-3/4 border-l border-cyan-900 pl-4">
        <CharacterHeader label="Match History" textSize="xl" />
      </div>
    </div>
  );
}
