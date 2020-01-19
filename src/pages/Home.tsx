import React from 'react';
import logo from '../img/cd-current.svg';
import version from '../../package.json';
import Highlight from 'react-highlight';
import DarkExample from '../img/CDExample.png';
import MobileExample from '../img/Mobile.png';

const Home: React.FC = () => {
    return (
        <div id="home">
            <header>
                <img src={logo} alt="Logo" />
                <h1>Cleanify Design</h1>
                <h2>{version.description}</h2>
            </header>
            <h1 className="blueBanner">A new renovate design!</h1>
            <article className="grid">
                <section className="transparent">
                    <h4>HTML5 support</h4>
                    <p>Cleanify use tags implemented in HTML5 for better organization and code reading.</p>
                    <p><b>Examples:</b> {'<nav>, <section>, <article>'}, etc.</p>
                </section>
                <section className="transparent">
                    <Highlight className="codeSnippet html">
                        {'<nav>'}<br />
                        {'  <a class="navbar-title">Cleanify Design</a>'}<br />
                        {'  <ul class="navbar-menu">'}<br />
                        {'      <li>Example Text</li>'}<br />
                        {'  </ul>'}<br />
                        {'</nav>'}<br />
                        {'<article>'}<br />
                        {'  <section>...</section>'}<br />
                        {'</article>'}<br />
                        {'<footer>...</footer>'}
                    </Highlight>
                </section>
            </article>
            <article className="grid">
                <section className="transparent">
                    <h4>Dark Mode</h4>
                    <p>Depending on the theme established in the system (dark or light), Cleanify will adapt to it automatically!</p>
                    <p>Now if Windows is dark, Cleanify too! If Windows is light, Cleanify will be too!</p>
                    <p>Also, this was tested in GNOME 3 and works too!</p>
                </section>
                <section className="transparent">
                    <img src={DarkExample} alt="Example" className="roundered" width="100%"/>
                </section>
            </article>
            <article className="grid">
                <section className="transparent">
                    <h4>Mobile ready</h4>
                    <p>The design has been adapted for better mobile viewing and anything screen with a responsive style like Bootstrap!</p>
                </section>
                <section className="transparent">
                    <img src={MobileExample} alt="Mobile" width="100%"/>
                </section>
            </article>
        </div>
    );
}

export default Home;