import type {ReactElement} from "react";

interface Props {
    styles: Record<string, string>;
}

function TopInfo({styles}: Props): ReactElement {
    return (
        <div className={styles.topInfo}>

        </div>
    )
}

export default TopInfo;