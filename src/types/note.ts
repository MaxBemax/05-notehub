export type NoteTag = 'work' | 'personal' | 'meeting' | 'shopping' | 'todo';

export interface Note {
  id: string;
  title: string;
  content: string;
  createdAt: string;
  updatedAt: string;
  tag: NoteTag;
}

export interface CreateNoteFields {
  title: string;
  content: string;
  tag?: NoteTag;
}

export interface FetchNotesResponse {
  notes: Note[];
  totalPages: number;
}
