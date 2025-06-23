import BenefitCard from "./BenefitCard";
import type {ReactElement} from "react";

interface Benefits {
    title: string;
    description: string;
}

function BenefitsSection({styles}: { styles: Record<string, string> }): ReactElement {
    const benefits: Benefits[] = [
        {
            title: "Команда Экспертов",
            description: "Сертифицированные специалисты с многолетним опытом в бухгалтерском учете и финансовом управлении.",
        },
        {
            title: "Экономия Времени",
            description: "Сосредоточьтесь на развитии бизнеса, пока мы занимаемся всей бухгалтерией."
        },
        {
            title: "Выгодные Условия",
            description : "Сокращение операционных расходов благодаря нашим эффективным и профессиональным услугам."
        },
        {
            title: "Поддержка 24/7",
            description : "Круглосуточная помощь по всем вопросам бухгалтерского учета."
        }
    ]
    return (
        <section className={styles.benefits}>
            <h2>Почему Выбирают Нас</h2>
            <div className={styles.benefitsGrid}>
                {benefits.map((benefit) => (
                    <BenefitCard key={benefit.title} styles={styles} title={benefit.title} description={benefit.description}/>
                ))}
            </div>
        </section>
    )
}

export default BenefitsSection;