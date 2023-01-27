
interface SeedData {
  entries: SeedEntry[];
}

interface SeedEntry {
  description: string;
  status: string;
  createdAt: number;
}

export const seedData: SeedData = {
  entries: [
    {
      description: "Pendiente: Lorem ipsum dolor sit, amet consectetur adipisicing elit.",
      status: 'pending',
      createdAt: Date.now(),
    },
    {
      description: "En progreso: Adipisicing elit, lorem ipsum dolor sit amet consectetur.",
      status: 'in-progress',
      createdAt: Date.now() - 1000000,
    },
    {
      description: "Completada: Et ducimus, at iste reiciendis laboriosam sed quidem, veniam, quod repellendus fugiat dolorum ipsa beatae harum tenetur possimus molestias vel culpa! Porro.",
      status: 'finished',
      createdAt: Date.now() - 100000,
    },
  ]
}