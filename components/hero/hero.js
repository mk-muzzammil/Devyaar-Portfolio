import React from 'react';
import Link from 'next/link'
import heroImg from '/public/images/hero/hero-01.jpg'
import icon from '/public/images/icons/icon_stars_trustpilot.svg'
import avatar1 from '/public/images/avatar/avatar_1.webp'
import avatar2 from '/public/images/avatar/avatar_2.webp'
import avatar3 from '/public/images/avatar/avatar_3.webp'
import Image from 'next/image';

const Hero = () => {

    return (
        <section className="it_solution_hero_section">
            <div className="container">
                <div className="row">
                    <div className="col-lg-7">
                        <div className="it_solution_hero_content" style={{ backgroundImage: `url(${'/images/shapes/it_solution_hero_bg_1.svg'})` }}>
                            <div className="heading_focus_text mb-0 d-inline-flex align-items-center">👋 Hi We <span className="badge bg-secondary text-white">Are DH Solutions</span></div>
                            <h1>
                                 Revolutionize Industries with AI-Powered Technology
                            </h1>
                            <p>
                            Empowering businesses with advanced AI solutions to enhance efficiency, drive innovation, and create smarter systems for a competitive edge.
                            </p>
                            <ul className="btns_group unordered_list p-0 justify-content-start">
                                <li>
                                    <Link className="btn" href="/pricing">
                                        <span className="btn_label" data-text="Get Started">Get Started</span>
                                        <span className="btn_icon">
                                            <i className="fa-solid fa-arrow-up-right"></i>
                                        </span>
                                    </Link>
                                </li>
                                <li>
                                    <div className="review_short_info">
                                        <div className="d-flex">
                                            <Image src={icon} alt="Techco - Trustpilot Review" />
                                            <span>4.8</span>
                                        </div>
                                        <div className="review_counter">From <b>200+</b> reviews</div>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-lg-5">
                        <ul className="it_solution_hero_images unordered_list">
                            <li>
                                <Image src={heroImg} alt="Techco - IT Solution - Hero" />
                            </li>
                            <li>
                                <div className="worldwide_clients">
                                    <div className="counter_value">150+</div>
                                    <p>
                                        Worldwide Country has lots of clients
                                    </p>
                                    <ul className="avatar_group unordered_list">
                                        <li>
                                            <Image src={avatar1} alt="Techco - Avatar" />
                                        </li>
                                        <li>
                                            <Image src={avatar2} alt="Techco - Avatar" />
                                        </li>
                                        <li>
                                            <Image src={avatar3} alt="Techco - Avatar" />
                                        </li>
                                        <li>
                                            5k+
                                        </li>
                                    </ul>
                                </div>
                            </li>
                            <li>
                                <ul className="categories unordered_list_block">
                                    <li>
                                        <Link href="/">
                                            <span>Data Security</span>
                                            <i className="fa-solid fa-plus"></i>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/">
                                            <i className="fa-solid fa-plus"></i>
                                            <span>Web Development</span>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/">
                                            <span>Analytics & Optimization</span>
                                            <i className="fa-solid fa-plus"></i>
                                        </Link>
                                    </li>
                                </ul>
                            </li>
                            <li>
                                <div className="business_growth_content" style={{ backgroundImage: `url(${'/images/hero/it_solution_hero_image_2.webp'})` }}>
                                    <div className="business_growth">
                                        <div className="progress_content">
                                            <svg
                                                role="progressbar"
                                                width="260"
                                                height="260"
                                                viewBox="0 0 100 100"
                                                aria-valuemin="0"
                                                aria-valuemax="100"
                                                aria-valuenow="88"
                                            >
                                                <circle
                                                    cx="50%"
                                                    cy="50%"
                                                    r="42"
                                                    shapeRendering="geometricPrecision"
                                                    fill="none"
                                                    stroke="#f1f1f1"
                                                    strokeWidth="5"
                                                ></circle>
                                                <circle
                                                    cx="50%"
                                                    cy="50%"
                                                    r="42"
                                                    shapeRendering="geometricPrecision"
                                                    className="business_growth-circle-58"
                                                    fill="none"
                                                    strokeWidth="10"
                                                    strokeDashoffset="31.680000000000007"
                                                    strokeDasharray="264"
                                                    strokeLinecap="round"
                                                    style={{ transform: 'rotate(-90deg)', transformOrigin: '50% 50%' }}
                                                    stroke="#fff"
                                                    data-angel="88"
                                                ></circle>
                                                <text
                                                    className="business_growth-text-58"
                                                    x="50%"
                                                    y="50%"
                                                    fill="#fff"
                                                    textAnchor="middle"
                                                    dy="0.35em"
                                                    fontSize="1.6rem"
                                                    fontWeight="400"
                                                >
                                                    <tspan className="business_growth-percent-58">88</tspan>
                                                    <tspan className="business_growth-unit-58">%</tspan>
                                                </text>
                                            </svg>
                                            <p>
                                                get 88% of the best services and growth business
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Hero;