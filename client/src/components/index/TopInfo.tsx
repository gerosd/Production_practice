import type {ReactElement} from "react";
import HeroSection from "./HeroSection";
import ContactsSection from "./ContactsSection";
import ServicesSection from "./ServicesSection";
import BenefitsSection from "./BenefitsSection";

interface Props {
    styles: Record<string, string>;
}

function TopInfo({styles}: Props): ReactElement {
    return (
        <div className={styles.topInfo}>
            <div className={styles.container}>
                <HeroSection styles={styles}/>
                <ServicesSection styles={styles}/>
                <BenefitsSection styles={styles}/>
                <ContactsSection styles={styles}/>
            </div>
        </div>
    );
}

export default TopInfo;