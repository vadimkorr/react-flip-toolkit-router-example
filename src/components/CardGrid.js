import styled from 'styled-components'

export const CardGrid = styled.ul`
  display: ${(props) => (props.display === 'grid' ? 'grid' : 'block')};
  grid-gap: 2rem;
  grid-template-columns: repeat(auto-fill, minmax(20rem, 1fr));
  margin: 0;
  padding: 0;
  list-style: none;
  > li {
    display: block;
    margin-bottom: ${(props) => (props.display === 'grid' ? 0 : '1.5rem')};
    height: ${(props) => (props.display === 'grid' ? 'auto' : '5.75rem')};
  }
`
