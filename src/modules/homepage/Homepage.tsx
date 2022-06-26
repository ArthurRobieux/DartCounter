import { FontAwesome } from "@expo/vector-icons";
import { Button, Text, View } from "react-native";
import { RootTabScreenProps } from "../../types";

import { styles } from "./styles";

export const Homepage = ({ navigation }: RootTabScreenProps<"Home">) => {
  return (
    <View style={styles.home}>
      <FontAwesome
        size={60}
        style={{ marginBottom: 24 }}
        name="home"
        color="gray"
      />
      <Text style={{ marginBottom: 24 }}>
        Bienvenue dans mon application DartCounter !
      </Text>
      <Button
        title="+ Nouvelle Partie"
        onPress={() => navigation.navigate("CreateGame")}
      />
    </View>
  );
};
