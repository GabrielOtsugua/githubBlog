import { Profile } from "./components/Profile";
import { PublicationCard } from "./components/PublicationCard";
import { HomeContainer } from "./styles";
import { motion } from "framer-motion";

export function Home() {
  return (
    <HomeContainer>
      <Profile />

      <motion.form
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.2, delay: 0.3 }}
      >
        <label htmlFor="">
          <h3>Publicações</h3>
          <p>6 publicações</p>
        </label>

        <input type="text" placeholder="Buscar conteúdo" />
      </motion.form>

      <motion.main>
        {[1, 2, 3, 4].map((_item, i) => (
          <PublicationCard index={i} />
        ))}
      </motion.main>
    </HomeContainer>
  );
}
