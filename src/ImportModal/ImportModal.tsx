import "./ImportModal.css";

type ImportModalProps = {
    onClose: () => void;
};

export default function ImportModal({ onClose }: ImportModalProps) {
    return (
        <div>
            <form onSubmit={() => alert("Open")}>
                <input className="signup__modal-form-input" type="text" placeholder="email" required value={email} onChange={handleEmailChange}></input>
                <input className="signup__modal-form-input" type="password" placeholder="password" required value={password} onChange={handlePasswordChange}></input>
                <button type="submit">Import</button>
            </form>
        </div>
    );
}