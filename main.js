import React from 'react';
import { render } from 'react-dom';
import GifSearch from 'react-gif-search';

const Main = () => <GifSearch />;

render(<Main />, document.getElementById('main'));
