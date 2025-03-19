import React from 'react'

const Social = () => {
    return (
        <div className="home__social">
            <a
                href="https://linkedin.com/"
                className="home__social-icon"
                target="__blank"
            >
                <i class="uil uil-linkedin-alt"></i>
            </a>

            <a
                href="https://github.com/"
                className="home__social-icon"
                target="__blank"
            >
                <i class="uil uil-github-alt"></i>
            </a>

            <a
                href="https://x.com/"
                className="home__social-icon"
                target="__blank"
            >
                <i class="uil uil-twitter-alt"></i>
            </a>
        </div>
    )
}

export default Social