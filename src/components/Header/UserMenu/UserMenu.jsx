import { useDispatch, useSelector } from 'react-redux';
import { logOut } from 'reduxe/auth/auth-operation';

import { selectUserName } from 'reduxe/auth/auth-selectors';
import { Wrapper } from './UserMenu.styled';

export const UserMenu = () => {
  const dispatch = useDispatch();
  const name = useSelector(selectUserName);
  return (
    <Wrapper>
      <p>Welcome, {name}!</p>
          <button type="button" onClick={() => dispatch(logOut())}>
        Logout
      </button>
    </Wrapper>
  );
};