import '../style/page.scss';

const Modal = ({children, open}: {children: React.ReactNode, open?:boolean}) => {

    if(!open) return null;


    return (
        <>
            <div id="modal-overlay"/>
            <div id="modal-content">
                {children}
            </div>
        </>
        
    )
}

export default Modal;