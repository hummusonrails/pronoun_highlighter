import Head from '../components/head';
import EvalText from '../components/evaltext';
import Header from '../components/header';
import Counters from '../components/counters';
import FormErrors from '../components/formErrors';
import { femaleList, maleList, neutralList } from '../components/words';
import { countInstances } from '../logic/count_func';
import { getWebText } from '../logic/url_input_func';

class Index extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      textInput: '',
      maleCount: 0,
      femaleCount: 0,
      neutralCount: 0,
      urlInput: '',
      urlErrors: {url: ''},
      urlValid: false,
      formValid: false
    };

    this.handleChange = this.handleChange.bind(this);
    this.analyzeText = this.analyzeText.bind(this);
    this.onUrlChange = this.onUrlChange.bind(this);
    this.onUrlSubmit = this.onUrlSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({
      textInput: event.target.value
    });
  }

  onUrlChange(event) {
    const name = event.target.name;
    const value = event.target.value;
    this.setState({
      urlInput: event.target.value
    },
      () => { this.validateUrl(name, value) });
  }

  validateUrl(fieldName, value) {
    let urlValidationErrors = this.state.urlErrors;
    let urlValid = this.state.urlValid;

    switch(fieldName) {
      case 'url':
        urlValid = value.match(/^((https?):\/\/)?([w|W]{3}\.)+[a-zA-Z0-9\-\.]{3,}\.[a-zA-Z]{2,}(\.[a-zA-Z]{2,})?$/);
        urlValidationErrors.url = urlValid ? '' : ' address is invalid';
        break;
      default:
        break;
    }
    this.setState({
      urlErrors: urlValidationErrors,
      urlValid: urlValid
    }, this.validateForm);
  }

  validateForm() {
    this.setState({
      formValid: this.state.urlValid
    });
  }

  onUrlSubmit(event) {
    event.preventDefault();
    getWebText(this.state.urlInput);
  }

  analyzeText(event) {
    event.preventDefault();
    this.setState({
      maleCount: countInstances(maleList, this.state.textInput.split(" ")),
      femaleCount: countInstances(femaleList, this.state.textInput.split(" ")),
      neutralCount: countInstances(neutralList, this.state.textInput.split(" "))
    });
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
            <FormErrors urlErrors={this.state.urlErrors} />
            <form onSubmit={this.onUrlSubmit}>
              <input type="text" name="url" value={this.state.urlInput} onChange={this.onUrlChange} />
              <input type="submit" value="submit" disabled={!this.state.formValid} />
            </form>
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