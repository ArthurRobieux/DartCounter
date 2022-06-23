import { useState } from "react";
import { Button, TextInput, View } from "react-native";
import { RootTabScreenProps } from "../../App";

import { styles } from "./styles";

export const CreateGame = ({
  navigation,
}: RootTabScreenProps<"CreateGame">) => {
  const [form, setForm] = useState({ name: "" });

  const onSubmit = () => {
    navigation.navigate("Game");
  };

  return (
    <View style={styles.newgame}>
      <View style={styles.separator} />

      <TextInput
        style={{ height: 40, textAlign: "center" }}
        placeholder="Entrer un nom de joueur"
        onChangeText={(e) => setForm({ ...form, name: e })}
        defaultValue={form.name}
      />

      <Button title="C'est parti !" onPress={onSubmit} disabled={!form.name} />
    </View>
  );
};
