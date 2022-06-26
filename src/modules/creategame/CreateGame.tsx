import { Button } from "react-native";
import { TeamCreation } from "./TeamCreation";
import { Page, Separator, Title } from "../../common-ui";
import { RootTabScreenProps } from "../../types";
import { Context } from "../../context";

export const CreateGame = ({
  navigation,
}: RootTabScreenProps<"CreateGame">) => {
  const onSubmit = () => {
    navigation.navigate("Game");
  };

  return (
    <Page>
      <Title>Création d'une nouvelle partie</Title>

      <Separator />
      <TeamCreation />

      <Separator />

      <Button title="C'est parti !" onPress={onSubmit} />
    </Page>
  );
};
