import React, { Component } from 'react';


export default class LeftItems extends Component {

    render() {

        const { soundArray, playDrum } = this.props;
        const soundLength = soundArray.map((sound) => {
            return (
                <button data-key={sound.dataKey} onKeyDown={(e) => { playDrum(sound.letter, e) }} onClick={(e) => { playDrum(sound.letter, e) }} key={sound.id} className="btn btn-key text-white">{sound.letter} <audio id={sound.letter} className="clip" src={sound.sound}></audio></button>
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












