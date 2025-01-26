import { RoundInfoProps } from "./type";
import { Button, Image } from "./style";

export const RoundInfo = ({ background, alt, isMobile }: RoundInfoProps) => {
  return (
    <Button $isMobile={isMobile}>
      <Image src={background} alt={alt} />
    </Button>
  );
};
