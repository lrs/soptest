import * as React from 'react';

export class Message extends React.Component {
    props;

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <section className="container">
                <h1 className={ `sop-${ this.props.titleClass }` }>{ this.props.msg }</h1>
                { this.props.children }
            </section>
        );
    }
}
