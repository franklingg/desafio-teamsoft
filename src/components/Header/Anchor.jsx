import './styles.css'

export function Anchor({link, path, name}){
    
    return(
        <a className="headerAnchor" href={link}>
            <img src={path} alt={name} />
            <span>{name}</span>
        </a>
    );
}