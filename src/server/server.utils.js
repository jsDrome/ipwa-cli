export const template = (helmet, html, css) => `<!DOCTYPE html>
<html ${helmet.htmlAttributes.toString()}>
  <head>
    ${helmet.title.toString()}
    ${helmet.meta.toString()}
    ${helmet.link.toString()}
    ${helmet.style.toString()}
    ${helmet.script.toString()}
    <style id="jss-server-side">${css}</style>
  </head>
  <body>
    <div id="root">${html}</div>
    <script type="text/javascript" src="app.bundle.js"></script>
    <script type="text/javascript" src="npm.bundle.js"></script>
  </body>
</html>`;
