const Header = () => {
  return (
    <div>
      <style jsx>{`
      @import url('https://fonts.googleapis.com/css?family=Permanent+Marker');      
      
      .header-area {
        display: flex;
        height: 75px;
        background-color: black;
        margin-bottom: 10px;
        justify-content: center;
      }

      .header-text {
        font-family: 'Permanent Marker', cursive;
        font-size: 48px;
        color: white;
      }

      mark {
        color: red;
      }

    `}</style>
      <div className="header-area">
        <span className="header-text">Gender Pronoun <mark>Highlighter</mark></span>
      </div>
    </div>
  );
}
export default Header