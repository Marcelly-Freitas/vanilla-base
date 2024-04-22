import {useAuthentication} from '@/hooks/useAuthentication';
import { navigateToRoute } from '@/router';

const { sigOut } = useAuthentication();

const logoutButton = document.querySelector('.logout');

if (logoutButton) {
    logoutButton.addEventListener('click', (event) => {
        event.preventDefault();

        sigOut();

        window.location.reload();
    })
}