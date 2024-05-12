import React from 'react'
import CardItem from './CardItem/CardItem';

import mano from '../../assets/mano.png';
import ia1 from '../../assets/ia1.png';
import aprendiendo from '../../assets/aprendiendo.png';
import software from '../../assets/software.png';

const Card = () => {
    return (
      <section className="grid grid-cols-4 gap-1 justify-center p-16 bg-stone-200">
        <CardItem image={mano} title="Simple" description="Simple, but powerful, front desk just one of our many features." />
        <CardItem image={ia1} title="Simple" description="Simple, but powerful, front desk just one of our many features." />
        <CardItem image={aprendiendo} title="Simple" description="Simple, but powerful, front desk just one of our many features." />
        <CardItem image={software} title="Simple" description="Simple, but powerful, front desk just one of our many features." />
        <CardItem image={mano} title="Simple" description="Simple, but powerful, front desk just one of our many features." />
        <CardItem image={ia1} title="Simple" description="Simple, but powerful, front desk just one of our many features." />
        <CardItem image={aprendiendo} title="Simple" description="Simple, but powerful, front desk just one of our many features." />
        <CardItem image={software} title="Simple" description="Simple, but powerful, front desk just one of our many features." />
      </section>
    );
  }
  
  export default Card;