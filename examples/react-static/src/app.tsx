// Note: You **must** use `export default` for your component.
// You should also import React here for types.
import React from "npm:react@^18.3.0";

const App = () => {
  return (
    <>
    <html lang="en">
      <meta charSet="utf-8" />
      <body style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
        margin: 0,
        padding: 0,
        fontFamily: "sans-serif",
        textAlign: "center",
        background: "linear-gradient(180deg, #000000 0%, #1D1D1D 100%)",
        color: "#fff",
      }}>
        <div>
          <h1>🪐 sup, universe!</h1>
          <p>This page was rendered with React & dsbuild.</p>
        </div>
      </body>
      </html>
    </>
  );
};
export default App;
