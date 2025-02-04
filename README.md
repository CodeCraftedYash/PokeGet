data flow

Birthday input → Number generation → Pokemon fetching → Display
# Birthday Pokémon Generator 🎂⚡  
[![Vercel Deployed](https://img.shields.io/badge/Deployed%20on-Vercel-black?style=flat&logo=vercel)](https://your-vercel-link.vercel.app)  

A React + TypeScript app that fetches Pokémon data from [PokeAPI](https://pokeapi.co/) based on birthday inputs. Built to master **data fetching**, **multi-context state management**, and **TypeScript generics**.

---

## ✨ Features  
- **PokeAPI Integration**: Fetches Pokémon data using calculated IDs.  
- **Multi-Context Architecture**:  
  - `PokemonContext`: Manages Pokémon data fetching & state.  
  - `NumberGeneratorContext`: Handles birthday-to-ID conversion logic.  
  - `DisplayContext`: Controls UI visibility states (e.g., retry button).  
- **Type-Safe Components**: Strong typing for contexts, props, and API responses.  
- **Responsive UI**: Mobile-friendly layout with Tailwind CSS.  
- **Error Handling**: Retry mechanism for failed operations.  

---

## 🛠 Tech Stack  
- **Core**: React 18 + TypeScript  
- **API**: [PokeAPI](https://pokeapi.co/)  
- **State Management**: React Context API  
- **Styling**: Tailwind CSS  
- **Build Tool**: Vite  
- **Hosting**: Vercel  

---

## 🚀 Installation  

1. Clone the repository:  
   ```bash  
   git clone https://github.com/your-username/birthday-pokemon-generator.git  

2. Install dependencies:
   ```bash
 
   npm install  
   
3. Start the development server:
   ```bash
   npm run dev  

---

## 🗺 System Architecture  

1. **User** submits birthday via `BirthdayFormComponent`.  
2. `NumberGeneratorContext` converts the birthday to a unique ID.  
3. `PokemonContext` fetches Pokémon data from PokeAPI using the ID.  
4. `PokemonDisplay` renders the fetched Pokémon data.  
5. `DisplayContext` manages the visibility of the retry button.  


---
## 🧠 Key Implementation Details

#### Context Architecture
    
    <DisplayContextProvider>  
      <NumberGeneratorProvider>  
        <PokemonProvider>  
           {/* App components */}  
        </PokemonProvider>  
      </NumberGeneratorProvider>  
    </DisplayContextProvider>  


  #### TypeScript Generics in API Fetch
       ```
    // PokemonContext.ts  
       interface PokemonData {  
           id: number;  
           name: string;  
           types: Array<{ type: { name: string } }>;  
     }  

       const fetchPokemon = async <T extends PokemonData>(id: number): Promise<T> => {  
         const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);  
         return res.json();  
       };  

       ```

     
---
## 💡 Lessons Learned

##### Context Composition: Avoid provider nesting issues through component separation.

##### TypeScript Generics: Reusable and type-safe context factories.

##### UI-State Syncing: Coordinating loading states across multiple contexts.

##### Mobile-First Design: Implementing responsive layouts with Tailwind CSS.