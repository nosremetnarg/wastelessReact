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

import {
  calculateWasteSavings,
  calculateRevenueUpsales,
} from '../../utils/function';

const Dashboard = () => {
  const [data, setData] = useState([]);
  const [price, setPrice] = useState(0);
  const [packedMeals, setPackedMeals] = useState(8);
  const [packedMealsWaste, setPackedMealsWaste] = useState(10);
  const [frozenFoods, setFrozenFoods] = useState(5);
  const [frozenFoodsWaste, setFrozenFoodsWaste] = useState(1);
  const [fruits, setFruits] = useState(14);
  const [fruitsWaste, setFruitesWaste] = useState(14);
  const [meat, setMeat] = useState(10);
  const [meatWaste, setMeatWaste] = useState(6);
  const [bakery, setBakery] = useState(6);
  const [bakeryWaste, setBakeryWaste] = useState(15);
  const [seaFood, setSeaFood] = useState(1);
  const [seaFoodWaste, setSeaFoodWaste] = useState(12);
  const [dairy, setDairy] = useState(10);
  const [dairyWaste, setDairyWaste] = useState(5);

  const getChartData = () => {
    const labels = [
      'Jan',
      'Feb',
      'Mar',
      'Apr',
      'May',
      'Jun',
      'Jul',
      'Aug',
      'Sep',
      'Oct',
      'Nov',
      'Dec',
    ];
    const data = labels.map((item, index) => {
      return {
        name: item,
        revenue: getRevenue(index + 1),
        savings: getSavings(index + 1),
      }
    });
    setData(data);
  }

  const getRevenue = (double) => {
    const packedMealsRevenue = calculateRevenueUpsales(price, packedMeals);
    const frozenFoodsRevenue = calculateRevenueUpsales(price, frozenFoods);
    const fruitsRevenue = calculateRevenueUpsales(price, fruits);
    const meatRevenue = calculateRevenueUpsales(price, meat);
    const bakeryRevenue = calculateRevenueUpsales(price, bakery);
    const seaFoodRevenue = calculateRevenueUpsales(price, seaFood);
    const dairyRevenue = calculateRevenueUpsales(price, dairy);
    return (packedMealsRevenue + frozenFoodsRevenue + fruitsRevenue + meatRevenue + bakeryRevenue + seaFoodRevenue + dairyRevenue) * double / 12
  }

  const getSavings = (double) => {
    const packedMealsSaving = calculateWasteSavings(price, packedMeals, packedMealsWaste, 0.5);
    const frozenFoodsSaving = calculateWasteSavings(price, frozenFoods, frozenFoodsWaste, 0.5);
    const fruitsSaving = calculateWasteSavings(price, fruits, fruitsWaste, 0.24);
    const meatSaving = calculateWasteSavings(price, meat, meatWaste, 0.5);
    const bakerySaving = calculateWasteSavings(price, bakery, bakeryWaste, 0.09);
    const seaFoodSaving = calculateWasteSavings(price, seaFood, seaFoodWaste, 0.5);
    const dairySaving = calculateWasteSavings(price, dairy, dairyWaste, 0.5);
    return (packedMealsSaving + frozenFoodsSaving + fruitsSaving + meatSaving + bakerySaving + seaFoodSaving + dairySaving) * double / 12
  }

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
              <Slider
                title='Waste %'
                value={packedMealsWaste}
                defaultValue={10}
                onChange={setPackedMealsWaste}
                max={100}
              />
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
              <Slider
                title='Waste %'
                value={frozenFoodsWaste}
                defaultValue={1}
                onChange={setFrozenFoodsWaste}
                max={100}
              />
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
              <Slider
                title='Waste %'
                value={fruitsWaste}
                defaultValue={14}
                onChange={setFruitesWaste}
                max={100}
              />
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
              <Slider
                title='Waste %'
                value={meatWaste}
                defaultValue={6}
                onChange={setMeatWaste}
                max={100}
              />
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
              <Slider
                title='Waste %'
                value={bakeryWaste}
                defaultValue={15}
                onChange={setBakeryWaste}
                max={100}
              />
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
              <Slider
                title='Waste %'
                value={seaFoodWaste}
                defaultValue={15}
                onChange={setSeaFoodWaste}
                max={100}
              />
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
              <Slider
                title='Waste %'
                value={dairyWaste}
                defaultValue={5}
                onChange={setDairyWaste}
                max={100}
              />
            </div>
          </div>
        </div>
      </div>
      <div className='simulate-button'>
        <Button
          type='primary'
          onClick={getChartData}
        >
          SIMULATE
        </Button>
      </div>
      <div className='chart-container'>
        <ResponsiveContainer width='100%' height={600}>
          <LineChart data={data}
            margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
            <XAxis dataKey="name" />
            <YAxis />
            <CartesianGrid strokeDasharray="3 3" />
            <Tooltip />
            <Legend verticalAlign="top" height={36}/>
            <Line name="Money Saved" dataKey="revenue" stroke="#8884d8" />
            <Line name="Money Saved" dataKey="savings" stroke="#82ca9d" />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  )
}

export default Dashboard
