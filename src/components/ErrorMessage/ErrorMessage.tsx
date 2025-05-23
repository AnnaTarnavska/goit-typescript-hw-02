import s from './ErrorMessage.module.css';

type ErrorMessageProps = {
    message: string;
};

export const ErrorMessage = ({ message }: ErrorMessageProps) => {
    return (
        <div className={s.errorMessage}>
            {message}
        </div>
    );
}