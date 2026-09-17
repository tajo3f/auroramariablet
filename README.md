# Aurora Maria — Fora dos Pixels (V3)

Landing page estática e responsiva para a personagem editorial **Aurora Maria Moreira Brandão**, 33 anos.

## O que mudou nesta versão
- remove o foco em Habblet/pixel art;
- apresenta Aurora pela narrativa de lifestyle fora dos pixels;
- usa somente as 6 imagens enviadas em alta resolução (a imagem de 208×373 foi descartada por baixa resolução);
- galeria com lightbox em resolução integral;
- seção +18 propositalmente bloqueada, com interação de “Acesso Negado”;
- layout mobile-first, animações leves e suporte a `prefers-reduced-motion`;
- sem dependências externas.

## Como abrir
No Windows, dê dois cliques em `ABRIR_SITE.bat` ou abra `index.html` no navegador.

## Publicar
Como é um site estático, pode ser publicado diretamente no GitHub Pages, Netlify, Vercel ou Cloudflare Pages. Não há build nem backend.

## Imagens
Os arquivos em `assets/images/` foram convertidos para WebP em alta qualidade mantendo a resolução original para reduzir peso sem degradar visualmente a página.

## Nota editorial
Nome, idade e características narrativas da página pertencem ao universo ficcional/editorial do projeto.


## Vídeo de fundo

O Hero usa `assets/video/aurora-background-loop.mp4` como fundo em autoplay, silencioso, sem controles e em loop. O MP4 foi mantido em H.264 e teve apenas a faixa de áudio removida para melhorar compatibilidade de autoplay sem reduzir a qualidade visual. A foto principal funciona como `poster`/fallback.


## Correção do vídeo de fundo — V5

O vídeo agora é uma camada fixa de fundo de toda a landing page, não apenas do Hero.
Foram incluídos MP4 H.264 Baseline com `faststart` e WebM como fallback.
O JavaScript tenta iniciar o autoplay silencioso no carregamento e novamente na primeira interação caso o navegador bloqueie.

Para testar no Windows, use **ABRIR_SITE.bat**. Ele inicia um servidor local e abre `http://127.0.0.1:8765/`, evitando problemas que alguns navegadores têm ao tocar vídeo em páginas abertas diretamente por `file://`.
