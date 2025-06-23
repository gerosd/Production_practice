import type {ReactElement} from "react";

function BenefitCard({
                         styles,
                         title,
                         description,
                     }: {
    styles: Record<string, string>;
    title: string;
    description: string;
}): ReactElement {
    return (
        <div className={styles.benefitItem}>
            <h3>{title}</h3>
            <p>{description}</p>
        </div>
    );
}

export default BenefitCard;