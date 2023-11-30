const Skills = () => {
    return (
        <main className="section">
            <div className="container">
                <ul className="content-list">
                    <li className="content-list__item">
                        <h2 className="title-2">Frontend</h2>
                        <p>HTML, CSS, JavaScript, ReactJS</p>
                    </li>
                    <li className="content-list__item">
                        <h2 className="title-2">Backend</h2>
                        <p>Python, Django, FastAPI, Celery, Redis, PostgreSQL, MySQL, MongoDB</p>
                    </li>
                    <li className="content-list__item">
                        <h2 className="title-2">Other</h2>
                        <p>Docker, Git</p>
                    </li>
                </ul>
            </div>
        </main>
    );
}
 
export default Skills;