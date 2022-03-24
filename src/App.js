import Counter from './componants/Counter';
import Login from './componants/Login';
import Search from './componants/Search';
import BGColors from './componants/BGColors'
import RandomNumber from './componants/RandomNumber';

import { makeStyles } from '@mui/styles';
import Stack from '@mui/material/Stack';


const useStyles = makeStyles({
  root: {
    border: 0,
    borderRadius: 3,
    boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
    height: 'fit-content',
    padding: '50px 30px',
  }
});

function App() {

  const classes = useStyles();
  return (
    <Stack direction="row" spacing={2} className={classes.root}>
      <div className="App">
        <Search className="component" />
        <Counter className="component" />
        <Login className="component" />
        <BGColors className="component" />
        <RandomNumber className="component" />
      </div>
    </Stack>
  );

}

export default App;
