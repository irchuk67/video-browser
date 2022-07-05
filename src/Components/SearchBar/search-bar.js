import React, {useState} from "react";
import './search-bar.scss';

let SearchBar = ({onFormSubmit}) => {
    let [term, setTerm] = useState('');
    let onInputChange = (event) => {setTerm(event.target.value)};
    let onInputSubmit = (event) => {
        event.preventDefault();
        onFormSubmit(term);
    }
    return (
        <div className="search-bar">
            <form className="search-bar__form" onSubmit={onInputSubmit}>
                <label className={'search-bar__label'}>Video search</label>
                <input className={'search-bar__input'}
                       type="text"
                       value={term}
                       onChange={onInputChange}
                />
            </form>
        </div>
    );
}

export default SearchBar;
