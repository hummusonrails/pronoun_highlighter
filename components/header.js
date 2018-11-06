const Header = () => {
  return (
    <div>
      <style jsx>{`
      @import url('https://fonts.googleapis.com/css?family=Kumar+One+Outline');
      
      .header-area {
        display: flex;
        height: 75px;
        background-color: black;
        margin-bottom: 10px;
        justify-content: center;
      }

      .header-text {
        font-family: 'Kumar One Outline', cursive;
        font-size: 36px;
        color: white;
      }

    `}</style>
      <div className="header-area">
        <span className="header-text">Gender Pronoun <mark>Highlighter</mark></span>
      </div>
    </div>
  );
}
export default Header