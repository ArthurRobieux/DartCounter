import { Button, Text, View } from "react-native";
import { RootTabScreenProps } from "../../App";

import { styles } from "./styles";

export const Homepage = ({ navigation }: RootTabScreenProps<"Home">) => {
  return (
    <View style={styles.home}>
      <Button
        title="+ Nouvelle Partie"
        onPress={() => navigation.navigate("NewGame")}
      />
    </View>
  );
};
