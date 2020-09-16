import React, { memo } from 'react';
import Card from './Card';

const CardList = ({ robots }) => {
    const cardComponent = robots.map((robot, index) => {
        return <Card key={index} id={robot.id} name={robot.name} email={robot.email} />
    })
    return (
        <div>
            {cardComponent}
        </div>
    )
}

export default memo(CardList);