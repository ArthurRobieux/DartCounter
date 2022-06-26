import { ReactNode } from "react";
import { Text } from "react-native";

import { styles } from "./styles";

type Props = { children: ReactNode };

export const Title = ({ children }: Props) => {
  return <Text style={styles.title}>{children}</Text>;
};
