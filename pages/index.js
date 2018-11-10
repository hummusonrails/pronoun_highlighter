import Head from '../components/head';
import EvalText from '../components/evaltext';
import Header from '../components/header';
import Counters from '../components/counters';
import { femaleList, maleList, neutralList } from '../components/words';
import { countInstances } from '../logic/count_func';

class Index extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      textInput: '',
      maleCount: 0,
      femaleCount: 0,
      neutralCount: 0
    };

    this.handleChange = this.handleChange.bind(this);
    this.analyzeText = this.analyzeText.bind(this);
  }

  handleChange(event) {
    this.setState({
      textInput: event.target.value
    });
  }

  analyzeText(event) {
    event.preventDefault();
    this.setState({
      maleCount: countInstances(maleList, this.state.textInput.split(" ")),
      femaleCount: countInstances(femaleList, this.state.textInput.split(" ")),
      neutralCount: countInstances(neutralList, this.state.textInput.split(" "))
    });
    console.log(this.state)
  }

  render() {

    const formattedText =
      this.state.textInput.length > 0 ? this.state.textInput.split(" ").map(word => <EvalText word={word} />) : 'Waiting for your input.'

    return (
      <div>
        <Head />
        <style jsx>{`
            @import url('https://fonts.googleapis.com/css?family=Kumar+One+Outline');
            
            .main-content-wrapper {
              display: grid;
              grid-template-columns: 1fr 1fr;
              grid-gap: 2em;
            }
            .analyze {
              display: flex;
              align-items: flex-end;
            }
            .counter-box {
              padding: 0px 2px 0px 1px;
            }
            .form-area {
              margin-right: 5px;
            }
            .text-area {
              border: 1px solid black;
            }
            button {
              padding: 10px 20px;
              background-color: transparent;
              border-radius: 10px;
            }
            button:focus {
              outline: none;
            }
            textarea {
              resize: none;
              border: 1px solid black;
              box-sizing: border-box;
              width: 100%;
            }
            textarea:focus {
              outline: none;
            }
          `}</style>
        <Header />
        <div className="main-content-wrapper">
        <div className="analyze">
            <button onClick={(event) => this.analyzeText(event)}>Analyze Text</button>
          </div>
          <div className="counter-box">
            <Counters
              femaleNum={this.state.femaleCount} maleNum={this.state.maleCount} neutralNum={this.state.neutralCount}
            />
          </div>
          <div className="form-area">
            <form>
              <textarea rows="30" value={this.state.value} onChange={this.handleChange} id="input-area" placeholder="Start typing here"/>
            </form>
          </div>
          <div className="text-area">
            {formattedText}
          </div>
        </div>
      </div>
    );
  }
}
export default Index;