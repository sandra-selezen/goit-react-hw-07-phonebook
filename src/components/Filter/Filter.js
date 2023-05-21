import { RiUserSearchFill } from "react-icons/ri";
import { useDispatch, useSelector } from 'react-redux';
import { getFilter } from "redux/selectors";
import { setFilter } from 'redux/filterSlice';
import { Title } from './Filter.styled';

export const Filter = () => {
  const filter = useSelector(getFilter);
  const dispatch = useDispatch();

  const handleFilter = (event) => {
    dispatch(setFilter(event.target.value.toLowerCase()));
  };

  return (
    <>
      <Title><RiUserSearchFill /> Find contact by name </Title>
      <input value={filter} onChange={handleFilter} autoComplete="off" />
    </>
  )
}