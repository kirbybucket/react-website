import React from 'react'

const Backend = () => {
    return (
        <div className="skills__content">
            <h3 className="skills__title">Backend Developer</h3>

            <div className="skills__box">
                <div className="skills__group">
                    <div className="skills__data">
                        <i class='bx bxl-java'></i>

                        <div>
                            <h3 className="skills__name">Java</h3>
                            <span className="skills__level">Intermediate</span>
                        </div>
                    </div>

                    <div className="skills__data">
                        <i class='bx bxl-c-plus-plus' ></i>

                        <div>
                            <h3 className="skills__name">C++</h3>
                            <span className="skills__level">Intermediate</span>
                        </div>
                    </div>

                    <div className="skills__data">
                        <i class='bx bxl-python' ></i>

                        <div>
                            <h3 className="skills__name">Python</h3>
                            <span className="skills__level">Basic</span>
                        </div>
                    </div>
                </div>

                <div className="skills__group">
                    <div className="skills__data">
                        <i class='bx bxs-terminal'></i>

                        <div>
                            <h3 className="skills__name">Bash</h3>
                            <span className="skills__level">Basic</span>
                        </div>
                    </div>

                    <div className="skills__data">
                        <i class='bx bxl-firebase' ></i>

                        <div>
                            <h3 className="skills__name">Firebase</h3>
                            <span className="skills__level">Basic</span>
                        </div>
                    </div>

                    <div className="skills__data">
                        <i class='bx bxs-data' ></i>

                        <div>
                            <h3 className="skills__name">SQL</h3>
                            <span className="skills__level">Basic</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Backend