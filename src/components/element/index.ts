
import styled from "styled-components";

import {SpriteElement} from '../../models/dto'

export const Element = styled.div<SpriteElement>`
    position: absolute;
    background-image: url(${(props :any) => props.img});
    background-size: 50px 50px;
    height: 50px;
    width: 50px;
    top: ${(props: any) => props.top}px;
    left: ${(props: any) => props.left}px;
`;