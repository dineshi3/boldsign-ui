const RightArrow = (props) => {
  const { color = '#000' } = props;
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'

      viewBox='0 0 24 24'
      style={{
        fill: color,
        transform: 'rotate(180deg)',
      }}
      {...props}
    >
      <path d='M21 11H6.414l5.293-5.293-1.414-1.414L2.586 12l7.707 7.707 1.414-1.414L6.414 13H21z'></path>
    </svg>
  );
};

export default RightArrow;
