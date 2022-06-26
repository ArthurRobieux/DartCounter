import { useContext, useEffect, useState } from "react";
import { Text, View } from "react-native";
import { Feather } from "@expo/vector-icons";

import { styles } from "./styles";
import { Context } from "../../context";

export const Game = () => {
  const context = useContext(Context);

  const [multiplier, setMultiplier] = useState(1);

  const [currentTeam, setCurrentTeam] = useState(0);
  const [scores, setScores] = useState<number[]>([]);
  const [currentDarts, setCurrentDarts] = useState<number[][]>([]);

  const [win, setWin] = useState<string | null>(null);

  useEffect(() => {
    const s: number[] = [];
    const d: number[][] = [];

    context.teams.forEach(() => {
      s.push(301);
      d.push([]);
    });

    setScores(s);
    setCurrentDarts(d);
  }, []);

  const changeTeam = () => {
    setCurrentTeam(
      currentTeam + 1 < context.teams.length ? currentTeam + 1 : 0
    );
  };

  const onPress = (value: number) => {
    const v = value * ([25, 50].includes(value) ? 1 : multiplier);

    const s = [...scores];
    s[currentTeam] -= v;
    setScores(s);

    let d = [...currentDarts];
    if (d[currentTeam].length < 3) d[currentTeam].push(v);
    else d[currentTeam] = [v];
    setCurrentDarts(d);

    if (d[currentTeam].length === 3) changeTeam();

    setMultiplier(1);
  };

  useEffect(() => {
    if (scores[currentTeam] === 0) setWin(`Equipe ${currentTeam + 1}`);
    if (scores[currentTeam] < 0) {
      let newScores = scores;
      currentDarts[currentTeam].forEach((d) => (newScores[currentTeam] += d));
      setScores(newScores);

      let newDarts = [...currentDarts];
      newDarts[currentTeam] = [];
      setCurrentDarts(newDarts);

      changeTeam();
    }
  }, [scores]);

  if (!context.teams.length || !scores.length || !currentDarts.length)
    return (
      <View style={styles.game}>
        <Text style={styles.score}>Pas d'équipe participante.</Text>
      </View>
    );

  if (win)
    return (
      <View style={styles.game}>
        <Text style={styles.score}>Félicitations {win},</Text>
        <Text style={styles.score}>Vous avez gagné !</Text>
      </View>
    );

  return (
    <View style={styles.game}>
      <Feather name="target" size={60} color="gray" style={styles.icon} />

      <Text style={styles.score}>Equipe {currentTeam + 1}</Text>
      <Text style={styles.score}>Score restant : {scores[currentTeam]}</Text>

      {context.teams.map((_, teamIndex) => (
        <Text key={teamIndex}>
          Equipe {teamIndex + 1} : {scores[teamIndex]}
        </Text>
      ))}

      <View style={styles.dartList}>
        {currentDarts[currentTeam].map((d, i) => (
          <Text style={styles.dart} key={i}>
            {d}
          </Text>
        ))}
      </View>

      <View style={styles.multiplierList}>
        {[...Array(3).keys()].map((index) => (
          <Text
            style={[
              styles.multiplier,
              multiplier === index + 1 && styles.selected,
            ]}
            key={index + 1}
            onPress={() => setMultiplier(index + 1)}
          >
            X {index + 1}
          </Text>
        ))}
      </View>

      <View style={styles.valueList}>
        {[...Array(20).keys()].map((index) => (
          <Text
            onPress={() => onPress(index + 1)}
            style={styles.value}
            key={index + 1}
          >
            {index + 1}
          </Text>
        ))}
      </View>

      <View style={styles.valueList}>
        <Text onPress={() => onPress(25)} style={styles.value}>
          25
        </Text>
        <Text onPress={() => onPress(50)} style={styles.value}>
          50
        </Text>
      </View>
    </View>
  );
};
