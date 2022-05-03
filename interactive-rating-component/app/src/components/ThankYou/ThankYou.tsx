import {
  Container,
  Image,
  SelectedRating,
  Content,
  Heading,
  Text,
} from "./ThankYou.styles";

interface Props {
  rating: number;
}

export function ThankYou({ rating }: Props) {
  return (
    <Container>
      <Image
        src="/assets/illustration-thank-you.svg"
        alt="Illustration of a smartphone printing out a receipt, surrounded by a floating credit card and a circle"
      />
      <SelectedRating>You selected {rating} out of 5</SelectedRating>
      <Content>
        <Heading>Thank you!</Heading>
        <Text>
          We appreciate you taking the time to give a rating. If you ever need
          more support, don't hesitate to get in touch!
        </Text>
      </Content>
    </Container>
  );
}
