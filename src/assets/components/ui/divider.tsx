export default function Divider({color} : {color : string}) {
  let dividerStyle: React.CSSProperties = {
    position: 'relative',
    width: '100%',
    height: '5px',
    backgroundColor: `var(${color})`,
  }

  return(
    <div style={dividerStyle}></div>
  );
}