import * as React from 'react';

export class Message extends React.Component<{
    titleClass: string,
    msg:        string,
    children:   React.ReactNode
}> {
    render() {
        return (
            <section className="container">
                <h1 className={ `sop-${ this.props.titleClass }` }>{ this.props.msg }</h1>
                { this.props.children }
            </section>
        );
    }
}
