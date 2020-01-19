import React from 'react';
import logo from '../../img/cd-current.svg';
import Highlight from 'react-highlight';
import { Link } from 'react-router-dom';

const Components: React.FC = () => {
    return (
        <article>
            <section className="transparent">
                <h2>Forms</h2>
                <section>
                    <form>
                        <h4>Common inputs</h4>
                        <p>Text</p>
                        <input type="text" placeholder="Text" />
                        <p>Number</p>
                        <input type="number" placeholder="Number" />
                        <p>Password</p>
                        <input type="password" placeholder="Password" />
                        <p>Date</p>
                        <input type="date" />
                        <p>Email</p>
                        <input type="email" placeholder="Email@test.com" />
                        <p>Select</p>
                        <select>
                            <option>Test 1</option>
                            <option>Test 2</option>
                            <option>Test 3</option>
                        </select>
                        <p>Select multiple</p>
                        <select multiple>
                            <option>Test 1</option>
                            <option>Test 2</option>
                            <option>Test 3</option>
                        </select>
                        <p>Textarea</p>
                        <textarea cols={30} rows={10}>Text Example</textarea>
                        <Highlight className="codeSnippet html">
                            {'<p>...</p>'}<br />
                            {'<input type="..." placeholder="..." />'}<br />
                            {'<textarea cols="..." rows="..."></textarea>'}
                        </Highlight>
                    </form>
                </section>
                <section>
                    <form>
                        <h4>Form groups</h4>
                        <div className="group">
                            <fieldset>
                                <p>Group Text</p>
                                <input type="text" />
                            </fieldset>
                            <fieldset>
                                <p>Group Date</p>
                                <input type="date" />
                            </fieldset>
                        </div>
                        <Highlight className="codeSnippet html">
                            {'<div class="group">'}<br />
                            {'  <fieldset>'}<br />
                            {'      ...'}<br />
                            {'  </fieldset>'}<br />
                            {'</div>'}
                        </Highlight>
                    </form>
                </section>
                <section>
                    <form>
                        <h4>Checkbox & Radio</h4>
                        <div className="group">
                            <fieldset>
                                <input type="checkbox" id="checkTest" />
                                <label htmlFor="checkTest">Checkbox 1</label>
                                <input type="checkbox" id="checkTest2" />
                                <label htmlFor="checkTest2">Checkbox 2</label>
                                <input type="checkbox" id="checkTest3" />
                                <label htmlFor="checkTest3">Checkbox 3</label>
                            </fieldset>
                            <fieldset>
                                <input type="radio" id="radioTest" name="test" />
                                <label htmlFor="radioTest">Radio 1</label>
                                <input type="radio" id="radioTest2" name="test" />
                                <label htmlFor="radioTest2">Radio 2</label>
                                <input type="radio" id="radioTest3" name="test" />
                                <label htmlFor="radioTest3">Radio 3</label>
                            </fieldset>
                        </div>


                        <Highlight className="codeSnippet html">
                            {'<input type="checkbox/radio" id="..." />'}<br />
                            {'<label for="...">...</label>'}
                        </Highlight>
                    </form>
                </section>
                <section>
                    <form>
                        <h4>Buttons</h4>
                        <input type="button" value="Button" />
                        <input type="submit" value="Submit" />
                        <input type="reset" value="Reset" />
                        <button>Button tag</button>
                        <Highlight className="codeSnippet html">
                            {'<input type="button/submit/reset" value="..." />'}<br />
                            {'<button>...</button>'}
                        </Highlight>
                    </form>
                </section>
            </section>
            <hr />
            <section className="transparent">
                <h2>Footer</h2>
                <section>
                    <footer>
                        <p>Footer without list/links</p>
                    </footer>
                    <footer>
                        <p>Footer with list/links</p>
                        <ol>
                            <li>Text 1</li>
                            <li>Text 2</li>
                        </ol>
                    </footer>
                </section>
                <Highlight className="codeSnippet html">
                    {'<footer>'}<br />
                    {'  <p>...</p>'}<br />
                    {'</footer>'}<br />
                    <br />
                    {'<footer>'}<br />
                    {'  <p>...</p>'}<br />
                    {'  <ol>'}<br />
                    {'      <li>...</li>'}<br />
                    {'  </ol>'}<br />
                    {'</footer>'}
                </Highlight>
            </section>
            <hr />
            <section className="transparent">
                <h2>Header</h2>
                <header>
                    <img src={logo} alt="Logo" />
                    <h1>Cleanify Design</h1>
                    <h2>HTML, CSS & JS personal framework</h2>
                </header>
                <br />
                <Highlight className="codeSnippet html">
                    {'<header>'}<br />
                    {'  <img src="IMAGE URL">'}<br />
                    {'  <h1>...</h1>'}<br />
                    {'  <h2>...</h2>'}<br />
                    {'</header>'}
                </Highlight>
            </section>
            <hr />
            <section className="transparent">
                <h2>Header gradients</h2>
                <header className="gradient-1" >
                    <h1>Example Title</h1>
                </header>
                <br />
                <Highlight className="codeSnippet html">
                    {'<header class="gradient-1">'}<br />
                    {'  ...'}<br />
                    {'</header>'}
                </Highlight>
                <br />
                <header className="gradient-2">
                    <h1>Example Title</h1>
                </header>
                <br />
                <Highlight className="codeSnippet html">
                    {'<header class="gradient-2">'}<br />
                    {'  ...'}<br />
                    {'</header>'}
                </Highlight>
                <br />
                <header className="gradient-3">
                    <h1>Example Title</h1>
                </header>
                <br />
                <Highlight className="codeSnippet html">
                    {'<header class="gradient-3">'}<br />
                    {'  ...'}<br />
                    {'</header>'}
                </Highlight>
                <br />
                <header className="gradient-4">
                    <h1>Example Title</h1>
                </header>
                <br />
                <Highlight className="codeSnippet html">
                    {'<header class="gradient-4">'}<br />
                    {'  ...'}<br />
                    {'</header>'}
                </Highlight>
                <br />
                <header className="gradient-5">
                    <h1>Example Title</h1>
                </header>
                <br />
                <Highlight className="codeSnippet html">
                    {'<header class="gradient-5">'}<br />
                    {'  ...'}<br />
                    {'</header>'}
                </Highlight>
            </section>
            <hr />
            <section className="transparent">
                <h2>Inline list</h2>
                <ol>
                    <li>Text</li>
                    <li><Link to="/docs/components">Link</Link></li>
                    <li>Text</li>
                </ol>
                <Highlight className="codeSnippet html">
                    {'<ol>'}<br />
                    {'  <li>...</li>'}<br />
                    {'</ol>'}
                </Highlight>
            </section>
            <hr />
            <section className="transparent">
                <h2>List</h2>
                <ul>
                    <li>Hello World!</li>
                    <li>Example text</li>
                    <li>Test 3</li>
                    <li><Link to="/docs/components">Link example</Link></li>
                </ul>
                <br />
                <Highlight className="codeSnippet html">
                    {'<ul>'}<br />
                    {'  <li>...</li>'}<br />
                    {'</ul>'}
                </Highlight>
            </section>
            <hr />
            <section className="transparent">
                <h2>Navbar</h2>
                <section>
                    <nav>
                        <Link to="/docs/components" className="navbar-title">Cleanify Example</Link>
                        <ul className="navbar-menu">
                            <li>Home</li>
                            <li>Test</li>
                        </ul>
                        <ul className="navbar-right-menu">
                            <li>Right Text</li>
                        </ul>
                    </nav>
                </section>
                <Highlight className="codeSnippet html">
                    {'<nav>'}<br />
                    {'  <a class="navbar-title" href="URL">...</a>'}<br />
                    {'  <ul class="navbar-menu">'}<br />
                    {'      <li>...</li>'}<br />
                    {'  </ul>'}<br />
                    {'  <ul class="navbar-right-menu">'}<br />
                    {'      <li>...</li>'}<br />
                    {'  </ul>'}<br />
                    {'</nav>'}
                </Highlight>
            </section>
            <hr />
            <section className="transparent">
                <h2>Progress bar</h2>
                <article className="grid">
                    <section>
                        <p>35%</p>
                        <progress max="100" value="35"></progress>
                    </section>
                    <section>
                        <p>Indetermined</p>
                        <progress max="100"></progress>
                    </section>
                </article>
            </section>
        </article>
    );
}

export default Components;