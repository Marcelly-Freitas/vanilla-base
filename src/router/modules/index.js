export const RouteModules = [
	{ path: '/login', fileName: 'login', layout: 'auth', permission: 'guest' },
	{ path: '/', fileName: 'home', layout: 'dashboard', permission: 'auth' },

	{ path: '/aluno-cadastro', fileName: 'aluno_cadastro', layout: 'dashboard', permission: 'auth' },
	{ path: '/aluno-matricula', fileName: 'aluno_matricula', layout: 'dashboard', permission: 'auth' },
	{ path: '/aluno-boletim', fileName: 'aluno_boletim', layout: 'dashboard', permission: 'auth' },
	{ path: '/aluno-frequencia', fileName: 'aluno_frequencia', layout: 'dashboard', permission: 'auth' },
	
	
	{ path: '/settings', fileName: 'settings', layout: 'dashboard', permission: 'auth' },
];
