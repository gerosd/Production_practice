import type {ReactElement} from "react";

function ServiceCard({
                                styles,
                                title,
                                description,
                            }: {
    styles: Record<string, string>;
    title: string;
    description: string;
}): ReactElement {
    return (
        <div className={styles.serviceCard}>
            <h3>{title}</h3>
            <p>{description}</p>
        </div>
    );
}

export default ServiceCard;