import styled from "styled-components";

export const BlockPeopleTask = styled.div`
  max-width: 880px;
  margin: 0 auto;
  padding: 0;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  padding: 0;
  @media (max-width: 768px) {
    max-width: 580px;
  }
  @media (max-width: 320px) {
    max-width: 280px;
  }
`;