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
              height: '200px',
              width: '150px',
              marginRight: '3rem',
              marginTop: '6rem',
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
