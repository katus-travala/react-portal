import React from 'react';
import PropTypes from 'prop-types';
import ReactDOM from 'react-dom';

Modal.propTypes = {
    visible: PropTypes.bool,
    children: PropTypes.node,
    onClose: PropTypes.func

};

const MODAL_STYLES = {
    position: 'fixed',
    zIndex: 1000,
    width: '100vw',
    height: '100vh',
    top: 0,
    left: 0
}

const MODAL_BACKDROP_STYLES = {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(0,0,0,0.3)'
}
const MODAL_BACKDROP_CONTENT_STYLES= {
    position: 'absolute',
    backgroundColor: '#ffffff',
    top: '50%',
    left: '50%',
    borderRadius: '5px',
    boxShadow: '0 3px 7px rgba(0, 0, 0, 0.3)',
    transform: 'translate(-50%, -50%)',
    padding: '16px',
}

export function Modal({visible, children, onClose}) {
    if (!visible) {
        return null
    }
    return ReactDOM.createPortal(
        <div className="modal" style={MODAL_STYLES}>
            <div style={MODAL_BACKDROP_STYLES} onClick={onClose}/>
            <div style={MODAL_BACKDROP_CONTENT_STYLES}>
                {
                    children
                }
            </div>
        </div>,
        document.getElementById('modal-root')
    );
}
