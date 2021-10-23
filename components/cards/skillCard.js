const SkillCard = (props) =>{

    const {name,image} = props.each
    return(
        <div className="skill-card">
            <img src={image}/>
            <p>{name}</p>
        </div>
    )
}

export default SkillCard