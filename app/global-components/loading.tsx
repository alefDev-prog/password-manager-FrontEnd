import { faSpinner } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import '../global-style/globals.scss';

export default function Loading() {

    return (
        <div id="loading-page-wrapper">
            <FontAwesomeIcon icon={faSpinner} id="loading-spinner"></FontAwesomeIcon>
        </div>
        
    )
}