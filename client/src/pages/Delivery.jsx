import styled from "styled-components";
import Navbar from "../components/Navbar";
import Announcement from "../components/Announcement";
import Newsletter from "../components/Newsletter";
import Footer from "../components/Footer";

const Container = styled.div``;

const Refund = styled.h1`
  margin: 20px;
  text-align: center;
`;

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

const Desc2 = styled.div`
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

const RefText = styled.div`
  margin: 20px;
  font-size: 20px;
  justify-content: center;
  text-align: center;
`;

const Delivery = () => {
  return (
    <Container>
      <Navbar />
      <Announcement />
      <Del>DELIVERY</Del>
      <Desc>
        Processing and dispatch of orders takes place within 10 working days
        after the successful payment of the order.
      </Desc>
      <Desc2>
        Orders sent outside of Ukraine are stored at the post office for 5 days.
        At the expiration of the storage period, the order is automatically
        canceled without the possibility of re-delivery. If you have any
        questions about delivery times and methods, please email us:
        contact@rndmcrw.dev
      </Desc2>
      <Tracking>ORDER TRACKING</Tracking>
      <TrackDesc>
        Each sent order is assigned a track code, by which you can track its
        movement and status. Track codes are sent automatically only for orders
        that were sent by Ukr Mail. If you have not received your tracking code
        or want to receive the tracking code of Nova Poshta, please write to us:
        contact@rndmcrw.dev. Be sure to include your order number, name and
        phone number in your email.
      </TrackDesc>
      <Refund>REFUND</Refund>
      <RefText>
        Return of goods is possible only in the presence of visible physical
        damage. Please check the goods immediately upon receipt of the parcel in
        the mail. To process a return, you must take a photo of the damage and
        send it to us by email contact@rndmcrw.dev. Please include your order
        number, order date, name and phone number in your email.
      </RefText>
      <Newsletter />
      <Footer />
    </Container>
  );
};

export default Delivery;
