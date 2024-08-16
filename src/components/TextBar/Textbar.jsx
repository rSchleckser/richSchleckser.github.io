import { Grid, GridColumn, GridRow } from 'semantic-ui-react';
const Textbar = () => {
  return (
    <div>
      <Grid divided='vertically'>
        <GridRow columns={2}>
          <GridColumn>
            {' '}
            <p>
              Illuminate individual skills for tailored education and career
              recommendations. Maximize student education, uncover equitable
              workforce opportunities and foster success in a skills-driven
              economy.
            </p>
          </GridColumn>
          <GridColumn>
            {' '}
            <div>
              <button>Our Technology</button>
              <button>Request a Demo</button>
            </div>
          </GridColumn>
        </GridRow>
      </Grid>
    </div>
  );
};

export default Textbar;
