import {
  RatingForm,
  Circle,
  Heading,
  Text,
  Numbers,
  Button,
} from "./Rating.styles";

interface Props {
  rating: number | null;
  onChange: React.ChangeEventHandler<HTMLInputElement> | undefined;
  onSubmit: React.FormEventHandler<HTMLFormElement> | undefined;
}

export function Rating({ rating, onChange, onSubmit }: Props) {
  return (
    <RatingForm onSubmit={onSubmit}>
      <Circle>
        <img src="/assets/icon-star.svg" alt="Orange star icon" />
      </Circle>
      <Heading>How did we do?</Heading>
      <Text>
        Please let us know how we did with your support request. All feedback is
        appreciated to help us support our offering!
      </Text>
      <Numbers>
        <Circle>
          <input
            type="radio"
            name="rating"
            value="1"
            checked={rating === 1}
            onChange={onChange}
            required
          />
        </Circle>
        <Circle>
          <input
            type="radio"
            name="rating"
            value="2"
            checked={rating === 2}
            onChange={onChange}
            required
          />
        </Circle>
        <Circle>
          <input
            type="radio"
            name="rating"
            value="3"
            checked={rating === 3}
            onChange={onChange}
            required
          />
        </Circle>
        <Circle>
          <input
            type="radio"
            name="rating"
            value="4"
            checked={rating === 4}
            onChange={onChange}
            required
          />
        </Circle>
        <Circle>
          <input
            type="radio"
            name="rating"
            value="5"
            checked={rating === 5}
            onChange={onChange}
            required
          />
        </Circle>
      </Numbers>
      <Button type="submit">Submit</Button>
    </RatingForm>
  );
}
