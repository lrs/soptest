import * as React from 'react';
import * as Enzyme from 'enzyme';
import * as Adapter from 'enzyme-adapter-react-16';

import { Message } from '../src/components';

let msg: Enzyme.ShallowWrapper;

beforeAll(() => {
    Enzyme.configure({ adapter: new Adapter() });

    msg = Enzyme.shallow(
        <Message msg="Shades of Purple Test" titleClass="heading">
            <p>Test settings for Shades of Purple VS Code theme.</p>
        </Message>
    );
});

describe('<Message />', () => {
    test("Message renders wrapper", () => {
        expect(msg.length).toEqual(1);
    });

    test("Message renders heading", () => {
        const heading = msg.find('.sop-heading');

        expect(heading.length).toEqual(1);
    });

    test("Message renders children", () => {
        const child = msg.children().find('p');

        expect(child.length).toEqual(1);
    });
});
