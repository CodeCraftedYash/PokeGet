<<<<<<< HEAD

=======
>>>>>>> f0ebae2 (modified files)
import { PokemonProvider } from './context/PokemonContext';
import { NumberGeneratorProvider } from './context/NumberGeneratorContext';
import BirthdayFormComponent from './components/BirthdayFormComponent';
import PokemonDisplay from './components/PokemonDisplay';
//import Test from './test/Test';

function App() {
  return (
    <NumberGeneratorProvider>
      <PokemonProvider>
        <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
          <div className="max-w-md mx-auto bg-white rounded-lg shadow-lg p-8">
            <h1 className="text-3xl font-bold text-center text-gray-900 mb-8">
              Birthday Pokemon Finder
            </h1>
            <BirthdayFormComponent />
            <div className="mt-8">
              <PokemonDisplay />
            </div>
          </div>
        </div>
        {/* <Test /> */}
      </PokemonProvider>
    </NumberGeneratorProvider>
  );
}

export default App;
