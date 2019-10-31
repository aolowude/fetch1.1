import * as React from "react";
import { LoremIpsum } from "react-lorem-ipsum";
import { motion, useInvertedScale } from "framer-motion";
import GridHorizontal from '../Grid/GridHorizontal';

export const ContentPlaceholder = React.memo(() => {
  const inverted = useInvertedScale();
  return (
    <motion.div
      className="content-container"
      style={{ ...inverted, originY: 0, originX: 0 }}
    >
    	<h2>Summary of what to look out for:</h2>
      <LoremIpsum p={1} avgWordsPerSentence={6} avgSentencesPerParagraph={4} />
      <br />
    	<GridHorizontal />
    	<br />
    	<br />
    	<br />
    	<br />
    	<br />
    	<br />
    	<br />
    	<br />
    	<br />
    	<br />
    </motion.div>
  );
});
