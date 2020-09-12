import Meta from './Meta.js';
import Header from './Header.js';

const Page = props => (
  <div>
    <Meta />
    <Header />
    {props.children}
  </div>
);

export default Page;
