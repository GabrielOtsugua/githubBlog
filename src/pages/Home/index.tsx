import { Profile } from "./components/Profile";
import { PublicationCard } from "./components/PublicationCard";
import { HomeContainer } from "./styles";

export function Home() {
  return (
    <HomeContainer>
      <Profile />

      <form>
        <label htmlFor="">
          <h3>Publicações</h3>
          <p>6 publicações</p>
        </label>

        <input type="text" placeholder="Buscar conteúdo" />
      </form>

      <main>
        {[1, 2, 3, 4].map(() => (
          <PublicationCard />
        ))}
      </main>
    </HomeContainer>
  );
}
