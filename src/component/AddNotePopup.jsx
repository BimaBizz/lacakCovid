import React, { useState } from 'react';
import { useNotes } from '../lib/NotesContext';

const AddNotePopup = ({ country, onClose }) => {
    const [note, setNote] = useState('');
    const { addNote } = useNotes();

    const handleAddNote = () => {
        addNote(country, note);
        onClose();
    };

    return (
        <dialog id="Notes" className="modal">
        <div className="modal-box w-11/12 max-w-5xl">
          <h3 className="font-bold text-lg">Add Note for {country}</h3>
          <textarea 
                    className="textarea textarea-bordered w-full mb-2" 
                    value={note} 
                    onChange={(e) => setNote(e.target.value)} 
                    placeholder="Enter your note here"
                />
          <div className="modal-action">
            <form method="dialog">
              <button className="btn" onClick={onClose}>Close</button>
              <button className="btn btn-primary" onClick={handleAddNote}>Add Note</button>
            </form>
          </div>
        </div>
      </dialog>
    );
};

export default AddNotePopup;
