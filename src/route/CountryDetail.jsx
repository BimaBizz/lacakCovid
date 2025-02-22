import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { callApi } from '../lib/HookApi';
import { useNotes } from '../lib/NotesContext';
import Navbar from '../component/Navbar';

const CountryDetail = () => {
    const { countryName } = useParams();
    const [countryData, setCountryData] = useState(null);
    const { notes, deleteNote, addNote } = useNotes();
    const [editingNote, setEditingNote] = useState({ index: null, text: '' });
    const [newNote, setNewNote] = useState('');

    useEffect(() => {
        const fetchData = async () => {
            const result = await callApi();
            const country = result.find(c => c.country === countryName);
            setCountryData(country);
        };
        fetchData();
    }, [countryName]);

    const handleEditNote = (index, text) => {
        setEditingNote({ index, text });
    };

    const handleSaveNote = () => {
        deleteNote(countryName, editingNote.index);
        addNote(countryName, editingNote.text);
        setEditingNote({ index: null, text: '' });
    };

    const handleAddNewNote = () => {
        addNote(countryName, newNote);
        setNewNote('');
    };

    if (!countryData) {
        return <div className='max-w-7xl mx-auto p-4 flex items-center justify-center h-screen'>Loading...</div>;
    }

    return (
        <div className="max-w-7xl mx-auto p-4">
            <Navbar title={countryData.country}/>
            <div className='grid grid-cols-2 gap-4 items-center max-w-5xl mx-auto my-5'>
            <img src={countryData.countryInfo.flag} alt={`flag-${countryData.country}`} width={60} height={40} className='h-52 w-auto'/>
            <div className='flex flex-col items-center'>
                <p>Cases: {countryData.cases}</p>
                <p>Deaths: {countryData.deaths}</p>
                <p>Recovered: {countryData.recovered}</p>
            </div>
            </div>
            {notes[countryName] && notes[countryName].length > 0 && (
                <div className="mt-10">
                    <h2 className="text-xl font-bold mb-2">Notes</h2>
                    <ul className="list-disc list-inside space-y-2">
                        {notes[countryName].map((note, index) => (
                            <li key={index} className="flex justify-between items-center">
                                {editingNote.index === index ? (
                                    <input
                                        type="text"
                                        value={editingNote.text}
                                        onChange={(e) => setEditingNote({ ...editingNote, text: e.target.value })}
                                        className="input input-bordered w-full"
                                    />
                                ) : (
                                    <span>{note}</span>
                                )}
                                <div className="flex gap-2">
                                    {editingNote.index === index ? (
                                        <button className="btn btn-sm btn-primary" onClick={handleSaveNote}>Save</button>
                                    ) : (
                                        <button className="btn btn-sm btn-secondary" onClick={() => handleEditNote(index, note)}>Edit</button>
                                    )}
                                    <button className="btn btn-sm btn-error" onClick={() => deleteNote(countryName, index)}>Delete</button>
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>
            )}
            <div className="mt-4">
                <h2 className="text-xl font-bold mb-2">Add New Note</h2>
                <textarea
                    className="textarea textarea-bordered w-full mb-2"
                    value={newNote}
                    onChange={(e) => setNewNote(e.target.value)}
                    placeholder="Enter your note here"
                />
                <button className="btn btn-primary" onClick={handleAddNewNote}>Add Note</button>
            </div>
        </div>
    );
};

export default CountryDetail;
