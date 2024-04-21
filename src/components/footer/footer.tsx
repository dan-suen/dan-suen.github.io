import "./footer.scss";
const divStyle: React.CSSProperties = {
  width: '100%'
};
export default function Footer() {
  return (
    <footer>
      <div className="card" style={divStyle}>
        <div className="card-body">
          <h5 className="card-title">How to reach me:</h5>

          <a href="https://www.linkedin.com/in/daniel-suen-5182b6149/">
            <img src="https://img.shields.io/badge/-LinkedIn-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white" />
          </a>
          <a href="https://github.com/dan-suen">
            <img src="https://img.shields.io/badge/-GitHub-FFFFFF?style=for-the-badge&logo=github&logoColor=black" />
          </a>
          <a href="mailto: danielsuen200791357@gmail.com">
            <img src="https://img.shields.io/badge/-Gmail-EA4335?style=for-the-badge&logo=gmail&logoColor=white" />
          </a>
          <a href="tel:+4168048855">
            <img src="https://img.shields.io/badge/-416_804_8855-000000?style=for-the-badge" />
          </a>
        </div>
      </div>
    </footer>
  );
}
