import "@fortawesome/fontawesome-svg-core/styles.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMagnifyingGlass,
  faCircleStop,
} from "@fortawesome/free-solid-svg-icons";

export default function Social(social) {
  return (
    <>
      <div>
        <FontAwesomeIcon icon={faMagnifyingGlass} />
        {"Welcome"}
      </div>
    </>
  );
}
