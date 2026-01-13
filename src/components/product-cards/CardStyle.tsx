import { deviceSize } from '@utils/constants';
import styled from 'styled-components';
import { getTheme } from '../../utils/utils';
import Card from '../Card';

export const StyledProductCard1 = styled(Card)`
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  margin: auto;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 385px;
  max-width: 385px;
  border-radius: 12px;
  border: 1px solid #f0f0f0;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
  background: #fff;
  position: relative;
  z-index: 1;

  &:hover {
    transform: translateY(-4px) scale(1.01);
    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.12);
    border-color: #1ca346;
    z-index: 10;

    .details {
      height: 100%;
      .add-cart {
        display: flex;
      }
    }
    
    .image-holder {
      .extra-icons {
        display: block;
      }

      &::before {
        opacity: 1;
      }

      img {
        transform: scale(1.03);
      }
    }
  }
  @media only screen and (max-width: 1600px) {
    width: 320px;
    .image-holder {
      img {
        height: 300px;
      }
    }
  }
  @media only screen and (max-width: 1400px) {
    width: 300px;
    .image-holder {
      img {
        height: 250px;
      }
    }
  }
  @media only screen and (max-width: 1300px) {
    width: 100%;
    .image-holder {
      img {
        height: 350px;
      }
    }
  }
  @media only screen and (max-width: 767px) {
    width: 100%;
    .image-holder {
      img {
        height: 250px;
      }
    }
  }
  @media only screen and (max-width: 450px) {
    width: 100%;
    .image-holder {
      img {
        height: 200px;
      }
    }
  }

  .image-holder {
    position: relative;
    display: inline-block;
    text-align: center;
    overflow: hidden;
    border-radius: 12px 12px 0 0;

    &::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background: linear-gradient(180deg, transparent 0%, rgba(0, 0, 0, 0.05) 100%);
      opacity: 0;
      transition: opacity 0.4s ease;
      z-index: 1;
      pointer-events: none;
    }

    img {
      width: 100%;
      max-height: 385px;
      transition: transform 0.4s cubic-bezier(0.4, 0, 0.2, 1);
      object-fit: cover;
    }

    .extra-icons {
      display: none;
      position: absolute;
      top: 0.75rem;
      right: 0.75rem;
      cursor: pointer;
      z-index: 2;
    }

    @media only screen and (max-width: ${deviceSize.sm}px) {
      display: block;
    }
  }

  .details {
    padding: 1.5rem;
    transition: all 0.3s ease;

    .title {
      display: -webkit-box;
      -webkit-line-clamp: 2;
      -webkit-box-orient: vertical;
      overflow: hidden;
      text-overflow: ellipsis;
      line-height: 1.5;
      transition: color 0.3s ease;
      
      &:hover {
        color: #1ca346;
      }
    }
    
    .categories {
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }
    
    h3.title {
      font-size: 18px;
      @media only screen and (max-width: 600px) {
        font-size: 16px;
      }
    }
    .icon-holder {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      align-items: flex-end;
    }

    .favorite-icon {
      cursor: pointer;
    }
    .outlined-icon {
      svg path {
        fill: ${getTheme('colors.text.hint')};
      }
    }
    .add-cart {
      display: none;
      flex-direction: column;
      align-items: center;
      margin-top: auto;
    }
  }

  @media only screen and (max-width: 768px) {
    .details {
      .add-cart {
        display: flex;
      }
    }
  }
`;

export const StyledProductCard12 = styled.div`
  margin-bottom: 0rem;
  & > p {
    background-image: ${getTheme('colors.default.gradient')};
    box-shadow: 0px 1px 3px rgb(3 0 71 / 9%);
    border-top-left-radius: 8px;
    border-top-right-radius: 8px;
    color: #fff;
    height: 54px;
    font-size: 22px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;
