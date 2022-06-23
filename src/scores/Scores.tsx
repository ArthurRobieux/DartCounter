import { FontAwesome } from "@expo/vector-icons";
import { Text, View } from "react-native";

import { styles } from "./styles";

export const Scores = () => {
  return (
    <View style={styles.scores}>
      <FontAwesome
        size={60}
        style={{ marginBottom: 24 }}
        name="trophy"
        color="gray"
      />
      <Text>Vous retrouverez ici les scores de vos parties.</Text>
    </View>
  );
};
