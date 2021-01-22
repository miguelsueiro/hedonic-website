import styled from '@emotion/styled';
import React from 'react'
import { Menu } from '../../ui-system/components/header';

const PageWrapper = styled.div`
  position: relative;
`

const InfoPage = () => {
  return (
    <>
      <Menu />
      <PageWrapper className="mt-xl">
        Info text
      </PageWrapper>
    </>
  );
}

export default InfoPage