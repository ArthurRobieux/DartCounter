import { useEffect, useState } from "react";
import { Text, View } from "react-native";
import { Feather } from "@expo/vector-icons";

import { styles } from "./styles";

export const Game = () => {
  const [score, setScore] = useState(301);
  const [win, setWin] = useState(false);
  const [multiplier, setMultiplier] = useState(1);
  const [currentDarts, setCurrentDarts] = useState<number[]>([]);

  const onPress = (value: number) => {
    const v = value * multiplier;

    setScore(score - v);

    let d = [...currentDarts];
    if (d.length < 3) d.push(v);
    else d = [v];
    setCurrentDarts(d);
    setMultiplier(1);
  };

  useEffect(() => {
    if (score === 0) setWin(true);
    if (score < 0) {
      let newScore = score;
      currentDarts.forEach((d) => (newScore += d));
      setScore(newScore);
      setCurrentDarts([]);
    }
  }, [score]);

  if (win)
    return (
      <View style={styles.game}>
        <Text style={styles.score}>Félicitations, partie terminée !</Text>
      </View>
    );

  return (
    <View style={styles.game}>
      <Feather name="target" size={60} color="gray" style={styles.icon} />
      <Text style={styles.score}>Score restant : {score}</Text>

      <View style={styles.dartList}>
        {currentDarts.map((d, i) => (
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
