import PokeList from "./components/PokeList";
import PokeForm from "./components/PokeForm";

const App = () => {
  return (
    <article className="pt-6">
      <header className="flex flex-col gap-2 w-full px-4 z-50">
        <PokeForm />
      </header>
      <PokeList />
    </article>
  );
};

export default App;
