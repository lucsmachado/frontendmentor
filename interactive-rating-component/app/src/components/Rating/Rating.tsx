import { Radio } from "../Radio";
import {
  RatingForm,
  Circle,
  Content,
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
      <Content>
        <Heading>How did we do?</Heading>
        <Text>
          Please let us know how we did with your support request. All feedback
          is appreciated to help us support our offering!
        </Text>
      </Content>
      <Numbers>
        <Radio
          label="1"
          name="rating"
          value="1"
          checked={rating === 1}
          onChange={onChange}
          required
        />
        <Radio
          label="2"
          name="rating"
          value="2"
          checked={rating === 2}
          onChange={onChange}
          required
        />
        <Radio
          label="3"
          name="rating"
          value="3"
          checked={rating === 3}
          onChange={onChange}
          required
        />
        <Radio
          label="4"
          name="rating"
          value="4"
          checked={rating === 4}
          onChange={onChange}
          required
        />
        <Radio
          label="5"
          name="rating"
          value="5"
          checked={rating === 5}
          onChange={onChange}
          required
        />
      </Numbers>
      <Button type="submit">SUBMIT</Button>
    </RatingForm>
  );
}
