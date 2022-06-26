import { useContext, useState } from "react";
import {
  Button,
  Pressable,
  ScrollView,
  Text,
  TextInput,
  View,
} from "react-native";
import { Context } from "../../../context";

import { styles } from "./styles";

export const TeamCreation = () => {
  const context = useContext(Context);

  const addTeam = () => {
    const newTeams = [...context.teams];
    newTeams.push({
      players: [""],
    });
    context.setTeams(newTeams);
  };

  const addPlayer = (teamIndex: number) => {
    const newTeams = [...context.teams];
    newTeams[teamIndex].players.push("");
    context.setTeams(newTeams);
  };

  const reset = () => {
    context.setTeams([{ players: [""] }]);
  };

  return (
    <ScrollView style={styles.container}>
      {context.teams.map((team, teamIndex) => (
        <View key={teamIndex} style={styles.team}>
          <Text style={styles.teamName}>Equipe {teamIndex + 1}</Text>
          <View>
            {team.players.map((p, playerIndex) => (
              <View key={playerIndex}>
                <TextInput
                  placeholder={`Joueur ${playerIndex + 1}`}
                  value={p}
                  onChangeText={(e) => {
                    const newTeams = [...context.teams];
                    newTeams[teamIndex].players[playerIndex] = e;
                    context.setTeams(newTeams);
                  }}
                  style={styles.input}
                />
              </View>
            ))}
            <Button
              onPress={() => addPlayer(teamIndex)}
              title="+ Ajouter un Joueur"
            />
          </View>
        </View>
      ))}

      <Button onPress={addTeam} title="+ Ajouter une équipe" />
      <Pressable onPress={reset} style={styles.button}>
        <Text>Rénitialiser</Text>
      </Pressable>
    </ScrollView>
  );
};
