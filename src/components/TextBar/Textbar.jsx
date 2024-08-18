import { Grid, GridColumn, GridRow } from 'semantic-ui-react';
const Textbar = () => {
  return (
    <div style={{ marginTop: '3.5rem', marginBottom: '6rem' }}>
      <Grid divided='vertically'>
        <GridRow columns={2}>
          <GridColumn>
            {' '}
            <p style={{ fontSize: '18px' }}>
              Illuminate individual skills for tailored education and career
              recommendations. Maximize student education, uncover equitable
              workforce opportunities and foster success in a skills-driven
              economy.
            </p>
          </GridColumn>
          <GridColumn style={{ display: 'flex', justifyContent: 'center' }}>
            <div>
              <button>Our Technology</button>
              <button style={{ marginLeft: '2rem' }}>Request a Demo</button>
            </div>
          </GridColumn>
        </GridRow>
      </Grid>
    </div>
  );
};

export default Textbar;
