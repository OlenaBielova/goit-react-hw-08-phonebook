import { Outlet } from 'react-router-dom';
import { AppBar } from '../AppBar/AppBar';
import { Suspense } from 'react';
import { Wrapper } from './Layout.styled';

export const Layout = () => {
  return (
    <div>
      <AppBar />
      <Suspense fallback={null}>
        <Wrapper>
          <Outlet />
        </Wrapper>
      </Suspense>
    </div>
  );
};
