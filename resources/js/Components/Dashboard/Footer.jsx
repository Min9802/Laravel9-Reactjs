import React from "react";

export default function Footer() {
    return (
        <>
            <footer className="footer mt-auto pb-4">
                <div className="container-fluid">
                    <div className="row align-items-center justify-content-lg-between">
                        <div className="col-lg-6 mb-lg-0 mb-4">
                            <div className="copyright text-center text-sm text-muted text-lg-start">
                                <p>
                                    {new Date().getFullYear() +" All rights reserved | This web design"}
                                    <i
                                        class="fa fa-heart"
                                        aria-hidden="true"
                                    ></i>{" "}
                                    {" by "}
                                    <a
                                        href="https://fb.com/min9802"
                                        target="_blank"
                                    >
                                        {"Min"}
                                    </a>
                                </p>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <ul className="nav nav-footer justify-content-center justify-content-lg-end">
                                <li className="nav-item">
                                    <a
                                        href="https://fb.com/Min9802"
                                        className="nav-link text-muted"
                                        target="_blank"
                                    >
                                        {" Min"}
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    );
}
