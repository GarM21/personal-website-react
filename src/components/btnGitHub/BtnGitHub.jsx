import gitHubLogo from "./../../img/icons/gitHub-black.svg"

const BtnGitHub = ({gitHubLink}) => {
    return (
        <a target="_blank" rel="noreferrer" href={gitHubLink} className="btn-outline">
            <img src={gitHubLogo} alt="" />
            GitHub repo
        </a>
    );
}
 
export default BtnGitHub;