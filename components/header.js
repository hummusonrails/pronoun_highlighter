const Header = () => {
  return (
    <header class="header">
      <style jsx>{`
      @import url('https://fonts.googleapis.com/css?family=Permanent+Marker');      
      @import url(https://fonts.googleapis.com/css?family=Playfair+Display);
      @import url(https://fonts.googleapis.com/css?family=PT+Mono);
      
      /* Global Styles */
      
      * {
        box-sizing: border-box;
        margin-bottom: 10px;
      }

      header {
        border-width: 1px;
        border-style: solid solid dashed solid;
        border-color: blue;
      }
      
      body {
        font: normal 100%/150% "PT Mono", sans-serif;
      }
      
      h1, h2, h3 {
        font-family: "Playfair Display";
        font-size: 36px;
        color: black;
      }
      
      a {
        text-decoration: none;
        color: black;
      }
      
      li {
        list-style: none;
      }
      
      /* Make header and Nav ul flex containers */
      
      header, nav>ul {
        display: flex;
      }
      
      /* Give Header flex items equal space */
      
      #logo, nav {
        flex: 1;
      }
      
      #logo {
        padding-left: 2em;
      }
      
      nav ul {
        justify-content: flex-end;
      }
      
      nav li {
       padding: 0 1em;
      }

      mark {
        font-family: 'Permanent Marker';
        color: black;
      }

      img {
        width: 35px;
      }
    `}</style>
    <h1 id="logo"><a href="/">Gender Pronoun <mark>Highlighter</mark></a></h1>
      <nav>
        <ul>
          <li><a href="https://github.com/benhayehudi/pronoun_highlighter" target="_new"><img src="/static/github_icon.png" alt="github icon" /></a></li>
        </ul>
      </nav>
  </header>
  );
}
export default Header