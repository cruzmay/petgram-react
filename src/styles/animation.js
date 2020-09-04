import styled, { css, keyframes } from 'styled-components'

export const fadeIn = ({ time = '1s', type = 'ease' } = {}) =>
    css`animation: ${time} ${fadeInKeyframes} ${type};`

const fadeInKeyframes = keyframes`
from {
    filter: blur(10px);
    opacity: 0;
}
to {
    filter: blur(0);
    opacity: 1;
}`