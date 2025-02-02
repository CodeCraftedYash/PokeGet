import React, { createContext, useContext, useState } from 'react';
import { NumberGeneratorContextType } from '../types/context';

const NumberGeneratorContext = createContext<NumberGeneratorContextType | undefined>(undefined);

export const NumberGeneratorProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [uniqueNumber, setUniqueNumber] = useState<number | null>(null);

  const generateNumber = (date: string): number => {
    const [year, month, day] = date.split('/').map(Number);
    const number = (day * month + year + 128) % 151;
    setUniqueNumber(number);
    return number;
  };

  return (
    <NumberGeneratorContext.Provider value={{ generateNumber, uniqueNumber }}>
      {children}
    </NumberGeneratorContext.Provider>
  );
};

export const useNumberGenerator = () => {
  const context = useContext(NumberGeneratorContext);
  if (!context) {
    throw new Error('useNumberGenerator must be used within a NumberGeneratorProvider');
  }
  return context;
};