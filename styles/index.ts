import { colors, fontSize } from "@/constants/Tokens";
import {  StyleSheet}from "react-native";
export const defaultStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
  text: {
    fontSize: fontSize.base,
    color: colors.text,
  },
});
export const utilsstyles=StyleSheet.create({})