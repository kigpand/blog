import { useEffect } from 'react';import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { IPosting } from '../../model/IPosting';
import { getPosting } from '../../reducer/post';
import './Posting.scss';

const Posting = ({ title, content, hashTag, date } : IPosting) => {

    const nav = useNavigate();
    const dispatch = useDispatch();

    function onClick() {
        dispatch(getPosting({ title, content, hashTag, date }));
        nav('/view');
    }

    return (
        <div className='posting' onClick={onClick}>{title}</div>
    )
}

export default Posting;