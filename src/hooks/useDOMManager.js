export const useDOMManager = () => {
    function createTable(collection = [], headers = []) {
        const tableElement = document.createElement('table');
        const headElement = document.createElement('thead');
        const headRowElement = document.createElement('tr');
        const bodyElement = document.createElement('tbody');
    
        headers.forEach(header => {
            const th = document.createElement('th');
            th.textContent = header.label;
            headRowElement.appendChild(th);
        });
    
        headElement.appendChild(headRowElement);
    
        if (collection.length === 0) {
            const emptyRow = document.createElement('tr');
            const emptyCell = document.createElement('td');
            emptyCell.textContent = 'Nenhum dado disponível';
            emptyCell.classList.add('text-center');
            emptyCell.setAttribute('colspan', headers.length);
            emptyRow.appendChild(emptyCell);
            bodyElement.appendChild(emptyRow);
        } else {
            collection.forEach(i => {
                const row = document.createElement('tr');
        
                headers.forEach((header) => {
                    const cell = document.createElement('td');
                    cell.textContent = i[header.key];
                    row.appendChild(cell);
                });
        
                bodyElement.appendChild(row);
            });
        }
        
        
        tableElement.appendChild(headElement);
        tableElement.appendChild(bodyElement);
    
        return tableElement;
    }
    
    return {
        createTable,
    }
};