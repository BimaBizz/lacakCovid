import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { callApi } from "../lib/HookApi";
import { filterAndSortData } from "../lib/actionFilter";
import { useNotes } from "../lib/NotesContext";
import SearchFilter from "./SearchFilter";
import AddNotePopup from "./AddNotePopup";
import Cookies from 'js-cookie';

const TabelCovid = () => {
    const [data, setData] = useState([]);
    const [searchTerm, setSearchTerm] = useState("");
    const [sortField, setSortField] = useState("country");
    const [sortOrder, setSortOrder] = useState("asc");
    const [selectedCountry, setSelectedCountry] = useState(null);
    const [notesCount, setNotesCount] = useState({});
    const navigate = useNavigate();

    useEffect(() => {
        const fetchData = async () => {
            const result = await callApi();
            setData(result);
        };
        fetchData();
    }, []);

    useEffect(() => {
        const storedNotes = Cookies.get('notes');
        if (storedNotes) {
            const parsedNotes = JSON.parse(storedNotes);
            const counts = {};
            Object.keys(parsedNotes).forEach(country => {
                counts[country] = parsedNotes[country].length;
            });
            setNotesCount(counts);
        }
    }, [selectedCountry]);

    const handleSearch = (e) => {
        setSearchTerm(e.target.value);
    };

    const handleSortFieldChange = (e) => {
        setSortField(e.target.value);
    };

    const handleSortOrderChange = (e) => {
        setSortOrder(e.target.value);
    };

    const filteredData = filterAndSortData(data, searchTerm, sortField, sortOrder);

    const { notes, deleteNote } = useNotes();

    const getNotesCount = (country) => {
        return notesCount[country] || notes[country]?.length || 0;
    };

    return (
        <div className="overflow-x-auto">
            <SearchFilter 
                searchTerm={searchTerm} 
                onSearchChange={handleSearch} 
                sortField={sortField} 
                onSortFieldChange={handleSortFieldChange} 
                sortOrder={sortOrder} 
                onSortOrderChange={handleSortOrderChange} 
            />
            <table className="table table-zebra mt-5">
                {/* head */}
                <thead>
                    <tr>
                        <th>No</th>
                        <th>Country</th>
                        <th>Cases</th>
                        <th>Deaths</th>
                        <th>Recovered</th>
                        <th>Notes</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {filteredData.map((country, index) => (
                        <tr key={country.country}>
                            <th>{index + 1}</th>
                            <td className="inline-flex">
                                <img src={country.countryInfo.flag} alt={`flag-${country.country}`} width={30} height={20}/>
                                <span className="ml-2 cursor-pointer hover:text-primary" onClick={() => navigate(`/${country.country}`)}>
                                    {country.country}
                                </span>
                            </td>
                            <td>{country.cases}</td>
                            <td>{country.deaths}</td>
                            <td>{country.recovered}</td>
                            <td>
                                total notes: {getNotesCount(country.country)}
                            </td>
                            <td className="flex gap-2">
                                <button className="btn btn-sm btn-primary" onClick={() => { setSelectedCountry(country.country), document.getElementById('Notes').showModal(); }}>Add Note</button>
                                <button className="btn btn-sm btn-error" onClick={() => deleteNote(country.country, 0)}>Delete Note</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
            {selectedCountry && <AddNotePopup country={selectedCountry} onClose={() => setSelectedCountry(null)} />}
        </div>
    );
};

export default TabelCovid;
