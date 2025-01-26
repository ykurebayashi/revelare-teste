import { useCheckMobile } from "../../../utils/useCheckMobile";
import {
  MainContent,
  DrinkImage,
  DrinkTitle,
  FlexDiv,
  Instructions,
} from "./style";

const DetailedPost = () => {
  const { isMobile } = useCheckMobile();
  return (
    <MainContent>
      <DrinkTitle>Lorem ipsum dolor</DrinkTitle>
      <FlexDiv $isMobile={isMobile}>
        <Instructions $isMobile={isMobile}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent ut
          quam augue. In imperdiet vulputate tellus, ac iaculis libero efficitur
          ac. Ut finibus, dui id faucibus sollicitudin, risus felis sagittis
          sem, nec ornare mi orci sit amet nulla. Mauris vitae odio at metus
          egestas consectetur vel et odio. Suspendisse at commodo odio. Aliquam
          pharetra nec odio et molestie. Duis pulvinar, sapien vel tempus
          auctor, lorem diam placerat turpis, lacinia tincidunt orci eros vitae
          lectus. Aenean feugiat aliquet felis. Praesent in elit ligula.
          Curabitur cursus accumsan turpis, ut sodales nunc imperdiet et. Aenean
          eu tellus eu est pretium fringilla at sed massa. Cras non magna risus.
          Duis vulputate, mi et tincidunt pulvinar, justo felis tempor ex, eu
          condimentum est quam quis dolor. Sed vel metus nec diam sagittis
          blandit. Aliquam accumsan fermentum accumsan. Morbi rhoncus sapien a
          tellus interdum, at malesuada ligula tristique. Donec maximus vitae
          est at auctor. Quisque blandit, enim vitae ornare malesuada, dui
          lectus pharetra enim, vel tincidunt odio diam at nisl. Suspendisse
          posuere felis quis ipsum aliquam finibus. Pellentesque ultricies
          tortor id odio laoreet, sed lacinia nibh fermentum. Morbi est velit,
          accumsan non egestas vel, fermentum at sem. Proin efficitur mauris
          eget libero fringilla, quis elementum dolor viverra. Integer
          consectetur, est ac dapibus fermentum, turpis sem fermentum diam, eu
          congue lorem ipsum vehicula risus. Curabitur scelerisque volutpat urna
          tempor volutpat. Nullam aliquet massa eu diam auctor suscipit. Donec
          tincidunt consequat eros, vitae scelerisque enim ornare ac. Donec
          consectetur pharetra turpis. Morbi molestie lacus sem, et lobortis mi
          vehicula laoreet. Vestibulum fringilla augue quis tempor eleifend.
          Aliquam eu tortor a erat bibendum gravida. Nulla vel ex ac augue
          viverra imperdiet ac in odio. Nulla imperdiet purus felis, in
          fermentum quam gravida a. Nulla facilisi. Aenean imperdiet lorem nec
          placerat euismod. Ut semper tellus condimentum tellus lacinia gravida.
          Donec sit amet facilisis lacus. Duis sed nisi consectetur, fringilla
          nunc vel, porttitor neque. Fusce sit amet urna risus. Sed nec auctor
          risus. Nulla sed arcu et nibh vulputate congue nec et est. Etiam
          elementum lobortis est vel rutrum. Aliquam ut tortor eget orci aliquam
          ullamcorper. Aenean congue eu ante sed vulputate. Nunc a eleifend
          tellus. Nulla eget est vel odio pretium lobortis.
        </Instructions>
        <DrinkImage
          $isMobile={isMobile}
          alt="Imagem da bebida"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6f/Brasao_do_Sao_Paulo_Futebol_Clube.svg/1200px-Brasao_do_Sao_Paulo_Futebol_Clube.svg.png"
        />
      </FlexDiv>
    </MainContent>
  );
};
export default DetailedPost;
