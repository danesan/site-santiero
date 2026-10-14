// Menu mobile
const toggle = document.querySelector('.menu-toggle');
const menu = document.getElementById('menu');

if (toggle && menu) {
  toggle.addEventListener('click', () => {
    const open = menu.classList.toggle('open');
    toggle.setAttribute('aria-expanded', String(open));
    toggle.setAttribute('aria-label', open ? 'Fechar menu' : 'Abrir menu');
  });

  // Fecha o menu ao clicar em um link
  menu.querySelectorAll('a').forEach((link) =>
    link.addEventListener('click', () => {
      menu.classList.remove('open');
      toggle.setAttribute('aria-expanded', 'false');
      toggle.setAttribute('aria-label', 'Abrir menu');
    })
  );
}

// Ano atual no rodapé
const ano = document.getElementById('ano');
if (ano) ano.textContent = new Date().getFullYear();

// Formulário de contato: monta a mensagem e abre no WhatsApp ou no e-mail
// (o GitHub Pages não processa formulários, então não há envio para servidor)
const WHATSAPP = '5592984375226';
const EMAIL = 'contato@santiero.com.br';
const form = document.getElementById('form-contato');

if (form) {
  const erro = form.querySelector('.form-error');

  form.addEventListener('submit', (event) => {
    event.preventDefault();

    const campo = (nome) => form.elements[nome].value.trim();
    const nome = campo('nome');
    const mensagem = campo('mensagem');

    if (!nome || !mensagem) {
      erro.hidden = false;
      (nome ? form.elements.mensagem : form.elements.nome).focus();
      return;
    }
    erro.hidden = true;

    const linhas = [`Olá! Meu nome é ${nome}.`];
    if (campo('empresa')) linhas.push(`Empresa: ${campo('empresa')}`);
    if (campo('telefone')) linhas.push(`Telefone: ${campo('telefone')}`);
    linhas.push('', mensagem);
    const texto = linhas.join('\n');

    if (event.submitter?.dataset.canal === 'email') {
      const assunto = `Contato pelo site — ${nome}`;
      window.location.href = `mailto:${EMAIL}?subject=${encodeURIComponent(assunto)}&body=${encodeURIComponent(texto)}`;
    } else {
      window.open(`https://wa.me/${WHATSAPP}?text=${encodeURIComponent(texto)}`, '_blank', 'noopener');
    }
  });
}
