import './SkillCard.styles.scss';

const SkillCard = (props) => {
  return (
    <div className="skill-card">
      {props.children}
    </div>
  )

};

export default SkillCard;
