import { faSpinner } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import '../global-style/globals.scss';

export default function Loading() {

    return (
        <FontAwesomeIcon icon={faSpinner} id="loading-spinner"></FontAwesomeIcon>
    )
}