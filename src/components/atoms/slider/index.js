import React from 'react';
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';

const SliderContainer = ({ min = 0, max = 100, value, defaultValue, onChange, title }) => {
  return (
    <div className='wasteless-slider-wrapper'>
      <p className='wasteless-slider-title'>{title}</p>
      <div className='wasteless-slider-content'>
        <Slider
          min={min}
          max={max}
          onChange={onChange}
          defaultValue={defaultValue}
        />
        <span className='wasteless-slider-value'>{value}%</span>
      </div>
    </div>
  )
}

export default SliderContainer
