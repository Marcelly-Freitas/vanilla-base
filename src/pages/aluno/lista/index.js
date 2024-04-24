import { studentEntityService } from '@/services/studentEntityService.service';
import { useDOMManager } from '@/hooks/useDOMManager';
import './index.css';

const { createTable } = useDOMManager();

const wrapper = document.querySelector('.aluno-lista-wrapper');

if (wrapper) {
    const loadingElement = document.createElement('div');
    

    loadingElement.innerHTML = 'Carregando...';

    wrapper.appendChild(loadingElement);

    const { data: collection } = await studentEntityService.getAll();

    const headers = [
        { label: 'Nome', key: 'nome' }, 
        { label: 'Email', key: 'email' }
    ];
    
    const tableElement = createTable(collection, headers);
    
    loadingElement.remove();    
    wrapper.appendChild(tableElement);
}