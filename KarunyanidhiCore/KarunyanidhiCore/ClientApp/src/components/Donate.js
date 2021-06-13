import React, { Component } from 'react';
import { Helmet } from 'react-helmet'

const TITLE = 'Donate || Karunyanidhi'
export class Donate extends Component {
    static displayName = Donate.name;

    render() {
        return (
            <>
                <Helmet>
                    <title>{TITLE}</title>
                </Helmet>
                {/*Page Header Start*/}
                <section
                    className="page-header"
                    style={{
                        backgroundImage: "url(assets/images/backgrounds/page-header-bg.jpg)",
                    }}
                >
                    <div className="container">
                        <div className="page-header__inner">
                            <h2>Donate</h2>
                            <ul className="thm-breadcrumb list-unstyled">
                                <li>
                                    <a href="index.html">Home</a>
                                </li>
                                <li>
                                    <span>/</span>
                                </li>
                                <li>Donate</li>
                            </ul>
                        </div>
                    </div>
                </section>
                {/*Page Header End*/}
                {/*donate Page Start*/}
                <section className="donate-page">
                    <div className="container">
                        <div className="block-title text-center">
                            <h4>Donate Now</h4>
                            <h2>We’re Helping People in Need</h2>
                        </div>
                        <div className="row">
                            <div className="col-xl-12">
                                <div className="donate-form">
                                    <form action className="donate-form-validated donate-one__form">
                                        <div className="row">
                                            <div className="col-xl-6">
                                                <div className="donate-form__input-box">
                                                    <input type="text" placeholder="First name" name="name" />
                                                </div>
                                            </div>
                                            <div className="col-xl-6">
                                                <div className="donate-form__input-box">
                                                    <input type="email" placeholder="Last name" name="name" />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-xl-6">
                                                <div className="donate-form__input-box">
                                                    <input type="text" placeholder="PAN number" name="text" />
                                                </div>
                                            </div>
                                            <div className="col-xl-6">
                                                <div className="donate-form__input-box">
                                                    <input type="text" placeholder="Amount" name="text" />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-xl-6">
                                                <div className="donate-form__input-box">
                                                    <input
                                                        type="email"
                                                        placeholder="Email address"
                                                        name="email"
                                                    />
                                                </div>
                                            </div>
                                            <div className="col-xl-6">
                                                <div className="donate-form__input-box">
                                                    <input
                                                        type="text"
                                                        placeholder="Mobile number"
                                                        name="phone"
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-xl-6">
                                                <div className="donate-form__input-box">
                                                    <input type="text" placeholder="City" name="text" />
                                                </div>
                                            </div>
                                            <div className="col-xl-6">
                                                <div className="donate-form__input-box">
                                                    <input
                                                        type="text"
                                                        onfocus="(this.type='date')"
                                                        onblur="(this.type='text')"
                                                        id="dob"
                                                        name="date of birth"
                                                        placeholder="Date of birth"
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-xl-12">
                                                <div className="form-check">
                                                    <input
                                                        type="checkbox"
                                                        className="form-check-input"
                                                        id="exampleCheck1"
                                                    />
                                                    <label
                                                        className="form-check-label"
                                                        htmlFor="exampleCheck1"
                                                    >
                                                        I have read through the website.......
                      </label>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-xl-12">
                                                <button type="submit" className="thm-btn donate-form__btn">
                                                    Donate
                    </button>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/*Donate Page End*/}
            </>
        );
    }
}

export default Donate
