import styled from 'styled-components'

export const Toggle = styled.button`
  background: ${(props) => (props.active ? 'black' : 'transparent')};
  color: ${(props) => (props.active ? 'white' : 'black')};
  position: relative;
  z-index: ${(props) => (props.active ? 2 : 1)};

  border: 1px solid black;
  border-radius: 5px;
  padding: 0.5rem 1rem;
  &:nth-of-type(1) {
    border-top-right-radius: 0;
    border-bottom-right-radius: 0;
    border-right: 0;
  }
  &:nth-of-type(2) {
    border-top-left-radius: 0;
    border-bottom-left-radius: 0;
  }
  svg:nth-of-type(2) {
    margin-left: 0.5rem;
  }
  &:hover {
    background-color: ${(props) => (props.active ? 'black' : '#f1f1f1')};
  }
`
