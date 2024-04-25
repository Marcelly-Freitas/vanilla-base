import { useLocalStorage } from '/src/hooks/useLocalstorage';

const COLLECTION_NAME = 'student-collection';

export const studentEntityService = {
    async getAll() {
        const { getCollection } = useLocalStorage(COLLECTION_NAME);

        return new Promise((resolve) => {
            setTimeout(() => {
                return resolve({
                    message: 'Dados retornados com sucesso',
                    data: getCollection(),
                });
            }, 600);
        });
    },
    async getByCode(id) {
        const { getItem } = useLocalStorage(COLLECTION_NAME);

        return new Promise((resolve) => {
            setTimeout(() => {
                return resolve({
                    message: 'Dados retornados com sucesso',
                    data: getItem(id),
                });
            }, 600);
        });
    },
    async create(data = {}) {
        const { addItem, getCollection } = useLocalStorage(COLLECTION_NAME);

        return new Promise((resolve) => {
            addItem(data);

            setTimeout(() => {
                return resolve({
                    message: 'Dados retornados com sucesso',
                    data: [ ...getCollection()].pop(),
                });
            }, 600);
        });
    },
    async update(id, data = {}) {
        const { updateItem, getItem } = useLocalStorage(COLLECTION_NAME);

        return new Promise((resolve) => {
            updateItem(id, data);

            setTimeout(() => {
                return resolve({
                    message: 'Dados retornados com sucesso',
                    data: getItem(id),
                });
            }, 600);
        });
    },
    async delete(id) {
        const { removeItem } = useLocalStorage(COLLECTION_NAME);

        return new Promise((resolve) => {
            removeItem(id);

            setTimeout(() => {
                return resolve({
                    message: 'Dados retornados com sucesso',
                    data: [],
                });
            }, 600);
        });
    }
}