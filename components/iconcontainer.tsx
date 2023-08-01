interface IconContainerProps {
  logo: string;
}

const IconContainer: React.FC<IconContainerProps> = ({ logo }) => {
    
  const size = '28px';
    
    return (
        <img 
          src={`/icons/dev/${logo}.svg`} 
          style={{ 
            width: `${size}`,
            height: `${size}`,
            padding: "2px",
          }}
          title={logo}
        />
    );
};

export default IconContainer;
