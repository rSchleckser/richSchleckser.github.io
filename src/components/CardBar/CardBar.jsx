import { CardGroup, Card } from 'semantic-ui-react';
import './CardBar.css';

const colors = ['red', 'orange', 'yellow', 'olive', 'green', 'teal'];

const CardBar = () => {
  return (
    <div>
      <CardGroup itemsPerRow={6}>
        {colors.map((color) => (
          <Card
            key={color}
            style={{
              height: '150px',
              width: '110px',
              marginRight: '3rem',
              marginTop: '2rem',
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
