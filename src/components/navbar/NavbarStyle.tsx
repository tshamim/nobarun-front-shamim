import styled from 'styled-components';

const StyledNavbar = styled.div`
  position: relative;
  background: linear-gradient(135deg, #1ca346 0%, #2db84f 50%, #6fba1a 100%);
  box-shadow: 0 4px 12px rgba(28, 163, 70, 0.25);
  max-height: 42px;
  transition: box-shadow 0.3s ease;

  &:hover {
    box-shadow: 0 6px 16px rgba(28, 163, 70, 0.35);
  }

  .nav-link {
    font-size: 18px;
    font-weight: 600;
    margin-right: 32px;
    cursor: pointer;
    color: #fff;
    position: relative;
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    text-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);
    
    &::after {
      content: '';
      position: absolute;
      bottom: -8px;
      left: 0;
      width: 0;
      height: 3px;
      background: #fff;
      border-radius: 2px;
      transition: width 0.3s ease;
    }

    :hover {
      color: #fff !important;
      transform: translateY(-2px);
      text-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
      
      &::after {
        width: 100%;
      }
    }
  }
  
  .nav-link:last-child {
    margin-right: 0px;
  }

  .root-child {
    display: none;
    position: absolute;
    left: 0;
    top: 100%;
    z-index: 5;
    opacity: 0;
    transform: translateY(-10px);
    transition: opacity 0.3s ease, transform 0.3s ease;
  }
  
  .root:hover {
    .root-child {
      display: block;
      opacity: 1;
      transform: translateY(0);
      animation: slideDown 0.3s ease forwards;
    }
  }

  @keyframes slideDown {
    from {
      opacity: 0;
      transform: translateY(-10px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  .child {
    display: none;
    position: absolute;
    top: 0;
    left: 100%;
    z-index: 5;
    opacity: 0;
    transform: translateX(-10px);
    transition: opacity 0.3s ease, transform 0.3s ease;
  }
  
  .parent:hover > .child {
    display: block;
    opacity: 1;
    transform: translateX(0);
  }

  .dropdown-icon {
    color: rgba(255, 255, 255, 0.8);
    transition: transform 0.3s ease;
  }

  .root:hover .dropdown-icon {
    transform: rotate(90deg);
  }

  @media only screen and (max-width: 900px) {
    display: none;
  }
`;

export default StyledNavbar;
