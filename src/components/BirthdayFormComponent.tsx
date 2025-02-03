import React, { useState } from 'react'
import { useNumberGenerator } from '../context/NumberGeneratorContext'
import { usePokemon } from '../context/PokemonContext';
import { useDisplayContext } from '../context/DisplayContext';

function BirthdayFormComponent() {
  const {display,setDisplay} = useDisplayContext();
  const [birthdate, setBirthdate] = useState("");
  const { generateNumber } = useNumberGenerator();
  const { fetchPokemon } = usePokemon();
  // Helper to format the input as DD/MM/YYYY.
  const formatInput = (value: string) => {
    // Ensure we only process up to 8 digits (DDMMYYYY)
    if (value.length > 8) {
      value = value.slice(0, 8);
    }

    // Insert slashes as needed.
    if (value.length > 4) {
      return `${value.substring(0, 2)}/${value.substring(2, 4)}/${value.substring(4)}`;
    } else if (value.length > 2) {
      return `${value.substring(0, 2)}/${value.substring(2)}`;
    }
    return value;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    // Remove any non-numeric characters.
    let rawValue = e.target.value.replace(/\D/g, "");
    // Format the value (insert slashes) and update state.
    const formattedValue = formatInput(rawValue);
    setBirthdate(formattedValue);
  };

  const handleBlur = () => {
    // Validate only if the input has reached full length "DD/MM/YYYY".
    if (birthdate.length !== 10) return;

    const [dayStr, monthStr, yearStr] = birthdate.split("/");
    const day = parseInt(dayStr, 10);
    const month = parseInt(monthStr, 10);
    const year = parseInt(yearStr, 10);
    const currentYear = new Date().getFullYear();

    // Validate month first.
    if (month < 1 || month > 12) {
      alert("Invalid month. Please enter a month between 01 and 12.");
      setBirthdate("");
      return;
    }

    // Determine maximum days in month (with a simple leap-year check for February)
    const isLeapYear = (year % 4 === 0 && (year % 100 !== 0 || year % 400 === 0));
    const maxDays = [31, isLeapYear ? 29 : 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

    if (day < 1 || day > maxDays[month - 1]) {
      alert(`Invalid day for month ${month}. Please enter a valid day.`);
      setBirthdate("");
      return;
    }

    if (year < 1900 || year > currentYear) {
      alert(`Invalid year. Please enter a year between 1900 and ${currentYear}.`);
      setBirthdate("");
      return;
    }
  };
     const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        const number= generateNumber(birthdate);
        
        fetchPokemon(number);
        setDisplay(!display);
  
  }
  return (
    <>
     {!display && <form onSubmit={handleSubmit} className=' w-80 flex flex-col justify-center items-center '>
      <label htmlFor="dateInput" className="block w-[80%] font-bold my-2 text-xl text-white text-center">
        Enter Your Birthdate <br /> (DD/MM/YYYY)
      </label>
      <input
        type="text"
        id="dateInput"
        value={birthdate}
        onChange={handleChange}
        onBlur={handleBlur}
        maxLength={10} // This accommodates the two slashes
        placeholder="DD/MM/YYYY"
        className="border p-2 rounded border-white text-white bg-slate-800 placeholder:text-white/80 "
        required
      />
      <button type="submit" className='text-white text-xl bg-blue-500 p-2 rounded-2xl not-[]: sm:hover:scale-110 mt-6 border-2 transition-transform duration-200'>Submit</button>
    </form>}
    </>
  );
}

export default BirthdayFormComponent;
