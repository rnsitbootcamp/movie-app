import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

class Modal extends PureComponent {
    componentDidMount() {
        this.closeButton && this.closeButton.focus()
    }

    render() {
        const { 
            toggleClose,
            header,
            children 
        } = this.props;

        return (
            <div className="overlay__backdrop">
                <button
                    className="modal__close"
                    type="button"
                    title="close modal"
                    aria-label="close modal"
                    onClick={toggleClose}
                    ref={button => this.closeButton = button}
                >
                    <span>X</span>
                </button>
                <div
                    className="modal"
                >
                    <div className="modal__header">
                        <h3 className="modal__header--title">
                            {header}
                        </h3>
                    </div>
                    <div className="modal__content">
                        {children}
                    </div>
                </div>
            </div>
        );
    }
}

Modal.propTypes = {
    toggleClose: PropTypes.func,
    header: PropTypes.string,
    children: PropTypes.any
};

export default Modal;