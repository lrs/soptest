import * as React from 'react';
import { render } from 'react-dom';

import { Message } from './components';

render(
    <Message msg="Shades of Purple Test" titleClass="heading">
        <p>Test settings for Shades of Purple color theme in VS code.</p>
    </Message>,
    document.getElementById('app')
);
