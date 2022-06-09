import styled from "styled-components";
import Navbar from "../components/Navbar";
import Announcement from "../components/Announcement";
import Newsletter from "../components/Newsletter";
import Footer from "../components/Footer";

const Container = styled.div``;

const Del = styled.h1`
  margin: 20px;
  text-align: center;
`;

const Tracking = styled.h1`
  margin: 20px;
  text-align: center;
`;

const Desc = styled.div`
  margin: 20px;
  font-size: 20px;
  justify-content: center;
  text-align: center;
`;

const TrackDesc = styled.div`
  margin: 20px;
  font-size: 20px;
  justify-content: center;
  text-align: center;
`;

const Terms = () => {
  return (
    <Container>
      <Navbar />
      <Announcement />
      <Del>TERMS OF USE</Del>
      <Desc>
        These are the Terms and Conditions governing the use of this Service and
        the agreement that operates between You and the Company. These Terms and
        Conditions set out the rights and obligations of all users regarding the
        use of the Service. Your access to and use of the Service is conditioned
        on Your acceptance of and compliance with these Terms and Conditions.
        These Terms and Conditions apply to all visitors, users and others who
        access or use the Service. By accessing or using the Service You agree
        to be bound by these Terms and Conditions. If You disagree with any part
        of these Terms and Conditions then You may not access the Service. You
        represent that you are over the age of 18. The Company does not permit
        those under 18 to use the Service. Your access to and use of the Service
        is also conditioned on Your acceptance of and compliance with the
        Privacy Policy of the Company. Our Privacy Policy describes Our policies
        and procedures on the collection, use and disclosure of Your personal
        information when You use the Application or the Website and tells You
        about Your privacy rights and how the law protects You. Please read Our
        Privacy Policy carefully before using Our Service.
      </Desc>
      <Tracking>Contact US</Tracking>
      <TrackDesc>
        If you have any questions about these Terms and Conditions you can
        contact us by email: contact@rndmcrw or by phone number: +380995206825
      </TrackDesc>
      <Newsletter />
      <Footer />
    </Container>
  );
};

export default Terms;
