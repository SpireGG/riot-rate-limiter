import Bottleneck from "bottleneck";
import { RequestInfo, RequestInit } from "node-fetch";

export interface ConstructorParams {
  debug?: boolean;
  redis?: Bottleneck.RedisConnectionOptions;
  concurrency?: number;
  retryAfterDefault?: number;
  retryCount?: number;
  datastore?: "local" | "ioredis";
}

export interface ExecuteParameters {
  url: RequestInfo;
  options: RequestInit;
}

export interface ExecuteRequestParameters {
  req: ExecuteParameters;
  region: PlatformId;
  method: string;
}

export enum PlatformId {
  EUW1 = "euw1",
  EUNE1 = "eun1",
  NA1 = "na1",
  LA1 = "la1",
  LA2 = "la2",
  KR = "kr",
  JP1 = "jp1",
  BR1 = "br1",
  OC1 = "oc1",
  RU = "ru",
  TR1 = "tr1",
  EUROPE = "europe",
  ASIA = "asia",
  SEA = "sea",
  AMERICAS = "americas",
  AP = "ap",
  BR = "br",
  EU = "eu",
  NA = "na",
  LATAM = "latam",
  PH2 = "ph2",
  SG2 = "sg2",
  TH2 = "th2",
  TW2 = "tw2",
  VN2 = "vn2",
  ESPORTS = "esports",
  APAC = "apac",
}

export enum LimitType {
  APPLICATION = "application",
  METHOD = "method",
  SERVICE = "service",
}

export interface RateLimits {
  appLimits: string;
  appCounts: string;
  methodLimits: string;
  methodCounts: string;
  limitType: LimitType | null;
  retryAfter: number | null;
}

export const HOST = ":platformId.api.riotgames.com";

