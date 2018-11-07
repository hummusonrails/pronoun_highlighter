import Head from '../components/head';
import EvalText from '../components/evaltext';
import Header from '../components/header';
import Counters from '../components/counters';
import {femaleList, maleList, neutralList} from '../components/words';
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
            
            .body {
              display: flex;
              flex-direction: column;
            }

            .main-content-wrapper {
              display: flex;
              justify-content: center;
            }

            .form-area {
              margin-right: 5px;
            }
            .divider {
              width: 1px;
              margin: 6px;
              background: black;
            }
            .counter-box {
              margin-top: 22em;
              padding: 0px 2px 0px 1px;
              border-radius: 10px;
              border-width: 5px;
              border-style: outset;
              border-color: red;
            }
          `}</style>
          <Header />
          <div className="main-content-wrapper">
            <div className="form-area">
              <form>            
                  <textarea rows="30" cols="60" value={this.state.value} onChange={this.handleChange} id="input-area" />
              </form>
              <button onClick={(event) => this.analyzeText(event)}>Analyze Text</button>
            </div>
            <div className="divider"></div>
            <div className="text-area">
              {formattedText}
              <div className="counter-box">
                <Counters 
                  femaleNum={this.state.femaleCount} maleNum={this.state.maleCount} neutralNum={this.state.neutralCount} 
                />
              </div>
            </div>
          </div>
        </div>
      );
    }
  }
export default Index;