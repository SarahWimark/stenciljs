import { Component, Prop } from '@stencil/core';

/**
 * Component for a side-drawer menu
 *
 * @export
 * @class SideDrawer
 */
@Component({
    tag: 'sw-side-drawer',
    styleUrl: './side-drawer.css',
    shadow: true
})
export class SideDrawer {
    // {reflectToAttr: true} makes the attribute change reflect in the HTML
    @Prop({reflectToAttr: true}) title: string
    @Prop() open: boolean
    render() {
        return (
            <aside>
                <header><h1>{this.title}</h1></header>
                <main>
                    <slot></slot>
                </main>
            </aside>
        )
    }
}