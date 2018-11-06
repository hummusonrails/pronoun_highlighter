import EvalText from '../components/evaltext';
import Header from '../components/header';

  class Index extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        textInput: ''
      };
  
      this.handleChange = this.handleChange.bind(this);
    }
  
    handleChange(event) {
      this.setState({
        textInput: event.target.value
      });
    }
  
    render() {

      const formattedText = 
        this.state.textInput.length > 0 ? this.state.textInput.split(" ").map(word => <EvalText word={word.split("'")[0]} />) : 'Waiting for your input.'
      return (
        <div>
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
              width: 10px;
              margin: 6px;
              background: black;
            }
          `}</style>
          <Header />
          <div className="main-content-wrapper">
            <div className="form-area">
              <form>            
                  <textarea rows="30" cols="60" value={this.state.value} onChange={this.handleChange} id="input-area" />
              </form>
            </div>
            <div className="divider"></div>
            <div className="text-area">
              {formattedText}
            </div>
          </div>
ß        </div>
      );
    }
  }
export default Index;
