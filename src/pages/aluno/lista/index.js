import { studentEntityService } from '@/services/studentEntityService.service';
import { useDOMManager } from '@/hooks/useDOMManager';
import './index.css';

async function startStudentListModule() {
    const { createTable, createTableActions } = useDOMManager();

    const wrapper = document.querySelector('.aluno-lista-wrapper');

    if (wrapper) {
        if (document.querySelector('.loading')) {
            return false;
        }

        const loadingElement = document.createElement('div');
        loadingElement.classList.add('loading');
        

        loadingElement.innerHTML = 'Carregando...';

        wrapper.appendChild(loadingElement);

        const { data: collection } = await studentEntityService.getAll();

        const headers = [
            { label: 'Nome', key: 'nome' }, 
            { label: 'Email', key: 'email' }
        ];
        
        const tableElement = createTable(collection, headers);

        createTableActions(tableElement);
        
        loadingElement.remove();    
        wrapper.appendChild(tableElement);
    }
}

startStudentListModule();

window.addEventListener('changepage', function(event) {
    console.log('carreguei aqui');
    startStudentListModule();
});