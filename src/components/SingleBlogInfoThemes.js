import React, { useState } from 'react';
import "../Pages/Blog.css";
import { Link } from "react-router-dom";



const SingleBlogInfoThemes = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [text, setText] = useState("");
    const [textarea, setTextarea] = useState("");

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        switch (name) {
            case 'name':
                setName(value);
                break;
            case 'email':
                setEmail(value);
                break;
            case 'text':
                setText(value);
                break;
            case 'textarea':
                setTextarea(value);
                break;
            default:
                break;
        }
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        // alert(`Name: ${name}\nEmail: ${email}\nText: ${text}\nTextarea: ${textarea}`);
        console.log("YOUR COMMENTS ADD!!!")
    }

    return (
        <section className='infoTM'>
            <div className='infoTM-container container'>
                <div className='infoTM-list'>
                    <div className='infoTM-item'>
                        <h2 className='infoTM-title'>#1. We Love WordPress Themes</h2>
                        <p className='infoTM-text'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reiciendis, eius mollitia suscipit, quisquam doloremque distinctio perferendis et doloribus unde architecto optio laboriosam porro adipisci sapiente officiis nemo accusamus ad praesentium? Esse minima nisi et. Dolore perferendis, enim praesentium omnis, iste doloremque quia officia optio deserunt molestiae voluptates soluta architecto tempora.</p>
                        <p className='infoTM-img'>
                            <img src="./images/blog/infoTM_6.jpg" alt="info team" />
                        </p>
                        <p className="infoTM-text">Molestiae cupiditate inventore animi, maxime sapiente optio, illo est nemo veritatis repellat sunt doloribus nesciunt! Minima laborum magni reiciendis qui voluptate quisquam voluptatem soluta illo eum ullam incidunt rem assumenda eveniet eaque sequi deleniti tenetur dolore amet fugit perspiciatis ipsa, odit. Nesciunt dolor minima esse vero ut ea, repudiandae suscipit!</p>
                        <h2 className='infoTM-title'>#2. Creative WordPress Themes</h2>
                        <p className='infoTM-text'>Temporibus ad error suscipit exercitationem hic molestiae totam obcaecati rerum, eius aut, in. Exercitationem atque quidem tempora maiores ex architecto voluptatum aut officia doloremque. Error dolore voluptas, omnis molestias odio dignissimos culpa ex earum nisi consequatur quos odit quasi repellat qui officiis reiciendis incidunt hic non? Debitis commodi aut, adipisci.</p>
                        <div className='infoTM-img'>
                            <img src="./images/blog/infoTM_8.jpg" alt="info team" />
                        </div>
                        <p className="infoTM-text">Quisquam esse aliquam fuga distinctio, quidem delectus veritatis reiciendis. Nihil explicabo quod, est eos ipsum. Unde aut non tenetur tempore, nisi culpa voluptate maiores officiis quis vel ab consectetur suscipit veritatis nulla quos quia aspernatur perferendis, libero sint. Error, velit, porro. Deserunt minus, quibusdam iste enim veniam, modi rem maiores.</p>
                        <p className='infoTM-text'>Odit voluptatibus, eveniet vel nihil cum ullam dolores laborum, quo velit commodi rerum eum quidem pariatur! Quia fuga iste tenetur, ipsa vel nisi in dolorum consequatur, veritatis porro explicabo soluta commodi libero voluptatem similique id quidem? Blanditiis voluptates aperiam non magni. Reprehenderit nobis odit inventore, quia laboriosam harum excepturi ea.</p>
                        <p className="infoTM-text">Adipisci vero culpa, eius nobis soluta. Dolore, maxime ullam ipsam quidem, dolor distinctio similique asperiores voluptas enim, exercitationem ratione aut adipisci modi quod quibusdam iusto, voluptates beatae iure nemo itaque laborum. Consequuntur et pariatur totam fuga eligendi vero dolorum provident. Voluptatibus, veritatis. Beatae numquam nam ab voluptatibus culpa, tenetur recusandae!</p>
                        <p className='infoTM-text'>Voluptas dolores dignissimos dolorum temporibus, autem aliquam ducimus at officia adipisci quasi nemo a perspiciatis provident magni laboriosam repudiandae iure iusto commodi debitis est blanditiis alias laborum sint dolore. Dolores, iure, reprehenderit. Error provident, pariatur cupiditate soluta doloremque aut ratione. Harum voluptates mollitia illo minus praesentium, rerum ipsa debitis, inventore?</p>
                        <div className='infoTM-block'>
                            <div className='infoTM-links'>
                                <Link to="#" className="infoTM-link">Life</Link>
                                <Link to="#" className="infoTM-link">Sport</Link>
                                <Link to="#" className="infoTM-link">Tech</Link>
                                <Link to="#" className="infoTM-link">Travel</Link>
                            </div>
                        </div>
                        <div className='infoTM-author'>
                            <div className='author-self'>
                                <img src="./images/blog/person.jpg" alt="info team" />
                            </div>
                            <div className='author-self'>
                                <h3 className='self-title'>Lance Smith</h3>
                                <p className='infoTM-text'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus itaque, autem necessitatibus voluptate quod mollitia delectus aut, sunt placeat nam vero culpa sapiente consectetur similique, inventore eos fugit cupiditate numquam!</p>
                            </div>
                        </div>
                        <div className='infoTM-comments'>
                            <h2 className='comments-title'>6 Comments</h2>
                            <ul className='comment-list'>
                                <li className='comment1'>
                                    <div>
                                        <img src="./images/blog/person.jpg" alt="person 1"/>
                                    </div>
                                    <div>
                                        <h3>Jean Doe</h3>
                                        <div className='comments-meta'>June 27, 2018 at 2:21pm</div>
                                        <p className='comments-text'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur quidem laborum necessitatibus, ipsam impedit vitae autem, eum officia, fugiat saepe enim sapiente iste iure! Quam voluptas earum impedit necessitatibus, nihil?</p>
                                        <div>
                                            <Link to="#" className='reply' >Reply</Link>
                                        </div>
                                    </div>
                                </li>
                                <li className='comment2'>
                                    <div className='comment'>
                                        <div>
                                            <img src="./images/blog/person.jpg" alt="person 2blog"/>
                                        </div>
                                        <div>
                                            <h3>Jean Doe</h3>
                                            <div className='comments-meta'>June 27, 2018 at 2:21pm</div>
                                            <p className='comments-text'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur quidem laborum necessitatibus, ipsam impedit vitae autem, eum officia, fugiat saepe enim sapiente iste iure! Quam voluptas earum impedit necessitatibus, nihil?</p>
                                            <div>
                                                <Link to="#" className='reply' >Reply</Link>
                                            </div>
                                        </div>
                                    </div>
                                    <ul className='children'>
                                        <li className='comment2'>
                                            <div className='comment'>
                                                <div>
                                                    <img src="./images/blog/person.jpg" alt="person 4 blog" />
                                                </div>
                                                <div>
                                                    <h3>Jean Doe</h3>
                                                    <div className='comments-meta'>June 27, 2018 at 2:21pm</div>
                                                    <p className='comments-text'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur quidem laborum necessitatibus, ipsam impedit vitae autem, eum officia, fugiat saepe enim sapiente iste iure! Quam voluptas earum impedit necessitatibus, nihil?</p>
                                                    <div>
                                                        <Link to="#" className='reply' >Reply</Link>
                                                    </div>
                                                </div>
                                            </div>
                                            <ul className='children'>
                                                <li className='comment2'>
                                                    <div className='comment'>
                                                        <div>
                                                            <img src="./images/blog/person.jpg" alt="person 5 blog"/>
                                                        </div>
                                                        <div>
                                                            <h3>Jean Doe</h3>
                                                            <div className='comments-meta'>June 27, 2018 at 2:21pm</div>
                                                            <p className='comments-text'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur quidem laborum necessitatibus, ipsam impedit vitae autem, eum officia, fugiat saepe enim sapiente iste iure! Quam voluptas earum impedit necessitatibus, nihil?</p>
                                                            <div>
                                                                <Link to="#" className='reply' >Reply</Link>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <ul className='children'>
                                                        <li className='comment2'>
                                                            <div className='comment'>
                                                                <div>
                                                                    <img src="./images/blog/person.jpg" alt="person 6 bloger"/>
                                                                </div>
                                                                <div>
                                                                    <h3>Jean Doe</h3>
                                                                    <div className='comments-meta'>June 27, 2018 at 2:21pm</div>
                                                                    <p className='comments-text'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur quidem laborum necessitatibus, ipsam impedit vitae autem, eum officia, fugiat saepe enim sapiente iste iure! Quam voluptas earum impedit necessitatibus, nihil?</p>
                                                                    <div>
                                                                        <Link to="#" className='reply' >Reply</Link>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </li>
                                                    </ul>
                                                </li>
                                            </ul>
                                        </li>
                                    </ul>
                                </li>
                                <ul>
                                    <li className='comment'>
                                        <div>
                                            <img src="./images/blog/person.jpg"alt="person 27 blog" />
                                        </div>
                                        <div>
                                            <h3>Jean Doe</h3>
                                            <div className='comments-meta'>June 27, 2018 at 2:21pm</div>
                                            <p className='comments-text'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur quidem laborum necessitatibus, ipsam impedit vitae autem, eum officia, fugiat saepe enim sapiente iste iure! Quam voluptas earum impedit necessitatibus, nihil?</p>
                                            <div>
                                                <Link to="#" className='reply' >Reply</Link>
                                            </div>
                                        </div>
                                    </li>
                                </ul>
                            </ul>
                            <div className='comments-form'>
                                <h3>Leave a comment</h3>
                                <form action='#'onSubmit={handleSubmit} className='form-controlblock'>
                                    <label>Name*<br></br>
                                        <input
                                            name="name"
                                            type="text"
                                            value={name}
                                            onChange={handleInputChange}
                                            className='form-inp' />
                                    </label>
                                    <label>Email*<br></br>
                                        <input
                                            name="email"
                                            type="email"
                                            value={email}
                                            onChange={handleInputChange}
                                            className='form-inp' />
                                    </label>
                                    <label>Website<br></br>
                                        <input
                                            name="text"
                                            type="text"
                                            value={text}
                                            onChange={handleInputChange}
                                            className='form-inp' />
                                    </label>
                                    <label>Message<br></br>
                                        <textarea
                                            name="textarea"
                                            cols={72}
                                            rows={9}
                                            value={textarea}
                                            onChange={handleInputChange}
                                            className='form-inp-textarea'>
                                        </textarea>
                                    </label>
                                    <div>
                                        <button type="submit"
                                            onClick={handleSubmit}
                                            className='contact-submit'>Post Comment</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                    <div className='infoTM-item'>
                        <div className='infoTM-itemBox'>
                            <form action='#' className='form-search'>
                                <div className='form-search'>
                                    <input type='text' placeholder='Type a keyword and hit enter' />
                                    <img src="./images/blog/search.png" alt="info form" className='img-search' />
                                </div>
                            </form>
                        </div>
                        <div className='infoTM-itemBox'>
                            <div className='categories'>
                                <h3 className='categories-title'>Categories</h3>
                                <ul>
                                    <li className='categories-border'>
                                        <Link to="#">Food <span className='span1'>(12)</span></Link>
                                    </li>
                                    <li className='categories-border'>
                                        <Link to="#">Dish  <span className='span2'>(22)</span></Link>
                                    </li>
                                    <li className='categories-border'>
                                        <Link to="#">Desserts  <span className='span3'>(37)</span></Link>
                                    </li>
                                    <li className='categories-border'>
                                        <Link to="#">Drinks  <span className='span4'>(42)</span></Link>
                                    </li>
                                    <li className='categories-border'>
                                        <Link to="#">Ocassion   <span className='span5'>(14)</span></Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className='infoTM-itemBox'>
                            <h3 className='tag-title'>Tag Cloud</h3>
                            <div className='tagcloud'>
                                <Link to="#" className='tagcloud-link'>dish</Link>
                                <Link to="#" className='tagcloud-link'>menu</Link>
                                <Link to="#" className='tagcloud-link'>food</Link>
                                <Link to="#" className='tagcloud-link'>sweet</Link>
                                <Link to="#" className='tagcloud-link'>tasty</Link>
                                <Link to="#" className='tagcloud-link'>delicious</Link>
                                <Link to="#" className='tagcloud-link'>desserts</Link>
                                <Link to="#" className='tagcloud-link'>drinks</Link>
                            </div>
                        </div>
                        <div className='infoTM-itemBox'>
                            <h3 className='paragraf-title'>Paragraph</h3>
                            <p className='paragraf-text'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus itaque, autem necessitatibus voluptate quod mollitia delectus aut, sunt placeat nam vero culpa sapiente consectetur similique, inventore eos fugit cupiditate numquam!</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default SingleBlogInfoThemes;