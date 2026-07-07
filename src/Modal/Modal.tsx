import "./Modal.css";

type ModalProps = {
    title: string; //modal Name
    onClose: () => void;
    children: React.ReactNode;
};

export default function Modal({ title, onClose, children }: ModalProps) {
    return (
        <div className="modal__container" onClick={onClose}> {/* Modal Backdrop */}
            <div className="modal" onClick={(e) => e.stopPropagation()}> {/* Modal */}
                <div className="modal__header"> {/* Holds Title and Close Button */}
                    <h1 className="modal__title">{title}</h1>
                    <button className="modal__close" onClick={onClose}> X </button>
                </div>
                {children}
            </div>
        </div>
    );
}