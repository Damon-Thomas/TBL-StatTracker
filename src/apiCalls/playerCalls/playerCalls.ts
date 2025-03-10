const playerInfo = async (id: number) => {
  try {
    const response = await fetch(
      `https://api.allorigins.win/get?url=${encodeURIComponent(
        `https://api-web.nhle.com/v1/player/${id}/landing`
      )}`,
      {
        method: "GET",
      }
    );
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    const data = await response.json();
    console.log("player info data", JSON.parse(data.contents));
    return JSON.parse(data.contents);
  } catch (error) {
    console.error("THERE IS A FETCHING ERROR", error);
  }
};

interface Trophy {
  default: string;
  fr: string;
}

interface Season {
  season: number;
  leagueAbbrev: string;
  goals: number;
  assists: number;
  points: number;
}

interface Award {
  trophy: Trophy;
  seasons: Season[];
}

interface City {
  default: string;
  cs: string;
  fi: string;
}

interface Name {
  default: string;
  cs: string;
  fi: string;
}

interface TeamName {
  default: string;
  fr: string;
}

interface Player {
  awards: Award[];
  birthCity: City;
  birthCountry: string;
  birthDate: string;
  careerTotals: {
    regularSeason: Record<string, any>;
    playoffs: Record<string, any>;
  };
  currentTeamAbbrev: string;
  currentTeamId: number;
  currentTeamRoster: Record<string, any>[];
  draftDetails: {
    year: number;
    teamAbbrev: string;
    round: number;
    pickOverall: number;
  };
  featuredStats: {
    season: number;
    regularSeason: Record<string, any>;
  };
  firstName: Name;
  fullTeamName: TeamName;
  headshot: string;
  heightInCentimeters: number;
  heightInInches: number;
  heroImage: string;
  inHHOF: number;
  inTop100AllTime: number;
  isActive: boolean;
  last5Games: Record<string, any>[];
  lastName: Name;
  playerId: number;
  playerSlug: string;
  position: string;
  seasonTotals: Season[];
  shootsCatches: string;
  shopLink: string;
  sweaterNumber: number;
  teamCommonName: TeamName;
  teamLogo: string;
  teamPlaceNameWithPreposition: TeamName;
  twitterLink: string;
  watchLink: string;
  weightInKilograms: number;
  weightInPounds: number;
}

export default playerInfo;

export type { Player, Season };
