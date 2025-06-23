import ServiceCard from "./ServiceCard";
import type {ReactElement} from "react";

interface Services {
    title: string;
    description: string;
}

function ServicesSection({ styles }: { styles: Record<string, string> }): ReactElement {
    const services: Services[] = [
        {
            title: "Бухгалтерский Учет",
            description: "Полное управление финансовой документацией, операциями и отчетностью с пристальным вниманием к деталям.",
        },
        {
            title: "Налоговый Учет",
            description: "Профессиональная подготовка налоговой отчетности, планирование и обеспечение соответствия требованиям законодательства."
        },
        {
            title: "Финансовая Отчетность",
            description: "Комплексные финансовые отчеты, предоставляющие четкое представление о финансовом состоянии вашего бизнеса."
        },
        {
            title: "Расчет Заработной Платы",
            description: "Полное управление заработной платой, включая расчеты, удержание налогов и соблюдение нормативных требований."
        },
        {
            title: "Юридическое сопровождение",
            description: "Полное юридическое сопровождение, включая составление договоров и консультации по юридическим вопросам."
        },
        {
            title: "Выгоднее штатного бухгалтера",
            description: "Выгоднее штатного бухгалтера, так как мы предлагаем более низкие цены и более высокое качество обслуживания."
        }
    ];

    return (
        <section className={styles.services}>
            <h2>Наши Услуги</h2>
            <div className={styles.servicesGrid}>
                {services.map((service) => (
                    <ServiceCard key={service.title} styles={styles} title={service.title} description={service.description}/>
                ))}
            </div>
        </section>
    );
}

export default ServicesSection;