export interface METHODS {
  ACCOUNT: {
    GET_BY_PUUID: string;
    GET_BY_RIOT_ID: string;
    GET_BY_ACCESS_TOKEN: string;
    GET_ACTIVE_SHARD_FOR_PLAYER: string;
  };
  CHAMPION_MASTERY: {
    GET_ALL_CHAMPIONS: string;
    GET_CHAMPION_MASTERY: string;
    GET_TOP_CHAMPIONS: string;
    GET_CHAMPION_MASTERY_SCORE: string;
  };
  CHAMPION: {
    GET_CHAMPION_ROTATIONS: string;
  };
  CLASH: {
    GET_PLAYERS_BY_PUUID: string;
    GET_TEAM: string;
    GET_TOURNAMENTS: string;
    GET_TOURNAMENT: string;
    GET_TOURNAMENT_TEAM: string;
  };
  LEAGUE_EXP: {
    GET_LEAGUE_ENTRIES: string;
  };
  LEAGUE: {
    GET_CHALLENGER_BY_QUEUE: string;
    GET_ENTRIES_BY_PUUID: string;
    GET_ALL_ENTRIES: string;
    GET_GRANDMASTER_BY_QUEUE: string;
    GET_LEAGUE_BY_ID: string;
    GET_MASTER_BY_QUEUE: string;
  };
  LOL_CHALLENGES: {
    GET_CONFIG: string;
    GET_PERCENTILES: string;
    GET_CONFIG_BY_ID: string;
    GET_LEADERBOARD_BY_ID: string;
    GET_PERCENTILES_BY_ID: string;
    GET_PLAYER_DATA_BY_PUUID: string;
  };
  LOL_STATUS: {
    GET_PLATFORM_DATA: string;
  };
  LOR_DECK: {
    GET_DECKS_FOR_PLAYER: string;
    POST_CREATE_DECK_FOR_PLAYER: string;
  };
  LOR_INVENTORY: {
    GET_CARDS_OWNED_BY_PLAYER: string;
  };
  LOR_MATCH: {
    GET_MATCH_IDS_BY_PUUID: string;
    GET_MATCH_BY_ID: string;
  };
  LOR_RANKED: {
    GET_MASTER_TIER: string;
  };
  LOR_STATUS_V1: {
    GET_PLATFORM_DATA: string;
  };
  MATCH_V5: {
    GET_IDS_BY_PUUID: string;
    GET_MATCH_BY_ID: string;
    GET_MATCH_TIMELINE_BY_ID: string;
  };
  SPECTATOR_TFT_V5: {
    GET_GAME_BY_PUUID: string;
    GET_FEATURED_GAMES: string;
  };
  SPECTATOR: {
    GET_GAME_BY_PUUID: string;
    GET_FEATURED_GAMES: string;
  };
  SUMMONER: {
    GET_BY_RSO_PUUID: string;
    GET_BY_PUUID: string;
    GET_BY_ACCESS_TOKEN: string;
  };
  TFT_LEAGUE: {
    GET_CHALLENGER: string;
    GET_ENTRIES_BY_PUUID: string;
    GET_ALL_ENTRIES: string;
    GET_GRANDMASTER: string;
    GET_LEAGUE_BY_ID: string;
    GET_MASTER: string;
    GET_TOP_RATED_LADDER_BY_QUEUE: string;
  };
  TFT_MATCH: {
    GET_MATCH_IDS_BY_PUUID: string;
    GET_MATCH_BY_ID: string;
  };
  TFT_STATUS_V1: {
    GET_PLATFORM_DATA: string;
  };
  TFT_SUMMONER: {
    GET_BY_ACCESS_TOKEN: string;
    GET_BY_PUUID: string;
  };
  TOURNAMENT_STUB_V5: {
    POST_CREATE_CODES: string;
    GET_TOURNAMENT_BY_CODE: string;
    GET_LOBBY_EVENTS_BY_TOURNAMENT_CODE: string;
    POST_CREATE_PROVIDER: string;
    POST_CREATE_TOURNAMENT: string;
  };
  TOURNAMENT_V5: {
    POST_CREATE_CODES: string;
    GET_TOURNAMENT_BY_CODE: string;
    PUT_TOURNAMENT_CODE: string;
    GET_TOURNAMENT_GAME_DETAILS: string;
    GET_LOBBY_EVENTS_BY_TOURNAMENT_CODE: string;
    POST_CREATE_PROVIDER: string;
    POST_CREATE_TOURNAMENT: string;
  };
  VAL_CONTENT: {
    GET_CONTENT: string;
  };
  VAL_MATCH: {
    GET_MATCH_BY_ID: string;
    GET_MATCHLIST_BY_PUUID: string;
    GET_RECENT_MATCHES_BY_QUEUE: string;
  };
  VAL_RANKED: {
    GET_LEADERBOARD_BY_QUEUE: string;
  };
  VAL_STATUS_V1: {
    GET_PLATFORM_DATA: string;
  };
}

