import "./styles.scss";
import image from "./profile.jpg";
function Image(props) {
  return (
    <div className="image">
      <img src={props.imagePath} alt="profile" />
    </div>
  );
}
function Data(props) {
  return (
    <>
      <h1>{props.name}</h1>
      <p>{props.description}</p>
    </>
  );
}
function SkillList() {
  return (
    <div className="skills">
      <Skill name="HTML" color="red" />
      <Skill name="CSS" color="lightblue" />
      <Skill name="JavaScript" color="yellow" />
      <Skill name="ReactJS" color="darkcyan" />
      <Skill name="Bootstrap" color="orangered" />
      <Skill name="SASS" color="lightgrey" />
    </div>
  );
}
function Skill(props) {
  return (
    <div className="skill" style={{ backgroundColor: props.color }}>
      {props.name}
    </div>
  );
}
export default function App() {
  return (
    <div className="App">
      <div className="card">
        <Image imagePath={image} />
        <div className="cardBody">
          <Data
            name="ashley"
            description=" My name is Mahmoud Ashraf I am a student at the Faculty of Computers and Artificial Intelligence and a person that passionate about learn literally everything. Also I have brain cells to burn, A lot of it."
          />
          <SkillList />
        </div>
      </div>
    </div>
  );
}
