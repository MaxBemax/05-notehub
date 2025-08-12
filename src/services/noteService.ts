import axios from 'axios';
import type { CreateNoteFields, FetchNotesResponse, Note } from '../types/note';

const BASE_URL = 'https://notehub-public.goit.study/api/notes';
const API_TOKEN = import.meta.env.VITE_NOTEHUB_TOKEN;

if (!API_TOKEN) {
  throw new Error('VITE_NOTEHUB_TOKEN is not defined');
}

const headers = {
  Authorization: `Bearer ${API_TOKEN}`,
};

export async function fetchNotes(
  page: number = 1,
  perPage: number = 12,
  search: string = ''
): Promise<FetchNotesResponse> {
  const { data } = await axios.get(BASE_URL, {
    headers,
    params: {
      page,
      perPage,
      search,
    },
  });
  return data;
}

export async function createNote(note: CreateNoteFields): Promise<Note> {
  const { data } = await axios.post(BASE_URL, note, { headers });
  return data;
}

export async function deleteNote(id: string): Promise<Note> {
  const { data } = await axios.delete(`${BASE_URL}/${id}`, { headers });
  return data;
}
