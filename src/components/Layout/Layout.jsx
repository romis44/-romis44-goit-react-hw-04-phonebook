import PropTypes from 'prop-types';

export default function Layout({ children }) {
  return <div className="container">{children}</div>;
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};
