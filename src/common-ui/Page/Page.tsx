import { ReactNode } from "react";
import { View } from "react-native";

import { styles } from "./styles";

type Props = { children: ReactNode };

export const Page = ({ children }: Props) => {
  return <View style={styles.page}>{children}</View>;
};
