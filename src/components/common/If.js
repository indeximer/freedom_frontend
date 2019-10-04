const If = ({ test, children }) => (test !== false && test !== undefined ? children : false);

export default If;