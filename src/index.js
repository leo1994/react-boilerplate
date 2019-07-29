import React from 'react';
import ReactDOM from 'react-dom';

const Root = () => <div> Works !!!</div>;

const root = document.createElement('div');
document.body.appendChild(root);

ReactDOM.render(<Root />, root);
