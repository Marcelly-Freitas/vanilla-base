export const authenticationService = {
    async sigIn(username, password) {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                if (username !== 'email@email.com' || password !== 'admin') {
                    return reject({
                        message: 'Usuário ou senha inválidos',
                        data: [],    
                    });
                }
                
                return resolve({
                    message: 'Dados retornados com sucesso',
                    data: {
                        name: 'Admin',
                        email: 'email@email.com',
                        image: 'https://img.freepik.com/fotos-premium/um-personagem-de-desenho-animado-do-avatar-do-jogo_667286-2738.jpg '
                    },
                });
            }, 600);
        })
    },
};