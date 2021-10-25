import ReactDom from "react-dom";

const placeModal = (placedAt:string) => {
    switch(placedAt){
        case 'bottom' : return 'bottom-modal'
        case 'center' : return 'center-modal'
        default : return ''
    }
}

const Modal = ({ show, close, title, children,placedAt }:any) => {
  return (
    <>
      <div
        className={`modalContainer ${show ? "show" : ""} `}
        
        onClick={() => close()}
      >
        <div className={`modal ${placeModal(placedAt)}`}  onClick={(e) => e.stopPropagation()}>
          <header className="modal_header">
            <h2 className="modal_header-title">{title}</h2>
            <button className="close" onClick={() => close()}>
              close X
            </button>
          </header>
          <main className="modal_content">{children}</main>
        </div>
      </div>
      
    </>
  );
};

export default Modal;