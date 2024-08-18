import { CardGroup, Card } from 'semantic-ui-react';
import './CardBar.css';

const colors = ['red', 'orange', 'yellow', 'olive', 'green', 'teal'];

const CardBar = () => {
  return (
    <div className='cardContainer'>
      <CardGroup>
        {colors.map((color) => (
          <Card
            key={color}
            className='custom-card'
            style={{
              backgroundColor: color,
            }}
            color={color}
          />
        ))}
      </CardGroup>
    </div>
  );
};

export default CardBar;
