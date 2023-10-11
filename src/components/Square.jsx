export function Square({
  children, isSelected, boardUpdate, index,
}) {
  const className = `square ${isSelected ? 'is-selected' : ''}`;
  const handleClick = () => {
    boardUpdate(index);
  }; return (
    <div className={className} onClick={handleClick}>{children}</div>
  );
}

