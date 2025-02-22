export const filterAndSortData = (data, searchTerm, sortField, sortOrder) => {
    return data
        .filter(country => country.country.toLowerCase().includes(searchTerm.toLowerCase()))
        .sort((a, b) => {
            if (sortOrder === "asc") {
                return a[sortField] > b[sortField] ? 1 : -1;
            } else {
                return a[sortField] < b[sortField] ? 1 : -1;
            }
        });
};
