// Dados dos cursos
const cursosData = {
    informatica: {
        nome: 'Técnico em Informática',
        categoria: 'Técnico',
        duracao: '18 meses',
        modalidade: 'Presencial',
        horas: '1200h',
        descricao: 'O curso Técnico em Informática do Instituto Lumiar oferece uma formação completa e atualizada em tecnologia da informação. Você aprenderá desde os fundamentos da computação até técnicas avançadas de programação, redes, banco de dados e desenvolvimento de sistemas. Com foco prático e professores especializados, você estará preparado para atuar em um mercado em constante crescimento.',
        aprendizado: [
            'Fundamentos de programação e lógica de programação',
            'Desenvolvimento web (HTML, CSS, JavaScript)',
            'Programação orientada a objetos',
            'Banco de dados e SQL',
            'Redes de computadores e segurança',
            'Desenvolvimento de aplicações mobile',
            'Gestão de projetos de TI'
        ],
        curriculum: [
            {
                modulo: 'Módulo 1: Fundamentos',
                disciplinas: [
                    'Introdução à Informática',
                    'Lógica de Programação',
                    'Sistemas Operacionais',
                    'Arquitetura de Computadores'
                ]
            },
            {
                modulo: 'Módulo 2: Desenvolvimento',
                disciplinas: [
                    'Programação em Java',
                    'Desenvolvimento Web',
                    'Banco de Dados',
                    'Engenharia de Software'
                ]
            },
            {
                modulo: 'Módulo 3: Especialização',
                disciplinas: [
                    'Desenvolvimento Mobile',
                    'Redes e Segurança',
                    'Projeto Integrador',
                    'Estágio Supervisionado'
                ]
            }
        ],
        preRequisitos: 'Ensino médio completo ou em andamento. Conhecimento básico de informática é recomendado, mas não obrigatório.',
        razoes: [
            {
                titulo: 'Professores Especializados',
                descricao: 'Corpo docente com experiência prática no mercado de TI'
            },
            {
                titulo: 'Metodologia Prática',
                descricao: 'Aprenda fazendo com projetos reais e laboratórios equipados'
            },
            {
                titulo: 'Certificação Reconhecida',
                descricao: 'Diploma válido em todo território nacional'
            },
            {
                titulo: 'Suporte Completo',
                descricao: 'Acompanhamento durante todo o curso e suporte para estágios'
            }
        ]
    },
    administracao: {
        nome: 'Administração Empresarial',
        categoria: 'Técnico',
        duracao: '24 meses',
        modalidade: 'Híbrido',
        horas: '1600h',
        descricao: 'Formação técnica completa em administração empresarial, preparando você para atuar em diversas áreas organizacionais. Desenvolva habilidades em gestão de pessoas, processos, finanças e estratégias empresariais.',
        aprendizado: [
            'Gestão de pessoas e liderança',
            'Planejamento estratégico',
            'Gestão financeira e contábil',
            'Marketing e vendas',
            'Gestão de processos',
            'Empreendedorismo'
        ],
        curriculum: [
            {
                modulo: 'Módulo 1: Fundamentos',
                disciplinas: [
                    'Introdução à Administração',
                    'Matemática Financeira',
                    'Contabilidade Básica',
                    'Comunicação Empresarial'
                ]
            },
            {
                modulo: 'Módulo 2: Gestão',
                disciplinas: [
                    'Gestão de Pessoas',
                    'Marketing',
                    'Gestão Financeira',
                    'Planejamento Estratégico'
                ]
            },
            {
                modulo: 'Módulo 3: Especialização',
                disciplinas: [
                    'Empreendedorismo',
                    'Gestão de Projetos',
                    'Projeto Integrador',
                    'Estágio Supervisionado'
                ]
            }
        ],
        preRequisitos: 'Ensino médio completo ou em andamento.',
        razoes: [
            {
                titulo: 'Professores Especializados',
                descricao: 'Corpo docente com experiência prática no mercado'
            },
            {
                titulo: 'Metodologia Prática',
                descricao: 'Aprenda fazendo com projetos reais'
            },
            {
                titulo: 'Certificação Reconhecida',
                descricao: 'Diploma válido em todo território nacional'
            },
            {
                titulo: 'Suporte Completo',
                descricao: 'Acompanhamento durante todo o curso'
            }
        ]
    },
    design: {
        nome: 'Design Gráfico',
        categoria: 'Profissionalizante',
        duracao: '12 meses',
        modalidade: 'Online',
        horas: '800h',
        descricao: 'Curso completo de Design Gráfico com foco em criação visual, identidade de marca e comunicação visual. Aprenda a usar as principais ferramentas do mercado e desenvolva projetos profissionais.',
        aprendizado: [
            'Fundamentos do design',
            'Teoria das cores e tipografia',
            'Adobe Photoshop, Illustrator e InDesign',
            'Criação de identidade visual',
            'Design para web e mídias sociais',
            'Produção gráfica'
        ],
        curriculum: [
            {
                modulo: 'Módulo 1: Fundamentos',
                disciplinas: [
                    'História do Design',
                    'Teoria das Cores',
                    'Tipografia',
                    'Composição Visual'
                ]
            },
            {
                modulo: 'Módulo 2: Ferramentas',
                disciplinas: [
                    'Adobe Photoshop',
                    'Adobe Illustrator',
                    'Adobe InDesign',
                    'Design Digital'
                ]
            },
            {
                modulo: 'Módulo 3: Projetos',
                disciplinas: [
                    'Identidade Visual',
                    'Design para Web',
                    'Projeto Final',
                    'Portfólio Profissional'
                ]
            }
        ],
        preRequisitos: 'Ensino médio completo ou em andamento. Não é necessário conhecimento prévio em design.',
        razoes: [
            {
                titulo: 'Professores Especializados',
                descricao: 'Designers profissionais com experiência no mercado'
            },
            {
                titulo: 'Metodologia Prática',
                descricao: 'Aprenda fazendo projetos reais'
            },
            {
                titulo: 'Certificação Reconhecida',
                descricao: 'Diploma válido em todo território nacional'
            },
            {
                titulo: 'Suporte Completo',
                descricao: 'Acompanhamento durante todo o curso'
            }
        ]
    }
};

