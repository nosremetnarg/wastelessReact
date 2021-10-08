import React, { useState } from 'react';
import { Button, InputNumber } from 'antd';
import {
  ResponsiveContainer,
  LineChart,
  Line,
  CartesianGrid,
  Tooltip,
  Legend,
  XAxis,
  YAxis
} from 'recharts';

import Slider from '../atoms/slider';
import {
  bread,
  fish,
  frozenFood,
  fruitAndVegetables,
  mealIcon,
  meat,
  milk,
} from '../../assets/images';

import { chartData } from '../../utils/variable';

const Dashboard = () => {
  const [price, setPrice] = useState(0);
  const [packedMeals, setPackedMeals] = useState(8);
  const [frozenFoods, setFrozenFoods] = useState(5);
  const [fruits, setFruits] = useState(14);
  const [meat, setMeat] = useState(10);
  const [bakery, setBakery] = useState(6);
  const [seaFood, setSeaFood] = useState(1);
  const [dairy, setDairy] = useState(10);

  return (
    <div className='container dashboard-container'>
      <div className='input-container'>
        <p className='input-title'>What's your Total Annuel Revenue(gross)?</p>
        <div>
          $ <InputNumber value={price} onChange={setPrice} size='large' />
        </div>
        <p className='input-description'>Out of the total revenue, how much each of the following represent and what's their waste %?</p>
      </div>
      <div className='slides-group'>
        <div className='dashboard-left'>
          <div className='dashboard-item'>
            <div className='item-left'>
              <img src={bread} alt='' />
            </div>
            <div className='item-right'>
              <p className='title'>Packed meals / Deli</p>
              <Slider
                title='% of total revenue'
                value={packedMeals}
                defaultValue={8}
                onChange={setPackedMeals}
                max={30}
              />
              <Slider title='Waste %' />
            </div>
          </div>
          <div className='dashboard-item'>
            <div className='item-left'>
              <img src={frozenFood} alt='' />
            </div>
            <div className='item-right'>
              <p className='title'>Frozen Foods</p>
              <Slider
                title='% of total revenue'
                value={frozenFoods}
                defaultValue={5}
                onChange={setFrozenFoods}
                max={30}
              />
              <Slider title='Waste %' />
            </div>
          </div>
          <div className='dashboard-item'>
            <div className='item-left'>
              <img src={fruitAndVegetables} alt='' />
            </div>
            <div className='item-right'>
              <p className='title'>Fruits & Vegetables</p>
              <Slider
                title='% of total revenue'
                value={fruits}
                defaultValue={14}
                onChange={setFruits}
                max={30}
              />
              <Slider title='Waste %' />
            </div>
          </div>
          <div className='dashboard-item'>
            <div className='item-left'>
              <img src={mealIcon} alt='' />
            </div>
            <div className='item-right'>
              <p className='title'>Meat & Poultry</p>
              <Slider
                title='% of total revenue'
                value={meat}
                defaultValue={10}
                onChange={setMeat}
                max={30}
              />
              <Slider title='Waste %' />
            </div>
          </div>
        </div>
        <div className='dashboard-right'>
          <div className='dashboard-item'>
            <div className='item-left'>
              <img src={milk} alt='' />
            </div>
            <div className='item-right'>
              <p className='title'>Bakery</p>
              <Slider
                title='% of total revenue'
                value={bakery}
                defaultValue={6}
                onChange={setBakery}
                max={30}
              />
              <Slider title='Waste %' />
            </div>
          </div>
          <div className='dashboard-item'>
            <div className='item-left'>
              <img src={fish} alt='' />
            </div>
            <div className='item-right'>
              <p className='title'>Seafood</p>
              <Slider
                title='% of total revenue'
                value={seaFood}
                defaultValue={1}
                onChange={setSeaFood}
                max={30}
              />
              <Slider title='Waste %' />
            </div>
          </div>
          <div className='dashboard-item'>
            <div className='item-left'>
              <img src={milk} alt='' />
            </div>
            <div className='item-right'>
              <p className='title'>Dairy</p>
              <Slider
                title='% of total revenue'
                value={dairy}
                defaultValue={10}
                onChange={setDairy}
                max={30}
              />
              <Slider title='Waste %' />
            </div>
          </div>
        </div>
      </div>
      <div className='simulate-button'>
        <Button
          type='primary'
          onClick={() => console.log('-------------')}
        >
          SIMULATE
        </Button>
      </div>
      <div className='chart-container'>
        <ResponsiveContainer width='100%' height={600}>
          <LineChart data={chartData}
            margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
            <XAxis dataKey="name" />
            <YAxis />
            <CartesianGrid strokeDasharray="3 3" />
            <Tooltip />
            <Legend verticalAlign="top" height={36}/>
            <Line name="pv of pages" dataKey="pv" stroke="#8884d8" />
            <Line name="uv of pages" dataKey="uv" stroke="#82ca9d" />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  )
}

export default Dashboard
