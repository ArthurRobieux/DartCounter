import { useState } from "react";
import { Button, Text, TextInput, View } from "react-native";

import { styles } from "./styles";

export const NewGame = () => {
  const [text, setText] = useState("");
  const [next, setNext] = useState(false);

  const onSubmit = () => {
    setNext(true);
  };

  const onCancel = () => {
    setNext(false);
  };

  return (
    <View style={styles.newgame}>
      <View style={styles.separator} />

      {next ? (
        <>
          <Text style={{ padding: 10, fontSize: 24 }}>Bienvenue {text}</Text>
          <Button title="Recommencer" onPress={onCancel} />
        </>
      ) : (
        <>
          <TextInput
            style={{ height: 40, textAlign: "center" }}
            placeholder="Entrer un nom de joueur"
            onChangeText={(newText) => setText(newText)}
            defaultValue={text}
          />

          <Button title="C'est parti !" onPress={onSubmit} />
        </>
      )}
    </View>
  );
};