// Carregar dados do curso baseado na URL
document.addEventListener('DOMContentLoaded', function() {
    const urlParams = new URLSearchParams(window.location.search);
    const cursoId = urlParams.get('curso') || 'informatica';
    const curso = cursosData[cursoId] || cursosData.informatica;

    // Atualizar informações do curso
    document.getElementById('course-name').textContent = curso.nome;
    document.getElementById('course-category').textContent = curso.categoria;
    document.getElementById('course-subtitle').textContent = curso.descricao.split('.')[0] + '.';
    document.getElementById('course-duration').textContent = curso.duracao;
    document.getElementById('course-modality').textContent = curso.modalidade;
    document.getElementById('course-hours').textContent = curso.horas;
    document.getElementById('breadcrumb-course').textContent = curso.nome;

    // Sidebar
    document.getElementById('sidebar-duration').textContent = curso.duracao;
    document.getElementById('sidebar-modality').textContent = curso.modalidade;
    document.getElementById('sidebar-hours').textContent = curso.horas;

    // Descrição
    document.getElementById('course-description').innerHTML = `<p>${curso.descricao}</p>`;

    // O que você vai aprender
    const learningList = document.getElementById('course-learning');
    learningList.innerHTML = curso.aprendizado.map(item => `<li>${item}</li>`).join('');

    // Grade curricular
    const curriculum = document.getElementById('course-curriculum');
    curriculum.innerHTML = curso.curriculum.map(modulo => `
        <div class="curriculum-module">
            <h3>${modulo.modulo}</h3>
            <ul>
                ${modulo.disciplinas.map(disc => `<li>${disc}</li>`).join('')}
            </ul>
        </div>
    `).join('');

    // Pré-requisitos
    document.getElementById('course-prerequisites').innerHTML = `<p>${curso.preRequisitos}</p>`;

    // Razões
    const reasons = document.getElementById('course-reasons');
    reasons.innerHTML = curso.razoes.map(razao => `
        <div class="reason-item">
            <div class="reason-icon">✅</div>
            <h4>${razao.titulo}</h4>
            <p>${razao.descricao}</p>
        </div>
    `).join('');

    // Ajustar cor do hero baseado no curso
    const hero = document.getElementById('course-hero');
    if (hero) {
        hero.style.background = `linear-gradient(135deg, var(--brown-medium) 0%, var(--brown-dark) 100%)`;
    }
});

