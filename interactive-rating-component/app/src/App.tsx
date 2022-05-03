import { useState } from "react";
import { Container } from "./components/Container/";
import { Modal } from "./components/Modal";
import { Rating } from "./components/Rating";
import { ThankYou } from "./components/ThankYou";
import GlobalStyle from "./styles/GlobalStyle";

export default function App() {
  const [displayCard, setDisplayCard] = useState("rating");
  const [rating, setRating] = useState<number | null>(null);

  function handleRatingChange(event: React.FormEvent<HTMLInputElement>) {
    setRating(parseInt((event?.target as HTMLInputElement).value, 10));
  }

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setDisplayCard("thankYou");
  }

  return (
    <>
      <GlobalStyle />
      <Container>
        <Modal>
          {displayCard === "rating" && (
            <Rating
              rating={rating}
              onChange={handleRatingChange}
              onSubmit={handleSubmit}
            />
          )}
          {displayCard === "thankYou" && (
            <ThankYou rating={rating ? rating : 0} />
          )}
        </Modal>
      </Container>
    </>
  );
}
