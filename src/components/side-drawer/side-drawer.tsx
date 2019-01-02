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
    @Prop({reflectToAttr: true, mutable: true}) open: boolean

    closeDrawer() {
        this.open = false
    }

    changeContent(content: string) {

    }
    
    render() {
        let mainContent = <slot></slot>
        mainContent = (
            <div id="contact-info">
                <h2>Contact Information</h2>
                <p>You can reach us via phone or email.</p>
                <ul>
                    <li>Phone: 9884734987487294</li>
                    <li>E-Mail:{' '} 
                    <a href="mailto:something@something.com">something@something.com</a>
                    </li>
                </ul>
            </div>
        )
        return (
            <aside>
                <header>
                    <h1>{this.title}</h1>
                    <button onClick={this.closeDrawer.bind(this)}>X</button>
                </header>
                <section id="tabs"> 
                    <button class="active" onClick={this.changeContent.bind(this, 'nav')}>Navigation</button>
                    <button onClick={this.changeContent.bind(this, 'contact')}>Contact</button>
                </section>
                <main>
                    {mainContent}
                </main>
            </aside>
        )
    }
}