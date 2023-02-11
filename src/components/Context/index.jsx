import { createContext, useContext, useState } from 'react';

const DataContext = createContext();

export const useDataContext = () => {
  return useContext(DataContext);
};

export const DataProvider = ({ children }) => {
  const [data, setData] = useState([
    {
      characterName: null,
      sex: null,
      age: null,
      someFood: null,
      residence: null,
      personality: null,
      hobbies: null,
      job: null,
    },
  ]);

  const value = {
    data,
    setData,
  };

  return <DataContext.Provider value={value}>{children}</DataContext.Provider>;
};
