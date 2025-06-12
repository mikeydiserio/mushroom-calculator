"use client";

import styled from "@emotion/styled";

const FooterElement = styled.footer`
  background: #2d3748;
  color: white;
  padding: 2rem 1rem;
  text-align: center;
`;

const FooterContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;

const List = styled.ul``;
const ListItem = styled.li``;

const Footer = () => {
  return (
    <FooterElement>
      <FooterContainer>
        <p>
          Made with love
          <i className="fas fa-heart"></i> by Mikey D for General Psychedelic
          Wellness
        </p>
        <List>
          <ListItem>
            <a href="#">
              <i className="fa fa-facebook" aria-hidden="true"></i>
              <span> - Facebook</span>
            </a>
          </ListItem>
          <ListItem>
            <a href="#">
              <i className="fa fa-google-plus" aria-hidden="true"></i>
              <span> - Google</span>
            </a>
          </ListItem>
        </List>
        <p>© 2023 What's My Dosage? All rights reserved.</p>
      </FooterContainer>
    </FooterElement>
  );
};

export default Footer;
