import { Container } from '../../Layout/Container/Container.jsx';
import { Gender } from './Gender/Gender.jsx';
import { Category } from './Category/Category.jsx';

export const Navigation = () => (
  <nav>
    <Container>
      <Gender />
      <Category />
    </Container>
  </nav>
)
