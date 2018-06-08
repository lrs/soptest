import * as React from 'react';

/**
 * @description Simple stateless React Component.
 *
 * @export
 * @class Message
 * @extends React.Component
 */
export class Message extends React.Component<{
    titleClass: string,
    msg:        string,
    children:   React.ReactNode
}> {
    /**
     * @description Renders Component.
     *
     * @returns React.Node
     * @memberof Message
     */
    render() {
        return (
            <section className="container">
                <h1 className={ `sop-${ this.props.titleClass }` }>{ this.props.msg }</h1>
                { this.props.children }
            </section>
        );
    }
}
