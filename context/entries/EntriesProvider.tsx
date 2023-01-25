import { Entry } from "@/interfaces";
import { FC, ReactNode, useReducer } from "react";
import { v4 as uuidv4 } from 'uuid';
import { EntriesContext, entriesReducer } from "./";

export interface EntriesState {
  entries: Entry[];
}

const ENTRIES_INITIAL_STATE: EntriesState = {
  entries: [
    {
      _id: uuidv4(),
      description: "Pendiente: Lorem ipsum dolor sit, amet consectetur adipisicing elit.",
      status: 'pending',
      createdAt: Date.now(),
    },
    {
      _id: uuidv4(),
      description: "En progreso: Adipisicing elit, lorem ipsum dolor sit amet consectetur.",
      status: 'in-progress',
      createdAt: Date.now() - 1000000,
    },
    {
      _id: uuidv4(),
      description: "Completada: Et ducimus, at iste reiciendis laboriosam sed quidem, veniam, quod repellendus fugiat dolorum ipsa beatae harum tenetur possimus molestias vel culpa! Porro.",
      status: 'finished',
      createdAt: Date.now() - 100000,
    },
  ]
}

export const EntriesProvider: FC<{ children: ReactNode }> = ({ children }) => {

  const [state, dispatch] = useReducer(entriesReducer, ENTRIES_INITIAL_STATE);

  return (
    <EntriesContext.Provider
      value={{
        ...state
      }}
    >
      {children}
    </EntriesContext.Provider>
  )
}