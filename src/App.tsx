import { PokemonProvider } from './context/PokemonContext';
import { NumberGeneratorProvider } from './context/NumberGeneratorContext';
import BirthdayFormComponent from './components/BirthdayFormComponent';
import PokemonDisplay from './components/PokemonDisplay';
import { DisplayContextProvider, useDisplayContext } from './context/DisplayContext';
//import Test from './test/Test';

function App() {
  // useDisplayContext() should be used after the provider is wrapped around the component
  return (
    <DisplayContextProvider>
      <NumberGeneratorProvider>
        <PokemonProvider>
          <AppContent />
        </PokemonProvider>
      </NumberGeneratorProvider>
    </DisplayContextProvider>
  );
}

const AppContent: React.FC = () => {
  // Now, use the display context inside the provider
  const { display, setDisplay } = useDisplayContext();

  return (
    <div className="bg-black w-full min-h-screen flex flex-col justify-start items-center p-2 border-b-2 pt-4 relative">
      <div className="flex flex-col items-center justify-center gap-2 ">
        <h1 className="text-white text-3xl font-bold border-b-2 p-2 border-b-blue-400 ">
          Get Your Pokemon
        </h1>
        <BirthdayFormComponent />
        <div className="mt-8">
          <PokemonDisplay />
        </div>
        <button
          className="text-white bg-blue-500 p-1 text-sm rounded-xl border-2 absolute bottom-40 "
          onClick={() => {
            setDisplay(!display); // This toggles the display state
          }}
        >
          Retry
        </button>
      </div>
      <footer className="w-full bg-gray-900 text-white text-center py-4 absolute bottom-0">
      <p className="text-sm">© {new Date().getFullYear()} Yash Kr. Mishra. All rights reserved.</p>
    </footer>
    </div>
  );
};

export default App;
