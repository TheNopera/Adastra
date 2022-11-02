import "./ComponentsStyles/Modal.css"


function Modal(props) {
    return (
        <div className="Modal">
            <div className="Modal_container">
                <div className="Modal_title">
                    <h1>{props.title}</h1>
                </div>
                <div className="Modal_info">
                    <h2>{props.info}</h2>
                </div>
            </div>

        </div>
    );
}

export default Modal;