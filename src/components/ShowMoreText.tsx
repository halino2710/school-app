import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React, { useState } from "react";

const ShowMoreText = ({
  text,
  maxLength,
  width,
  numOfLines,
  lineheight,
}: any) => {
  const [showFullText, setShowFullText] = useState(false);

  const toggleShowText = () => {
    setShowFullText(!showFullText);
  };

  return (
    <TouchableOpacity onPress={toggleShowText} style={{ padding: 10 }}>
      <Text
        numberOfLines={numOfLines}
        style={{ width: width, lineHeight: lineheight }}
      >
        {showFullText ? text : `${text.slice(0, maxLength)}...`}
      </Text>
    </TouchableOpacity>
  );
};

// const AppText = () => {
//   const LongText =
//     "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi tempora impedit aut dolores iure eum ratione amet, natus dolor dolorem asperiores maiores vitae blanditiis beatae harum iusto, deserunt quos nisi. Fugit remfuga, est perferendis iusto minus magnam, tempora dolore voluptas eligendieum provident saepe. Corporis officia impedit nihil fugit?";

//   return <ShowMoreText text={LongText} maxLength={80} />;
// };

export default ShowMoreText;
