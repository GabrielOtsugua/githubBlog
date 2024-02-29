import { Outlet } from "react-router-dom";
import { Header } from "../../components/Header";
import { Container } from "./styles";
import { MobileHeader } from "../../components/MobileHeader";

export function DefaultLayout() {
  return (
    <>
      <Header />
      <MobileHeader />

      <Container>
        <Outlet />
      </Container>
    </>
  );
}
