# Site Santiero Tecnologia

Site institucional e portfólio da Santiero Tecnologia — https://santiero.com.br

HTML/CSS puro, sem etapa de build, hospedado no GitHub Pages.

## Estrutura

```
index.html            Página única: serviços, problemas, como trabalhamos, exemplos, sobre, contato
404.html              Página de erro
assets/css/style.css  Estilos (cores e fontes da marca em :root)
assets/js/main.js     Menu mobile, ano do rodapé e formulário de contato
assets/img/           Logo (logo-mark.svg), ícones e imagem de compartilhamento (og-image.png)
CNAME                 Domínio personalizado do GitHub Pages
robots.txt            Instruções para buscadores
sitemap.xml           Mapa do site para buscadores
.nojekyll             Desativa o processamento Jekyll do GitHub Pages
```

## Identidade visual

Baseada na assinatura de e-mail da empresa:

| Uso | Cor |
|---|---|
| Verde da marca (logo, botões, ícones) | `#12AC52` |
| Verde para texto pequeno sobre branco | `#0B7F3C` |
| Verde claro (detalhes, texto sobre fundo escuro) | `#88E0A9` |
| Grafite (títulos, fundos escuros) | `#101C25` |

Fonte: **Montserrat** (Google Fonts). O símbolo de circuito está em `assets/img/logo-mark.svg`.

## Rodar localmente

```bash
python3 -m http.server 8000
# abra http://localhost:8000
```

## Publicar no GitHub Pages

1. Crie um repositório no GitHub (ex.: `site-santiero`) e envie os arquivos:
   ```bash
   git remote add origin git@github.com:SEU_USUARIO/site-santiero.git
   git push -u origin main
   ```
2. No repositório: **Settings → Pages**
   - *Source*: **Deploy from a branch**
   - *Branch*: `main` / `/ (root)`
   - *Custom domain*: `santiero.com.br` (já definido no arquivo `CNAME`)
3. Depois que o DNS propagar, marque **Enforce HTTPS**.

### Verificar o domínio (recomendado)

Em **GitHub → Settings (do seu perfil) → Pages → Add a domain**, informe
`santiero.com.br`. O GitHub mostrará um registro **TXT** (`_github-pages-challenge-SEU_USUARIO`)
para adicionar no DNS. Isso impede que outra conta use o seu domínio.

## Configurar DNS no registro.br

No painel do registro.br, abra o domínio → **DNS → Editar zona**
(se aparecer "Utilizar DNS do Registro.br", ative o modo avançado / edição de zona).

| Tipo  | Nome  | Valor                    |
|-------|-------|--------------------------|
| A     | (vazio / `@`) | `185.199.108.153` |
| A     | (vazio / `@`) | `185.199.109.153` |
| A     | (vazio / `@`) | `185.199.110.153` |
| A     | (vazio / `@`) | `185.199.111.153` |
| AAAA  | (vazio / `@`) | `2606:50c0:8000::153` |
| AAAA  | (vazio / `@`) | `2606:50c0:8001::153` |
| AAAA  | (vazio / `@`) | `2606:50c0:8002::153` |
| AAAA  | (vazio / `@`) | `2606:50c0:8003::153` |
| CNAME | `www` | `SEU_USUARIO.github.io` |
| TXT   | `_github-pages-challenge-SEU_USUARIO` | (valor informado pelo GitHub) |

O `www.santiero.com.br` redireciona automaticamente para `santiero.com.br`.
A propagação pode levar de minutos a algumas horas. Para conferir:

```bash
dig santiero.com.br +short
dig www.santiero.com.br +short
```

## Aparecer no Google (SEO)

Já incluído no site:
- Título, descrição e URL canônica em cada página
- Dados estruturados (schema.org `Organization`) em JSON-LD
- Open Graph (prévia bonita ao compartilhar no WhatsApp/LinkedIn)
- `robots.txt` e `sitemap.xml`
- HTML semântico, carregamento rápido, responsivo e acessível

Depois de publicado:
1. **Google Search Console** (https://search.google.com/search-console)
   - Adicione a propriedade do tipo **Domínio** `santiero.com.br`
   - Valide com o registro **TXT** que o Google fornecer (adicione no registro.br)
   - Em **Sitemaps**, envie `https://santiero.com.br/sitemap.xml`
   - Em **Inspeção de URL**, peça a indexação da página inicial
2. **Bing Webmaster Tools** (https://www.bing.com/webmasters) — dá para importar direto do Search Console.
3. **Perfil da Empresa no Google** — ver seção abaixo. Muito importante para buscas
   como "desenvolvimento de sistemas Manaus".
4. Crie a página da empresa no LinkedIn e linke para o site (e vice-versa).

## Formulário de contato

O GitHub Pages não processa formulários. O formulário da seção Contato monta a mensagem e abre
o WhatsApp ou o e-mail do visitante já preenchidos (ver `assets/js/main.js`). Se no futuro
quiser receber direto no e-mail sem depender do visitante, dá para usar um serviço como
Web3Forms ou Formspree.

## Perfil da Empresa no Google (prioridade)

Em https://business.google.com cadastre a Santiero como **empresa de área de serviço**
(atende o cliente no local dele, sem endereço aberto ao público):
- Categoria: "Empresa de software" / "Desenvolvedor de software"
- Área de serviço: Manaus e cidades da região que deseja atender
- Site: https://santiero.com.br — Telefone: (92) 98437-5226
- Descrição citando desenvolvimento de sistemas, automação de processos e integrações

Mantenha nome, telefone e site **idênticos** no perfil, no site e nas redes sociais.

## Pendências de conteúdo

- [ ] Quando houver clientes, transformar os "Exemplos de soluções" da home em cases reais
      (pode ser sem o nome do cliente, ex.: "distribuidora em Manaus")
- [ ] (Opcional) CNPJ no rodapé
- [ ] Criar a página no LinkedIn/Instagram e adicionar os links no rodapé e em `"sameAs"` no
      JSON-LD da home
- [ ] Futuro: blog com artigos sobre automação para empresas de Manaus (ajuda muito no SEO)

Ao alterar o conteúdo, atualize `<lastmod>` no `sitemap.xml`.
