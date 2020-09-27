import React from 'react'

export default function RightItems(props) {
    const { togglePowerBtn, text, volumeControlHalf, volumeControlFull } = props
    return (
        <div>
            <div className="row">
                <div className="btn-power">
                    <label htmlFor="final-toggle1" className="final__toggle-1">
                        <input onClick={() => { togglePowerBtn() }} type="checkbox" id="final-toggle1" className="final__toggle-1__input" />
                        <span className="final__toggle-1__button"></span>
                    </label>
                </div>
            </div>
            <div className="row">
                <div className="btn-text">
                    <h4 className="text-center pt-2 text-white" id="display">
                        {text}
                    </h4>
                </div>
            </div>
            <div className="row mt-3 slider-volume">
                <div className="ml-4">
                    <span className="vol-cover" onClick={() => { volumeControlFull() }} >
                        <i className="fas fa-arrow-circle-up vol-icon"></i>
                    </span>
                    <span className="vol-cover" onClick={() => { volumeControlHalf() }}>
                        <i className="fas fa-arrow-circle-down vol-icon ml-2"></i>
                    </span>
                    <span className="ml-2">vol.</span>
                </div>
            </div>
        </div>
    )
}
