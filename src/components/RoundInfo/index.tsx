import { RoundInfoProps } from "./type";
import { Button, Image } from "./style";

export const RoundInfo = ({ background, alt }: RoundInfoProps) => {
  return (
    <Button>
      <Image src={background} alt={alt} />
    </Button>
  );
};
