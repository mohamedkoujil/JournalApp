import { collection, doc, setDoc } from "firebase/firestore/lite";
import { FirebaseDB } from "../../firebase/config";
import {
  addNewEmptyNote,
  setActiveNote,
  setNotes,
  setSaving,
  updateNote,
} from "./journalSlice";
import { loadNotes } from "../../helpers";

export const startNewNote = () => {
  return async (dispatch, getState) => {
    console.log("new note");

    const { uid } = getState().auth;

    const newNote = {
      title: "",
      body: "",
      date: new Date().getTime(),
      //   imageUrl: [], //array of urls
    };

    const newDoc = doc(collection(FirebaseDB, `${uid}/journal/notes`));
    await setDoc(newDoc, newNote);

    newNote.id = newDoc.id;

    dispatch(addNewEmptyNote(newNote));
    dispatch(setActiveNote(newNote));
  };
};

export const startLoadingNotes = () => {
  return async (dispatch, getState) => {
    const { uid } = getState().auth;
    const notes = await loadNotes(uid);

    dispatch(setNotes(notes));
  };
};

export const startSavingNote = () => {
  return async (dispatch, getState) => {
    dispatch(setSaving());

    const { active: note } = getState().journal;
    const { uid } = getState().auth;

    const noteToFirestore = { ...note };
    delete noteToFirestore.id;

    const noteRef = doc(FirebaseDB, `${uid}/journal/notes/${note.id}`);
    await setDoc(noteRef, noteToFirestore, { merge: true });
    dispatch(updateNote(note));
  };
};
