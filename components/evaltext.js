import {femaleList, maleList, neutralList} from './words';

class EvalText extends React.Component {
  render() {
    const wordHighlight =
      femaleList.includes(this.props.word.toLowerCase().replace(/[\W].*/g, '')) ? "femaleWord" : 
        maleList.includes(this.props.word.toLowerCase().replace(/[\W].*/g, '')) ? "maleWord" : "neutralWord"

    return (
    <div className="textBox">
      <style jsx>{`
        @import url('https://fonts.googleapis.com/css?family=Inconsolata|Poor+Story');
        
        .textBox {
          display: inline-block;
          font-family: 'Inconsolata', monospace;
          font-size: 18px;
        }
        span {

        }
        .femaleWord {
          font-family: 'Poor Story', cursive;
          font-size: 22px;
          font-weight: bold;
          background-color: pink;
          margin: 2px;
        }
      
        .maleWord {
          font-family: 'Poor Story', cursive;
          font-size: 22px;
          font-weight: bold;
          background-color: cornflowerblue;
          margin: 2px;
        }

        .neutralWord {
          margin: 2px;
        }
      `}</style>
      <span className={wordHighlight}>{this.props.word}</span>
    </div> 
    );
  }
}
export default EvalText
