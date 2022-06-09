import { AttachMoney } from "@material-ui/icons";
import styled from "styled-components";
import { mobile } from "../responsive";

const Container = styled.div`
  height: 60vh;
  background-color: #fcf5f5;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;
const Title = styled.h1`
  font-size: 70px;
  margin-bottom: 20px;
`;

const Desc = styled.div`
  font-size: 30px;
  font-weight: 300;
  margin-bottom: 20px;
  ${mobile({ textAlign: "center" })}
`;

const Button = styled.button`
  flex: 0;
  border: none;
  background-color: teal;
  color: white;
`;

const Newsletter = () => {
  return (
    <Container>
      <Title>Donate</Title>
      <Desc>
        If you want to thank the defenders, the easiest way to do it is to
        support financially.
      </Desc>
      <Button>
        <a
          style={{ color: "white", textDecoration: "none", fontSize: "25px" }}
          target="_blank"
          rel="noreferrer"
          href="https://www.portmone.com.ua/r3/pidtrymay-ukrayinsku-armiyu"
        >
          HELP
        </a>
      </Button>
    </Container>
  );
};

export default Newsletter;
