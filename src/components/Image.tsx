import styled from "styled-components";
import {
    border,
    BorderProps,
    layout,
    LayoutProps,
    space,
    SpaceProps
} from "styled-system";

const Image = styled.img<SpaceProps & BorderProps & LayoutProps>`
  ${space}
  ${border}
  ${layout}
  max-height: 150px;
  max-width: 200px;
`;

import { getCDNOptimizedUrl } from '../utils/cdnUtils';

// Create a wrapper component to apply the CDN logic
const OptimizedImage = ({ src, ...props }: any) => {
  return <Image src={getCDNOptimizedUrl(src)} {...props} />;
};

export default OptimizedImage;
