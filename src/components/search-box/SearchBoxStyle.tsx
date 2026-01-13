import styled from 'styled-components';
import { getTheme } from '../../utils/utils';

const StyledSearchBox = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  
  @media only screen and (max-width: 1200px) {
    max-width: 80%;
    margin: auto;
  }
  @media only screen and (max-width: 1200px) {
    max-width: 100%;
    margin: 0;
  }

  .search-icon {
    position: absolute;
    color: ${getTheme('colors.text.hint')};
    left: 1rem;
    z-index: 1;
    transition: all 0.3s ease;
  }

  &:focus-within .search-icon {
    color: #1ca346;
    transform: scale(1.1);
  }

  .search-field {
    flex: 1 1 0;
    padding-left: 3rem;
    padding-right: 11.5rem;
    height: 44px;
    background-color: #fff !important;
    border: 2px solid #e0e0e0;
    border-radius: 8px;
    font-size: 1.8rem;
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.04);

    &:focus {
      border-color: #1ca346;
      box-shadow: 0 4px 12px rgba(28, 163, 70, 0.15);
      outline: none;
    }

    &::placeholder {
      color: #999;
      transition: color 0.3s ease;
    }

    &:focus::placeholder {
      color: #bbb;
    }
  }

  .search-btn {
    background: linear-gradient(135deg, #005b8c 0%, #007bb5 100%) !important;
    color: #fff !important;
    position: absolute;
    right: 3px;
    height: 38px;
    border-radius: 6px;
    font-weight: 600;
    box-shadow: 0 2px 8px rgba(0, 91, 140, 0.3);
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);

    &:hover {
      background: linear-gradient(135deg, #007bb5 0%, #005b8c 100%) !important;
      box-shadow: 0 4px 12px rgba(0, 91, 140, 0.4);
      transform: translateY(-1px);
    }

    &:active {
      transform: translateY(0);
      box-shadow: 0 2px 6px rgba(0, 91, 140, 0.3);
    }
  }

  .search-button {
    position: absolute;
    height: 100%;
    right: 0px;
    padding-left: 55px;
    padding-right: 55px;
    border-top-left-radius: 0px !important;
    border-bottom-left-radius: 0px !important;
  }

  .category-dropdown {
    position: absolute;
    right: 0px;
    color: ${getTheme('colors.text.hint')};
  }
  .dropdown-handler {
    height: 40px;
    cursor: pointer;
    min-width: 90px;
    padding-left: 1.25rem;
    padding-right: 1rem;
    border-left: 1px solid ${getTheme('colors.text.disabled')};
    span {
      margin-right: 0.75rem;
    }
  }
  .menu-button {
    display: none;
  }
  @media only screen and (max-width: 900px) {
    .category-dropdown {
      display: none;
    }
    .search-icon {
      left: 1rem;
    }
    .search-field {
      height: 40px;
      padding-left: 2.75rem;
      padding-right: 9rem;
      font-size: 1.6rem;
    }
    .search-btn {
      font-size: 1.4rem;
      padding: 0 1rem;
    }
    .search-button {
      padding-left: 1.25rem;
      padding-right: 1.25rem;
    }
    .menu-button {
      display: unset;
    }
  }

  @keyframes fadeIn {
    from {
      opacity: 0;
      transform: translateY(-10px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
`;

export default StyledSearchBox;
