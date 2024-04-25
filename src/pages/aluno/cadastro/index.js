import { studentEntityService } from '@/services/studentEntityService.service.js';
import { useDashboardUtils } from '@/hooks/useDashboardUtils.js';
import { faker } from '@faker-js/faker';
import './index.css';
import page from 'page';



function startStudentRegisterModule() {
    const form = document.querySelector('.form-cadastro-aluno');

    if (form) {
        form.addEventListener('submit', async (event) => {
            event.preventDefault();
            
            const inputs = form.querySelectorAll('input, select');
            const { showNotification } = useDashboardUtils();

            if (inputs) {
                const payload = {};
                inputs.forEach(_ => {
                    const key = _.getAttribute('name');
                    const value = _.value;
                    payload[key] = value;
                });

                payload.id = faker.string.uuid();
                payload.created_at = new Date().toISOString();

                await studentEntityService.create(payload);

                showNotification({ 
                    type: 'success', 
                    title: 'Sucesso', 
                    message: 'Dados cadastrados com sucesso'
                });

                page('/aluno/lista');
            }
        });
    }
}

export default {
    init() {
        startStudentRegisterModule();

        window.addEventListener('changepage', function(event) {
            startStudentRegisterModule();
        });
    }
}




