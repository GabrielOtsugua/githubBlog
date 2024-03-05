import { useLocation } from "react-router-dom";
import { TitleAndDetails } from "./components/TitleAndDetails";
import { PublicationContainer } from "./styles";
import { motion } from "framer-motion";
import { Issue } from "../../@types/interfaces";

export function Publication() {
  window.scrollTo(0, 0);

  const location = useLocation();
  const issue: Issue = location.state.issue;

  const issueBodyPhrases = issue.body.split("\n");
  console.log(issueBodyPhrases);

  return (
    <PublicationContainer>
      <TitleAndDetails issue={issue} />

      <motion.main
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.3 }}
      >
        {issueBodyPhrases.map((phrase) => (
          <p>{phrase}</p>
        ))}
      </motion.main>
    </PublicationContainer>
  );
}
