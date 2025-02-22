import React, { useEffect, useState } from 'react';
import { useNotes } from '../lib/NotesContext';
import { callApiByCountry } from '../lib/HookApi';
import Navbar from '../component/Navbar';

const NotesCollection = () => {
    const { notes } = useNotes();
    const [countriesWithNotes, setCountriesWithNotes] = useState([]);

    useEffect(() => {
        const fetchCountries = async () => {
            const countries = Object.keys(notes);
            const countriesData = await Promise.all(countries.map(country => callApiByCountry(country)));
            setCountriesWithNotes(countriesData);
        };

        fetchCountries();
    }, [notes]);

    return (
        <div className="max-w-7xl mx-auto p-4">
            <Navbar title="Countries with Notes" />
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {countriesWithNotes.map((country) => (
                    <a href={`/${country.country}`} key={country.country} className="card bg-base-100 shadow-xl">
                        <div className="card-body">
                            <h2 className="card-title">{country.country}</h2>
                            <img src={country.countryInfo.flag} alt={`flag-${country.country}`} width={60} height={40} />
                            <p>Cases: {country.cases}</p>
                            <p>Deaths: {country.deaths}</p>
                            <p>Recovered: {country.recovered}</p>
                            <p>Total Notes: {notes[country.country]?.length || 0}</p>
                        </div>
                    </a>
                ))}
            </div>
        </div>
    );
};

export default NotesCollection;
