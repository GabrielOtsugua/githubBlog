import { useEffect, useState } from "react";
import { Profile } from "./components/Profile";
import { PublicationCard } from "./components/PublicationCard";
import { HomeContainer, HomeContainerError } from "./styles";
import { motion } from "framer-motion";
import { Issue } from "../../@types/interfaces";

export function Home() {
  const [issues, setIssues] = useState<Issue[]>();
  const [search, setSearch] = useState<string | undefined>("");

  const localStorageSearch = localStorage.getItem("search");

  const getIssues = async () => {
    const response = await fetch(
      `https://api.github.com/search/issues?q=${localStorageSearch}%20repo:GabrielOtsugua/githubBlog`
    );
    const data = await response.json();

    setIssues(data.items);
  };

  // ATUALIZA O SEARCH COM OS ITENS DO LOCALSTORAGE, AO ATUALIZAR A PAGINA
  useEffect(() => {
    const storedSearch = localStorage.getItem("search");
    storedSearch && setSearch(storedSearch);
  }, []);

  // DEFINE O LOCALSTORAGE, AO ATUALIZAR O SEARCH
  useEffect(() => {
    search && search.length > 0
      ? localStorage.setItem("search", search)
      : localStorage.setItem("search", "");
  }, [search]);

  useEffect(() => {
    getIssues();
  }, []);

  return (
    <HomeContainer>
      <Profile />

      {issues ? (
        <>
          <motion.form
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.2, delay: 0.3 }}
          >
            <label htmlFor="">
              <h3>Publicações</h3>
              <p>
                {issues.length === 1
                  ? `${issues.length} publicação`
                  : `${issues.length} publicações`}
              </p>
            </label>

            <input
              type="text"
              placeholder="Buscar conteúdo"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </motion.form>

          <motion.main>
            {issues?.map((item, i) => (
              <PublicationCard key={item.number} index={i} issue={item} />
            ))}
          </motion.main>
        </>
      ) : (
        <HomeContainerError
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
        >
          <h2>Muitas solicitações feitas em pouco tempo</h2>

          <strong>Aguarde um minuto e atualize a página.</strong>

          <p>
            A taxa de limite de requisições é uma prática comum em muitas APIs,
            incluindo a API do GitHub, para evitar abusos e garantir um uso
            equitativo dos recursos do servidor.
          </p>
        </HomeContainerError>
      )}
    </HomeContainer>
  );
}
