class Counters extends React.Component {
  render() {
    const femaleCount = this.props.femaleNum;
    const maleCount = this.props.maleNum;
    const neutralCount = this.props.neutralNum;
    
    return (
    <div className="textBox">
      <style jsx>{`
       
      `}</style>
      <div className="counter-area">Female Count: {femaleCount}</div>
      <div className="counter-area">Male Count: {maleCount}</div>
      <div className="counter-area">Neutral Count: {neutralCount}</div>

    </div> 
    );
  }
}
export default Counters
