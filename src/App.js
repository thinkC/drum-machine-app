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
          text: 'saxophone',
          letter: 'Q',
          sound: 'http://cd.textfiles.com/cdaction/cdaction47b/BEAT2000/SOUNDS/SFX/SAX.WAV',
          dataKey: 81
        },
        {
          id: 2,
          text: 'tom-tom',
          letter: 'W',
          sound: 'http://www.apo33.org/pub/puredata/APO/librairies_PD/recup/patches_obj/theLib/drum-machine/samples/TOM05L.WAV',
          dataKey: 87
        },
        {
          id: 3,
          text: 'hi-hat',
          letter: 'E',
          sound: 'http://dight310.byu.edu/media/audio/FreeLoops.com/4/4/Hi%20Hat%20Closing.wav-17754-Free-Loops.com.mp3',
          dataKey: 69
        },
        {
          id: 4,
          text: 'kenkeni',
          letter: 'A',
          sound: 'http://dight310.byu.edu/media/audio/FreeLoops.com/4/4/Kenkeni%20Hit.wav-18939-Free-Loops.com.mp3',
          dataKey: 65
        },
        {
          id: 5,
          text: 'guiro',
          letter: 'S',
          sound: 'http://stephane.brechet.free.fr/Sons/Wave/GUIRO.WAV',
          dataKey: 83
        },
        {
          id: 6,
          text: 'bass guitar',
          letter: 'D',
          sound: 'http://dight310.byu.edu/media/audio/FreeLoops.com/1/1/Bass%20Pick%20in%20A-19650-Free-Loops.com.mp3',
          dataKey: 68
        },
        {
          id: 7,
          text: 'whistle',
          letter: 'Z',
          sound: 'http://www.modular-planet.de/instruments/whistle/Whistle.mp3',
          dataKey: 90
        },
        {
          id: 8,
          text: 'cowbell',
          letter: 'X',
          sound: 'http://www.denhaku.com/r_box/rx11/cowbell_1.wav',
          dataKey: 88
        },
        {
          id: 9,
          text: 'harpsichord',
          letter: 'C',
          sound: 'http://www.takuichi.net/hobby/edu/sonic_wave/sound_analysis/sound_instruments/Harpsichord.wav',
          dataKey: 67
        },

      ],
      powerBtn: false,
      newArr: []
    }



  //checks that the poer button is on and cheks the id of teh button and the keyboard key
  //then plays a sound 
  playDrum = (id, e) => {
    console.log('clicked')
    if (this.state.powerBtn === false) {
      return
    }
    if (id === 'Q' || e.keyCode === 81) {
      console.log('played');
      console.log(document.getElementById('Q'))
      document.getElementById('Q').play()
      //console.log(document.getElementById('W'))
      this.setState({
        soundComponents: [...this.state.soundComponents,]
      })
      this.getClickedButton(id);

    } else if (id === 'W' || e.keyCode === 87) {
      console.log('played')
      document.getElementById('W').play()
      this.setState({
        soundComponents: [...this.state.soundComponents,]
      })
      this.getClickedButton(id);

    } else if (id === 'E' || e.keyCode === 69) {
      console.log('played')
      document.getElementById('E').play();
      this.setState({
        soundComponents: [...this.state.soundComponents,]
      })
      this.getClickedButton(id);

    } else if (id === 'A' || e.keyCode === 65) {
      console.log('played')
      document.getElementById('A').play();
      this.setState({
        soundComponents: [...this.state.soundComponents,]
      })
      this.getClickedButton(id);

    } else if (id === 'S' || e.keyCode === 83) {
      console.log('played')
      document.getElementById('S').play()
      this.setState({
        soundComponents: [...this.state.soundComponents,]
      })
      this.getClickedButton(id);

    } else if (id === 'D' || e.keyCode === 68) {
      console.log('played')
      document.getElementById('D').play();
      this.setState({
        soundComponents: [...this.state.soundComponents,]
      })
      this.getClickedButton(id);

    } else if (id === 'Z' || e.keyCode === 90) {
      console.log('played')
      document.getElementById('Z').play();
      this.setState({
        soundComponents: [...this.state.soundComponents,]
      })
      this.getClickedButton(id);

    } else if (id === 'X' || e.keyCode === 88) {
      console.log('played')
      document.getElementById('X').play()
      this.setState({
        soundComponents: [...this.state.soundComponents,]
      })
      this.getClickedButton(id);

    } else if (id === 'C' || e.keyCode === 67) {
      console.log('played')
      document.getElementById('C').play();
      this.setState({
        soundComponents: [...this.state.soundComponents,]
      })
      this.getClickedButton(id);

    }

  }

  getClickedButton = (letter) => {
    let tempArray = [...this.state.soundComponents]
    console.log(tempArray);
    let buttonClicked = tempArray.find(item => item.letter === letter)
    //console.log(buttonClicked);
    //console.log(buttonClicked['text']);
    const clickedText = buttonClicked['text'];
    this.state.newArr.push(clickedText)
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
      <div className="container">
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
                  text={this.state.newArr}
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
}
