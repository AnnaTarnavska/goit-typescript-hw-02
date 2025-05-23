import { FadeLoader } from "react-spinners";
import s from './Loader.module.css';

const Loader = () => {
    return (
        <div className={s.fLoader}>
            <FadeLoader color="#c3e7ca"/>
        </div>
    );
}

export default Loader;