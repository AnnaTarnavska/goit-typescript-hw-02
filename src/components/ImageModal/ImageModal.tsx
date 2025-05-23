import Modal from 'react-modal';
import s from './ImageModal.module.css';

type ImageModalProps = {
    isOpen: boolean;
    onRequestClose: () => void;
    imageUrl: string | null;
};

const ImageModal = ({isOpen, onRequestClose, imageUrl}: ImageModalProps) => {
    return (
        <Modal
            isOpen={isOpen}
            onRequestClose={onRequestClose}
            overlayClassName={s.modalOverlay}
            className={s.modalImgCont}
            shouldCloseOnOverlayClick={true}
            shouldCloseOnEsc={true}
        >
            {imageUrl && <img src={imageUrl} alt={'Full Image'} className={s.modalImg} />}
        </Modal>
    )

}

export default ImageModal;