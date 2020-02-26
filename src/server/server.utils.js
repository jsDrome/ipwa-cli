export const template = (helmet, app) => `<!doctype html>
<html ${helmet.htmlAttributes.toString()}>
  <head>
    ${helmet.title.toString()}
    ${helmet.meta.toString()}
    ${helmet.link.toString()}
  </head>
  <body ${helmet.bodyAttributes.toString()}>
    <div id="root">
      ${app}
    </div>
    ${helmet.script.toString()}
    <script src="./app.bundle.js"></script>
  </body>
</html>`;
