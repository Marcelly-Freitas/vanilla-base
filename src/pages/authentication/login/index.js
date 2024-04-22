import { useAuthentication } from "@/hooks/useAuthentication";

const formLogin = document.getElementById('form-login');
const { sigIn } = useAuthentication();

if (formLogin) {
    formLogin.addEventListener('submit', async (event) => {
        event.preventDefault();

        try {
            const username = formLogin.querySelector('#username').value;
            const password = formLogin.querySelector('#password').value;

            await sigIn(username, password);

            window.location.reload();
        } catch (error) {
            console.error(error);
        }
    });
}