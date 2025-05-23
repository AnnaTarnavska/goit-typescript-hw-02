import s from './LoadMoreBtn.module.css';

type LoadMoreBtnProps = {
    onClick: () => void;
    disabled?: boolean;
};

const LoadMoreBtn = ({ onClick, disabled }: LoadMoreBtnProps) => {
    return (
        <button onClick={onClick} disabled={disabled} className={s.loadMoreBtn}>Load More</button>
    );
}

export default LoadMoreBtn;