export const METHODS = {
  ACCOUNT: {
    GET_BY_PUUID: "/riot/account/v1/accounts/by-puuid/:puuid",
    GET_BY_RIOT_ID: "/riot/account/v1/accounts/by-riot-id/:gameName/:tagLine",
    GET_BY_ACCESS_TOKEN: "/riot/account/v1/accounts/me",
    GET_ACTIVE_SHARD_FOR_PLAYER: "/riot/account/v1/active-shards/by-game/:game/by-puuid/:puuid",
  },
  CHAMPION_MASTERY: {
    GET_ALL_CHAMPIONS: "/lol/champion-mastery/v4/champion-masteries/by-puuid/:puuid",
    GET_CHAMPION_MASTERY: "/lol/champion-mastery/v4/champion-masteries/by-puuid/:puuid/by-champion/:championId",
    GET_TOP_CHAMPIONS: "/lol/champion-mastery/v4/champion-masteries/by-puuid/:puuid/top",
    GET_CHAMPION_MASTERY_SCORE: "/lol/champion-mastery/v4/scores/by-puuid/:puuid",
  },
  CHAMPION: {
    GET_CHAMPION_ROTATIONS: "/lol/platform/v3/champion-rotations",
  },
  CLASH: {
    GET_PLAYERS_BY_PUUID: "/lol/clash/v1/players/by-puuid/:puuid",
    GET_TEAM: "/lol/clash/v1/teams/:teamId",
    GET_TOURNAMENTS: "/lol/clash/v1/tournaments",
    GET_TOURNAMENT: "/lol/clash/v1/tournaments/:tournamentId",
    GET_TOURNAMENT_TEAM: "/lol/clash/v1/tournaments/by-team/:teamId",
  },
  LEAGUE_EXP: {
    GET_LEAGUE_ENTRIES: "/lol/league-exp/v4/entries/:queue/:tier/:division",
  },
  LEAGUE: {
    GET_CHALLENGER_BY_QUEUE: "/lol/league/v4/challengerleagues/by-queue/:queue",
    GET_ENTRIES_BY_PUUID: "/lol/league/v4/entries/by-puuid/:puuid",
    GET_ALL_ENTRIES: "/lol/league/v4/entries/:queue/:tier/:division",
    GET_GRANDMASTER_BY_QUEUE: "/lol/league/v4/grandmasterleagues/by-queue/:queue",
    GET_LEAGUE_BY_ID: "/lol/league/v4/leagues/:leagueId",
    GET_MASTER_BY_QUEUE: "/lol/league/v4/masterleagues/by-queue/:queue",
  },
  LOL_CHALLENGES: {
    GET_CONFIG: "/lol/challenges/v1/challenges/config",
    GET_PERCENTILES: "/lol/challenges/v1/challenges/percentiles",
    GET_CONFIG_BY_ID: "/lol/challenges/v1/challenges/:challengeId/config",
    GET_LEADERBOARD_BY_ID: "/lol/challenges/v1/challenges/:challengeId/leaderboards/by-level/:level",
    GET_PERCENTILES_BY_ID: "/lol/challenges/v1/challenges/:challengeId/percentiles",
    GET_PLAYER_DATA_BY_PUUID: "/lol/challenges/v1/player-data/:puuid",
  },
  LOL_STATUS: {
    GET_PLATFORM_DATA: "/lol/status/v4/platform-data",
  },
  LOR_DECK: {
    GET_DECKS_FOR_PLAYER: "/lor/deck/v1/decks/me",
    POST_CREATE_DECK_FOR_PLAYER: "/lor/deck/v1/decks/me",
  },
  LOR_INVENTORY: {
    GET_CARDS_OWNED_BY_PLAYER: "/lor/inventory/v1/cards/me",
  },
  LOR_MATCH: {
    GET_MATCH_IDS_BY_PUUID: "/lor/match/v1/matches/by-puuid/:puuid/ids",
    GET_MATCH_BY_ID: "/lor/match/v1/matches/:matchId",
  },
  LOR_RANKED: {
    GET_MASTER_TIER: "/lor/ranked/v1/leaderboards",
  },
  LOR_STATUS_V1: {
    GET_PLATFORM_DATA: "/lor/status/v1/platform-data",
  },
  MATCH_V5: {
    GET_IDS_BY_PUUID: "/lol/match/v5/matches/by-puuid/:puuid/ids",
    GET_MATCH_BY_ID: "/lol/match/v5/matches/:matchId",
    GET_MATCH_TIMELINE_BY_ID: "/lol/match/v5/matches/:matchId/timeline",
  },
  SPECTATOR_TFT_V5: {
    GET_GAME_BY_PUUID: "/lol/spectator/tft/v5/active-games/by-puuid/:puuid",
    GET_FEATURED_GAMES: "/lol/spectator/tft/v5/featured-games",
  },
  SPECTATOR: {
    GET_GAME_BY_PUUID: "/lol/spectator/v5/active-games/by-summoner/:puuid",
    GET_FEATURED_GAMES: "/lol/spectator/v5/featured-games",
  },
  SUMMONER: {
    GET_BY_RSO_PUUID: "/fulfillment/v1/summoners/by-puuid/:rsoPuuid",
    GET_BY_PUUID: "/lol/summoner/v4/summoners/by-puuid/:puuid",
    GET_BY_ACCESS_TOKEN: "/lol/summoner/v4/summoners/me",
  },
  TFT_LEAGUE: {
    GET_CHALLENGER: "/tft/league/v1/challenger",
    GET_ENTRIES_BY_PUUID: "/tft/league/v1/entries/by-puuid/:puuid",
    GET_ALL_ENTRIES: "/tft/league/v1/entries/:tier/:division",
    GET_GRANDMASTER: "/tft/league/v1/grandmaster",
    GET_LEAGUE_BY_ID: "/tft/league/v1/leagues/:leagueId",
    GET_MASTER: "/tft/league/v1/master",
    GET_TOP_RATED_LADDER_BY_QUEUE: "/tft/league/v1/rated-ladders/:queue/top",
  },
  TFT_MATCH: {
    GET_MATCH_IDS_BY_PUUID: "/tft/match/v1/matches/by-puuid/:puuid/ids",
    GET_MATCH_BY_ID: "/tft/match/v1/matches/:matchId",
  },
  TFT_STATUS_V1: {
    GET_PLATFORM_DATA: "/tft/status/v1/platform-data",
  },
  TFT_SUMMONER: {
    GET_BY_PUUID: "/tft/summoner/v1/summoners/by-puuid/:puuid",
    GET_BY_ACCESS_TOKEN: "/tft/summoner/v1/summoners/me",
  },
  TOURNAMENT_STUB_V5: {
    POST_CREATE_CODES: "/lol/tournament-stub/v5/codes",
    GET_TOURNAMENT_BY_CODE: "/lol/tournament-stub/v5/codes/:tournamentCode",
    GET_LOBBY_EVENTS_BY_TOURNAMENT_CODE: "/lol/tournament-stub/v5/lobby-events/by-code/:tournamentCode",
    POST_CREATE_PROVIDER: "/lol/tournament-stub/v5/providers",
    POST_CREATE_TOURNAMENT: "/lol/tournament-stub/v5/tournaments",
  },
  TOURNAMENT_V5: {
    POST_CREATE_CODES: "/lol/tournament/v5/codes",
    GET_TOURNAMENT_BY_CODE: "/lol/tournament/v5/codes/:tournamentCode",
    PUT_TOURNAMENT_CODE: "/lol/tournament/v5/codes/:tournamentCode",
    GET_TOURNAMENT_GAME_DETAILS: "/lol/tournament/v5/games/by-code/:tournamentCode",
    GET_LOBBY_EVENTS_BY_TOURNAMENT_CODE: "/lol/tournament/v5/lobby-events/by-code/:tournamentCode",
    POST_CREATE_PROVIDER: "/lol/tournament/v5/providers",
    POST_CREATE_TOURNAMENT: "/lol/tournament/v5/tournaments",
  },
  VAL_CONTENT: {
    GET_CONTENT: "/val/content/v1/contents",
  },
  VAL_MATCH: {
    GET_MATCH_BY_ID: "/val/match/v1/matches/:matchId",
    GET_MATCHLIST_BY_PUUID: "/val/match/v1/matchlists/by-puuid/:puuid",
    GET_RECENT_MATCHES_BY_QUEUE: "/val/match/v1/recent-matches/by-queue/:queue",
  },
  VAL_RANKED: {
    GET_LEADERBOARD_BY_QUEUE: "/val/ranked/v1/leaderboards/by-act/:actId",
  },
  VAL_STATUS_V1: {
    GET_PLATFORM_DATA: "/val/status/v1/platform-data",
  },
} as const satisfies METHODS;
