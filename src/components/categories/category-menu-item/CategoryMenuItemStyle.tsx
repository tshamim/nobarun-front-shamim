import styled from 'styled-components';
import { getTheme } from '../../../utils/utils';

export const StyledCategoryMenuItem = styled.div`
  position: relative;

  .category-dropdown-link {
    cursor: pointer;
    display: flex;
    align-items: center;
    padding: 0.75rem 1.25rem;
    height: 5rem;
    min-width: 30rem;
    white-space: pre;
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    border-left: 3px solid transparent;
    position: relative;
    overflow: hidden;

    &::before {
      content: '';
      position: absolute;
      left: 0;
      top: 0;
      height: 100%;
      width: 0;
      background: linear-gradient(90deg, rgba(28, 163, 70, 0.1) 0%, transparent 100%);
      transition: width 0.3s ease;
      z-index: 0;
    }

    img {
      transition: transform 0.3s ease;
      z-index: 1;
      border-radius: 6px;
    }

    .title {
      padding-left: 1.5rem;
      flex-grow: 1;
      font-size: 1.6rem;
      font-weight: 500;
      z-index: 1;
      transition: all 0.3s ease;
    }

    svg {
      transition: transform 0.3s ease;
      z-index: 1;
    }
  }

  :hover {
    & > .category-dropdown-link {
      color: ${getTheme('colors.primary.main')};
      background: ${getTheme('colors.primary.light')};
      border-left-color: ${getTheme('colors.primary.main')};
      transform: translateX(4px);
      box-shadow: 0 2px 8px rgba(28, 163, 70, 0.1);

      &::before {
        width: 100%;
      }

      img {
        transform: scale(1.1) rotate(5deg);
      }

      .title {
        font-weight: 600;
      }

      svg {
        transform: translateX(4px);
      }
    }

    & > .mega-menu {
      display: block;
    }
  }
`;
