const ButtonLink = ({ href, children, icon: Icon, className = '', ariaLabel }) => {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={ariaLabel}
        className={className}
      >
        {children} {Icon && <Icon />}
      </a>
    );
  };
  
export default ButtonLink;