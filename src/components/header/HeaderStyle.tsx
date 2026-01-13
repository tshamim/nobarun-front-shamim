import styled from 'styled-components';
import { layoutConstant } from 'utils/constants';
import { getTheme } from '../../utils/utils';

const StyledHeader = styled.header`
  position: relative;
  z-index: 1;
  height: 7rem;
  background: ${getTheme('colors.body.paper')};
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
  transition: box-shadow 0.3s ease;

  &:hover {
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.12);
  }

  .logo {
    img {
      display: block;
      transition: transform 0.3s ease;
    }
    
    &:hover img {
      transform: scale(1.02);
    }
  }
  .icon-holder {
    span {
      font-size: 1.2rem;
      line-height: 1;
      margin-bottom: 4px;
    }
    h4 {
      margin: 0px;
      font-size: 1.4rem;
      line-height: 1;
      font-weight: 600;
    }
    div {
      margin-left: 6px;
    }
  }

  .user {
    cursor: pointer;
  }

  @media only screen and (max-width: 900px) {
    height: ${layoutConstant.mobileHeaderHeight};

    .logo,
    .icon-holder,
    .category-holder {
      display: none;
    }
    .header-right {
      display: none !important;
    }
    
    /* Improve mobile search box spacing */
    .searchbox {
      width: 100%;
    }
  }
`;

export default StyledHeader;
