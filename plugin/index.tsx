import { jsx } from "@app/html-jsx";

app.html("/", async (ctx) => {
  return (
    <html>
      <head>
        <title>Fancy Box</title>
      </head>
      <body>
        <h1>
          Version: <b>Semen</b>
        </h1>
      </body>
    </html>
  );
});
