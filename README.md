# Rayane Falcão — Site Audiovisual

Landing page em React + Vite + Tailwind CSS para uso como link da bio do Instagram.

## Como rodar o projeto

```bash
npm install
npm run dev       # ambiente de desenvolvimento (http://localhost:5173)
npm run build     # gera a versao de producao na pasta /dist
npm run preview   # visualiza a build de producao localmente
```

## O que editar antes de publicar

Tudo isso esta centralizado em **`src/config.js`**:

- `WHATSAPP_NUMBER` -> numero real da Rayane, formato internacional sem simbolos
  (ex: `5567991234567`)
- `WHATSAPP_DEFAULT_MESSAGE` -> mensagem que ja vem escrita no WhatsApp
- `INSTAGRAM_USERNAME` -> usuario do Instagram, sem o @

## Adicionando mais fotos ao portfolio

O site foi entregue com apenas as duas fotografias fornecidas no material de
referencia. Para o portfolio ficar mais rico (o ideal sao 6-10 imagens),
adicione novos arquivos em `src/assets/images/` e inclua-os no array
`PORTFOLIO_ITEMS` em `src/components/Portfolio.jsx` -- o layout assimetrico
ja esta preparado para acomodar novas imagens automaticamente.

As mesmas fotos tambem podem ser trocadas em:
- `src/components/Hero.jsx` (foto principal)
- `src/components/About.jsx` (secao "Sobre mim")
- `src/components/Editorial.jsx` (secao de pausa editorial)

## Estrutura

```
src/
  components/
    Header.jsx          Menu fixo com blur ao rolar
    Hero.jsx             Primeira tela - foto + apresentacao
    ImpactQuote.jsx        Frase editorial de impacto
    About.jsx             Sobre a Rayane
    Portfolio.jsx           Galeria + lightbox
    Lightbox.jsx              Visualizacao em tela cheia
    Services.jsx             O que ela oferece
    Editorial.jsx            Pausa visual em tela cheia
    Contact.jsx               Chamada final para WhatsApp
    Footer.jsx
    WhatsAppButton.jsx       Botao flutuante (mobile)
  config.js               Numero de WhatsApp e Instagram
```

## Publicando

A pasta gerada por `npm run build` (`/dist`) e um site estatico -- pode ser
publicada em qualquer servico como Vercel, Netlify, Cloudflare Pages ou
GitHub Pages.
