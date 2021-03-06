import { parseISO, formatDistanceToNow } from "date-fns";

const ListDatePosted = ({ timestamp }) => {
    let datePosted = '';

    if (timestamp) {
        const date = parseISO(timestamp);
        const dateDuration = formatDistanceToNow(date);

        datePosted = `${dateDuration} ago`;
    }
  
    return (
        <span title={timestamp}>
            &nbsp; <i>{datePosted}</i>
        </span>
    )
}

export default ListDatePosted;