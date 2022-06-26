import { createContext } from "react";
import { Team } from "./types";

export const Context = createContext({
  teams: [] as Team[],
  setTeams: "" as any,
});
