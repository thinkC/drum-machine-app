import React, { Component } from 'react';


export default class LeftItems extends Component {

    render() {

        const { soundArray, playDrum } = this.props;
        const soundLength = soundArray.map((sound) => {
            return (
                <button id={sound.text} className="drum-pad btn btn-key text-white" data-key={sound.dataKey} onClick={(e) => { playDrum(sound.key, e) }} key={sound.id} >{sound.key} <audio id={sound.key} className="clip" src={sound.sound}></audio></button>
            )
        })

        return (
            <div>

                {soundLength}

                <div className="col-md-4 col-10 mx-auto">

                </div>
            </div>
        )
    }
}












