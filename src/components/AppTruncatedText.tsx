import React from "react";
import { Text } from "react-native";

const MAX_CHARACTERS = 19; // Maximum number of characters to display

const AppTruncatedText = ({ text }: any) => {
  // Function to truncate the text
  const truncateText = (text: string, maxLength: number) => {
    if (text.length <= maxLength) {
      return text;
    }
    return text.substring(0, maxLength) + "...";
  };

  const truncatedText = truncateText(text, MAX_CHARACTERS);

  return <Text>{truncatedText}</Text>;
};

export default AppTruncatedText;
