import React from "react"
class MemeGenerator extends React.Component{
  constructor(){
    super()
    this.state={
      topText:"",
      bottomText:"",
      randomImage:"https://i.imgflip.com/49q4p8.jpg",
      allmemeImages: []
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind( this)
    }
    componentDidMount(){
      fetch("https://api.imgflip.com/get_memes")
      .then(response => response.json())
      .then(response => {
        const {memes} = response.data

        this.setState({allmemeImages : memes})
      } )
    }
      handleChange(event){
        const {name,value}=event.target;
        this.setState({ [name]: value });

      }
      handleSubmit(event){
        event.preventDefault()
        const randomNum=Math.floor(Math.random() * this.state.allmemeImages.length)
const randMemeImg= this.state.allmemeImages[randomNum].url

        this.setState({randomImage:randMemeImg})
      }

  render()
  {
    return(
      <div>
    <form onSubmit={this.handleSubmit}>
    <lable> topNext:
    <input
    type="text"
    name="topText"
    placeholder="topText"
  value={this.state.topText}
    onChange={this.handleChange}
    />
    </lable>
    <lable>
    bottomNext:
    <input
    type="text"
    name="bottomText"
    value={this.state.bottomText}
    onChange={this.handleChange}
    />
    </lable>

    <button>Gen</button>

    </form>

    <div className="memeimg">
    <img  src={this.state.randomImage} alt="notih"/>
    <h1 className="topText">{this.state.topText}</h1>
    <h1 className="bottomText"> {this.state.bottomText}</h1>
     </div>
</div>
    );
  }

}
export default MemeGenerator
