document.addEventListener('DOMContentLoaded', () => {
    const menuWrapper = document.querySelector('#secretarias-menu-wrapper .container');
    const contentArea = document.getElementById('content-area');
    const backToTopButton = document.querySelector('.back-to-top');

    // Definição das secretarias.
    const secretarias = [
        { id: 'gabinete', nome: 'Gabinete' },
        { id: 'sri', nome: 'SRI' },
        { id: 'semfaz', nome: 'SEMFAZ' },
        { id: 'semplan', nome: 'SEMPLAN' },
        { id: 'semed', nome: 'SEMED' },
        { id: 'semast', nome: 'SEMAST' },
        { id: 'semagri', nome: 'SEMAGRI' },
        { id: 'semma', nome: 'SEMMA' },
        { id: 'semosp', nome: 'SEMOSP' },
        { id: 'semsau', nome: 'SEMSAU' },
        { id: 'autarquia', nome: 'AMPIB' },
    ];

    // 1. Limpa o menu e cria os botões dinamicamente para evitar duplicatas
    menuWrapper.innerHTML = '';
    secretarias.forEach(sec => {
        const button = document.createElement('button');
        button.className = 'secretaria-btn';
        if (sec.id === 'gabinete') {
            button.classList.add('active');
        }
        button.textContent = sec.nome;
        button.dataset.target = `content-${sec.id}`;
        menuWrapper.appendChild(button);
    });

    // 2. Função para mostrar o conteúdo da secretaria
    const showContent = (targetId) => {
        // Esconde todos os conteúdos
        const allContent = contentArea.querySelectorAll('.secretaria-content');
        allContent.forEach(content => { 
            content.style.display = 'none';
            content.classList.remove('fade-in'); // Remove a classe de animação
        });

        // Mostra o conteúdo alvo
        const targetContent = document.getElementById(targetId);
        if (targetContent) {
            targetContent.style.display = 'block';
            targetContent.classList.add('fade-in'); // Adiciona a classe para animar
        }
    };

    // 3. Adiciona o evento de clique aos botões
    menuWrapper.addEventListener('click', (e) => {
        if (e.target.classList.contains('secretaria-btn')) {
            const targetId = e.target.dataset.target;

            // Remove a classe 'active' de todos os botões e adiciona ao clicado
            document.querySelectorAll('.secretaria-btn').forEach(btn => btn.classList.remove('active'));
            e.target.classList.add('active');

            showContent(targetId);
        }
    });

    // 4. Lógica do Botão "Voltar ao Topo"
    const handleScroll = () => {
        if (backToTopButton) {
            if (window.scrollY > 300) {
                backToTopButton.classList.add('visible');
            } else {
                backToTopButton.classList.remove('visible');
            }
        }
    };

    if (backToTopButton) {
        backToTopButton.addEventListener('click', () => {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    }

    window.addEventListener('scroll', handleScroll);

    // Mostra o conteúdo inicial por padrão
    showContent('content-gabinete');
});
