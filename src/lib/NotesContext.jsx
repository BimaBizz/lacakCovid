import React, { createContext, useState, useContext, useEffect } from 'react';
import Cookies from 'js-cookie';

const NotesContext = createContext();

export const NotesProvider = ({ children }) => {
    const [notes, setNotes] = useState({});

    useEffect(() => {
        const storedNotes = Cookies.get('notes');
        if (storedNotes) {
            const parsedNotes = JSON.parse(storedNotes);
            if (Object.keys(parsedNotes).length > 0) {
                setNotes(parsedNotes);
            }
        }
    }, []);

    useEffect(() => {
        if (Object.keys(notes).length > 0) {
            Cookies.set('notes', JSON.stringify(notes), { expires: 7 });
        }
    }, [notes]);

    const addNote = (country, note) => {
        setNotes(prevNotes => ({
            ...prevNotes,
            [country]: [...(prevNotes[country] || []), note]
        }));
    };

    const deleteNote = (country, noteIndex) => {
        setNotes(prevNotes => ({
            ...prevNotes,
            [country]: prevNotes[country].filter((_, index) => index !== noteIndex)
        }));
    };

    return (
        <NotesContext.Provider value={{ notes, addNote, deleteNote }}>
            {children}
        </NotesContext.Provider>
    );
};

export const useNotes = () => useContext(NotesContext);
