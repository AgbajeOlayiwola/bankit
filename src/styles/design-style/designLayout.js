import styled from "styled-components"

const DesignLayout = styled.div`
  width: 100%;
  padding: 32px 64px;
  box-sizing: border-box;
  max-height: 445px;
  overflow: scroll;
  background: ${({ bgcolor }) => bgcolor};
  flex-direction: ${({ type }) => (type === "long" ? "unset" : "column")};
  align-items: ${({ type }) => (type === "long" ? "center" : "flex-start")};
  height: ${({ type }) => (type === "long" ? "unset" : null)};
  gap: 24px;
  display: flex;
  border-radius: 20px;
  /* Hide scroll bar */
  &::-webkit-scrollbar {
    width: 0; /* Remove scrollbar space */
    height: 0;
  }
  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */

  @media (max-width: 768px) {
    padding: 16px;
    flex-direction: column; /* Change to column layout on mobile */
    align-items: center;
    height: unset;
  }

  .design-single {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 8px;

    @media (max-width: 768px) {
      align-items: center; /* Center items on mobile */
    }
  }

  .design-single h2 {
    color: ${({ bgcolor }) =>
      bgcolor === "#fff"
        ? "#262626"
        : bgcolor === "#FFF1CC"
        ? "#262626"
        : "white"};
    font-size: 24px;
    font-style: normal;
    font-weight: 700;
    line-height: 36px; /* 150% */

    @media (max-width: 768px) {
      text-align: center; /* Center text on mobile */
    }
  }

  .design-single p {
    color: ${({ type, bgcolor }) =>
      bgcolor === "#FFF1CC"
        ? "#262626"
        : bgcolor === "#fff"
        ? "#666"
        : type === "long"
        ? "white"
        : "#DBDBDB"};
    font-size: 24px;
    font-style: normal;
    font-weight: 400;
    line-height: 38.4px; /* 160% */
    width: 79%;

    @media (max-width: 768px) {
      width: 100%; /* Full width on mobile */
      text-align: center; /* Center text on mobile */
    }
  }

  .design-single div {
    display: flex;
    gap: 10px;
    align-items: center;
    cursor: pointer;
  }

  .design-single div h3 {
    color: ${({ bgcolor }) =>
      bgcolor === "#fff"
        ? "#062983"
        : bgcolor === "#FFF1CC"
        ? "#062983"
        : "white"};
    font-size: 16px;
    font-style: normal;
    font-weight: 700;
    line-height: 24px; /* 150% */
    text-transform: capitalize;
  }
`

export default DesignLayout
