import React, { Component } from 'react';
import LeftItems from './components/LeftItems';
import RightItems from './components/RightItems';
import './App.css';


export default class App extends Component {
  state =
    {
      soundComponents: [
        {
          id: 1,
          text: 'Heater-1',
          key: 'Q',
          sound: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3',
          dataKey: 81
        },
        {
          id: 2,
          text: 'Heater-2',
          key: 'W',
          sound: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3',
          dataKey: 87
        },
        {
          id: 3,
          text: 'Heater-3',
          key: 'E',
          sound: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3',
          dataKey: 69
        },
        {
          id: 4,
          text: 'Heater-4',
          key: 'A',
          sound: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3',
          dataKey: 65
        },
        {
          id: 5,
          text: 'Heater-6',
          key: 'S',
          sound: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3',
          dataKey: 83
        },
        {
          id: 6,
          text: 'Dsc_Oh',
          key: 'D',
          sound: 'https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3',
          dataKey: 68
        },
        {
          id: 7,
          text: 'Kick_n_Hat',
          key: 'Z',
          sound: 'https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3',
          dataKey: 90
        },
        {
          id: 8,
          text: 'RP4_KICK_1',
          key: 'X',
          sound: 'https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3',
          dataKey: 88
        },
        {
          id: 9,
          text: 'Cev_H2',
          key: 'C',
          sound: 'https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3',
          dataKey: 67
        },

      ],
      powerBtn: false,

      currentSongText: ''

    }



  // componentDidMount() {
  //     window.addEventListener('keypress', this.handleKeyPress)
  //   }
  componentDidMount = () => {
    console.log('mounted')
    window.addEventListener('keypress', this.handleKeyPress)
  }


  //checks that the poer button is on and cheks the id of teh button and the keyboard key
  //then plays a sound 
  playDrum = (key, e) => {
    console.log('clicked')

    console.log(this.state.powerBtn)
    if (this.state.powerBtn === false) {
      return
    }


    console.log(key)
    console.log(document.getElementById(key))
    document.getElementById(key).play();
    this.setState({
      //soundComponents: [...this.state.soundComponents,]
      currentSongText: this.getTextOfClickedButton(key)
    })



  }


  //
  handleKeyPress = (e) => {
    if (this.state.powerBtn === false) {
      return
    }
    //const keyPad = this.state.soundComponents.find(item => item.key === e.key);
    const keyPad = this.state.soundComponents.find((item => {
      return item.key === e.key.toUpperCase()
    }))

    if (keyPad) {
      document.getElementById(keyPad.key).play();
      console.log(keyPad.key)
      this.setState({
        currentSongText: this.getTextOfClickedButton(keyPad.key)
      })
    }

    console.log(keyPad)
  }

  //get text of clicked button
  getTextOfClickedButton = (key) => {
    let tempArray = [...this.state.soundComponents]
    console.log(tempArray);
    let buttonClicked = tempArray.find(item => item.key === key)
    console.log(buttonClicked);
    //console.log(buttonClicked['text']);
    const clickedText = buttonClicked['text'];
    //this.state.newArr.push(clickedText)

    //console.log(letter);
    return clickedText;
  }


  //turns off and on the drum machine
  togglePowerBtn = () => {
    console.log('ok1')
    this.setState(state => ({
      powerBtn: !state.powerBtn
    }))
    console.log(this.state.powerBtn)
  }

  //control the volume to half
  volumeControlHalf = () => {
    const q = document.getElementById('Q');
    const w = document.getElementById('W');
    const e = document.getElementById('E');
    const a = document.getElementById('A');
    const s = document.getElementById('S');
    const d = document.getElementById('D');
    const z = document.getElementById('Z');
    const x = document.getElementById('X');
    const c = document.getElementById('C');

    q.volume = 0.2;
    w.volume = 0.2;
    e.volume = 0.2;
    a.volume = 0.2;
    s.volume = 0.2;
    d.volume = 0.2;
    z.volume = 0.2;
    x.volume = 0.2;
    c.volume = 0.2;

  }

  //controls the volume to full
  volumeControlFull = () => {
    const q = document.getElementById('Q');
    const w = document.getElementById('W');
    const e = document.getElementById('E');
    const a = document.getElementById('A');
    const s = document.getElementById('S');
    const d = document.getElementById('D');
    const z = document.getElementById('Z');
    const x = document.getElementById('X');
    const c = document.getElementById('C');

    q.volume = 1.0;
    w.volume = 1.0;
    e.volume = 1.0;
    a.volume = 1.0;
    s.volume = 1.0;
    d.volume = 1.0;
    z.volume = 1.0;
    x.volume = 1.0;
    c.volume = 1.0;
  }

  render() {
    //console.log(this.state)
    //console.log(this.state.soundComponents)
    return (
      <div id="drum-machine" className="container">
        <h1 className="text-center text-capitalize text-white mt-5">drum machine</h1>
        <div className="col-10 col-md-6 mx-auto box">
          <div className="row">
            <div className="col-md-8" id="btn-container" >
              <div className="row">
                <div className="col-md ">
                  <LeftItems
                    soundArray={this.state.soundComponents}
                    playDrum={this.playDrum}
                  />
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-md">

                <RightItems
                  //text={this.state.newArr}
                  text={this.state.currentSongText}
                  togglePowerBtn={this.togglePowerBtn}
                  volumeControlHalf={this.volumeControlHalf}
                  volumeControlFull={this.volumeControlFull}
                  // volumeControl={this.volumeControl}
                  getClickedButton={this.getClickedButton}
                />

              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
  componentWillUnmount() {
    window.removeEventListener('keypress', this.handleKeyPress)
  }
}
