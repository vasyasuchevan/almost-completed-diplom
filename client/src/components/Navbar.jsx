import { Badge } from "@material-ui/core";
import React from "react";
import styled from "styled-components";
import { mobile } from "../responsive";
import { useSelector } from "react-redux";
import { NavLink, Link } from "react-router-dom";
import { ShoppingCartOutlined } from "@material-ui/icons";

const Container = styled.div`
  height: 60px;
  ${mobile({ height: "50px" })}
`;

const Wrapper = styled.div`
  padding: 10px 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  ${mobile({ padding: "10px 0px" })}
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
`;

const Language = styled.span`
  font-size: 14px;
  cursor: pointer;
  ${mobile({ display: "none" })}
`;

const Center = styled.div`
  flex: 1;
  text-align: center;
`;

const Logo = styled(Link)`
  font-size: 32px;
  font-weight: bold;
  color: black;
  text-decoration: none;
  ${mobile({ fontSize: "24px" })}
`;
const Right = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  ${mobile({ flex: 2, justifyContent: "center" })}
`;

const MenuItem = styled.div`
  font-size: 14px;
  cursor: pointer;
  margin-left: 25px;
  ${mobile({ fontSize: "12px", marginLeft: "10px" })}
`;

const Navbar = () => {
  const quantity = useSelector((state) => state.cart.quantity);
  return (
    <Container>
      <Wrapper>
        <Left>
          <Language>We're glad to welcome you!</Language>
        </Left>
        <Center>
          <Logo to={`/`}>ESSENTIAL.</Logo>
        </Center>
        <Right>
          <NavLink to="/register">
            <MenuItem style={{ color: "black", textDecoration: "none" }}>
              REGISTER
            </MenuItem>
          </NavLink>

          <NavLink to="/login">
            <MenuItem style={{ color: "black", textDecoration: "none" }}>
              SIGN IN
            </MenuItem>
          </NavLink>

          <NavLink to="/cart">
            <MenuItem style={{ color: "black", textDecoration: "none" }}>
              <Badge badgeContent={quantity} color="primary">
                <ShoppingCartOutlined />
              </Badge>
            </MenuItem>
          </NavLink>
        </Right>
      </Wrapper>
    </Container>
  );
};

export default Navbar;
