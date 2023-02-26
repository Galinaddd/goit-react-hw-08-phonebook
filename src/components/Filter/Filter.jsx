import { useDispatch, useSelector } from 'react-redux';
import { selectFilter } from 'redux/contacts/selectors';
import { setFilter } from '../../redux/contacts/filterSlice';

export const Filter = () => {
  const filter = useSelector(selectFilter);
  const dispatch = useDispatch();

  return (
    <>
      <p>find contacts by name</p>

      <input
        type="text"
        value={filter}
        onChange={evt => dispatch(setFilter(evt.currentTarget.value))}
      />
    </>
  );
};
