import { TitleAndDetails } from "./components/TitleAndDetails";
import { PublicationContainer } from "./styles";

export function Publication() {
  return (
    <PublicationContainer>
      <TitleAndDetails />

      <main>
        <p>
          Programming languages all have built-in data structures, but these
          often differ from one language to another. This article attempts to
          list the built-in data structures available in JavaScript and what
          properties they have. These can be used to build other data
          structures. Wherever possible, comparisons with other languages are
          drawn.
        </p>

        <strong>Dynamic typing</strong>

        <p>
          JavaScript is a loosely typed and dynamic language. Variables in
          JavaScript are not directly associated with any particular value type,
          and any variable can be assigned (and re-assigned) values of all
          types:
        </p>

        <code>
          <p>let foo = 42;</p>
          <p>foo = 'bar';</p>
          <p>foo = true;</p>
        </code>
      </main>
    </PublicationContainer>
  );
}
