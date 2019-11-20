import { Client } from 'src/app/shared/models/client';

export const fakeClients: Client[] = [
  new Client({
    id: 'sdlkjf',
    name: 'Modis',
    email: '123@toto.ru'
  }),
  new Client({
    id: 'ldskjgfl',
    name: 'Capgemini',
    email: '123@capgemini.ru'
  }),
];
