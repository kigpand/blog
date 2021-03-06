import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { IPosting } from '../../model/IPosting';
import { changeRecentPost } from '../../reducer/post';
import styles from './Posting.module.scss';

const Posting = ({ title, content, hashTag, date } : IPosting) => {

    const nav = useNavigate();
    const dispatch = useDispatch();

    function onClick() {
        dispatch(changeRecentPost({ title, content, hashTag, date }));
        nav('/view');
    }

    return (
        <div className={styles.posting} onClick={onClick}>{title}</div>
    )
}

export default Posting;