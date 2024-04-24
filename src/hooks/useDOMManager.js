/**
 * 
 * @returns { createTable, createTableActions }
 */
export const useDOMManager = () => {
    /**
     * 
     * @param {Array} collection 
     * @param {Array} headers 
     * 
     * @returns HTMLTableElement
     */
    function createTable(collection = [], headers = []) {
        const tableElement = document.createElement('table');
        const headElement = document.createElement('thead');
        const headRowElement = document.createElement('tr');
        const bodyElement = document.createElement('tbody');

        tableElement.classList.add('global-el-table');
        headElement.classList.add('global-el-table-head');
        bodyElement.classList.add('global-el-table-body');
        headRowElement.classList.add('global-el-table-row');
        headRowElement.classList.add('header-row');
    
        headers.forEach(header => {
            const th = document.createElement('th');
            th.textContent = header.label;
            const divided = Math.floor(headers.length);
            const width = Math.floor(100 / divided);

            th.setAttribute('min-width', `${width}%`);

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
                row.classList.add('global-el-table-row');
                row.classList.add('body-row');
        
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

    /**
     * 
     * @param {HTMLTableElement|null} table 
     */
    function createTableActions(table = null) {
        if (table) {
            const tableHeaderRow = table.querySelector('.header-row');
            const tableBodyRow = table.querySelectorAll('.body-row');

            const th = document.createElement('th');
            th.setAttribute('width', '10%');
            tableHeaderRow.appendChild(th);

            tableBodyRow.forEach(row => {
                const buttonEdit = document.createElement('button');
                buttonEdit.textContent = 'Editar';
                const buttonDelete = document.createElement('button');
                buttonDelete.textContent = 'Deletar';

                const td = document.createElement('td');
                td.appendChild(buttonEdit);
                td.appendChild(buttonDelete);
                row.appendChild(td);
            })
        }
    }
    
    return {
        createTable,
        createTableActions,
    }
};