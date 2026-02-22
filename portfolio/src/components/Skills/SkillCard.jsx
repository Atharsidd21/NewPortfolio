const SkillCard = ({ name, image }) => {
  return (
    <div className="skill-card">
      <img src={image} alt={name} />
      <p>{name}</p>
    </div>
  );
};

export default SkillCard;