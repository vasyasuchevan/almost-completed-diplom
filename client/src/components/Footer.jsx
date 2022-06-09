import { Email, Phone, Room } from "@material-ui/icons";
import styled from "styled-components";
import { mobile } from "../responsive";
import { Link } from "react-router-dom";

const Container = styled.div`
  display: flex;
  ${mobile({ flexDirection: "column" })}
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 20px;
`;

const Logo = styled.h1``;

const Desc = styled.p`
  margin: 20px 0px;
`;

const Center = styled.div`
  flex: 1;
  padding: 20px;
  ${mobile({ display: "none" })}
`;

const Title = styled.h3`
  margin-bottom: 30px;
`;

const List = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  flex-wrap: wrap;
`;

const ListItem = styled(Link)`
  width: 50%;
  margin-bottom: 10px;
  color: black;
  text-decoration: none;
`;

const Right = styled.div`
  flex: 1;
  padding: 20px;
  ${mobile({ backgroundColor: "#fff8f8" })}
`;

const ContactItem = styled.div`
  margin-bottom: 20px;
  display: flex;
  align-items: center;
`;

const Payment = styled.img`
  width: 50%;
`;

const Footer = () => {
  return (
    <Container>
      <Left>
        <Logo>ESSENTIAL.</Logo>
        <Desc>
          This site was created solely to support the Ukrainian people. 100% of
          all profits will be transferred to the needs of Ukraine. We love our
          country and now to help it financially is very timely. Please feel
          free to buy and donate, we need it now. Millions of our people are
          fighting for the right to life and freedom for our nation. Right now
          our country is in a situation where we can choose the future for it as
          we decide. GLORY TO UKRAINE. ESSENTIAL.
        </Desc>
      </Left>
      <Center>
        <Title>Useful Links</Title>
        <List>
          <ListItem to={`/delivery`}>Delivery</ListItem>
          <ListItem to={`/terms`}>Terms</ListItem>
        </List>
      </Center>
      <Right>
        <Title>Contact</Title>
        <ContactItem>
          {" "}
          <Room style={{ marginRight: "10px" }} />
          Shop "NON STOP", Petrychanka, Chernivtsi region, 60400
        </ContactItem>
        <ContactItem>
          {" "}
          <Phone style={{ marginRight: "10px" }} />
          +380 99 520 68 25
        </ContactItem>
        <ContactItem>
          {" "}
          <Email style={{ marginRight: "10px" }} />
          contact@rndmcrw.dev
        </ContactItem>
        <Payment src="https://i.ibb.co/Qfvn4z6/payment.png" />
      </Right>
    </Container>
  );
};

export default Footer;
