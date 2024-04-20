export const RouteModules = [
	{ path: '/login', fileName: 'login', layout: 'auth', permission: 'guest' },
	{ path: '/', fileName: 'home', layout: 'dashboard', permission: 'auth' },

	{ path: '/aluno_cadastro', fileName: 'aluno_cadastro', layout: 'dashboard', permission: 'auth' },
	{ path: '/aluno_matricula', fileName: 'aluno_matricula', layout: 'dashboard', permission: 'auth' },
	{ path: '/aluno_boletim', fileName: 'aluno_boletim', layout: 'dashboard', permission: 'auth' },
	{ path: '/aluno_frequencia', fileName: 'aluno_frequencia', layout: 'dashboard', permission: 'auth' },
	{ path: '/aluno_cancel-matricula', fileName: 'aluno_cancel_matricula', layout: 'dashboard', permission: 'auth' },
	{ path: '/aluno_formandos', fileName: 'aluno_formandos', layout: 'dashboard', permission: 'auth' },
	{ path: '/aluno_certificado-conclusao', fileName: 'aluno_certificado_conclusao', layout: 'dashboard', permission: 'auth' },

	{ path: '/turma_ativar_inativar', fileName: '/turma_ativar_inativar', layout: 'dashboard', permission: 'auth' },
	{ path: '/turma_cadastrar', fileName: '/turma_cadastrar', layout: 'dashboard', permission: 'auth' },
	{ path: '/turma_lancar_frequencia', fileName: '/turma_lancar_frequencia', layout: 'dashboard', permission: 'auth' },
	{ path: '/turma_matricula', fileName: '/turma_matricula', layout: 'dashboard', permission: 'auth' },
	{ path: '/turma_visualizar', fileName: '/turma_visualizar', layout: 'dashboard', permission: 'auth' },
	
	
	{ path: '/settings', fileName: 'settings', layout: 'dashboard', permission: 'auth' },
];
