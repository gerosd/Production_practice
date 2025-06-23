import type {ReactElement} from "react";

function HeroSection({ styles }: { styles: Record<string, string> }): ReactElement {
    return (
        <section className={styles.hero}>
            <h1>Профессиональные Бухгалтерские Услуги для Вашего Бизнеса</h1>
            <p>Доверьте нам ведение вашей финансовой отчетности, пока вы сосредоточитесь на развитии бизнеса. Мы предоставляем комплексные бухгалтерские решения, адаптированные под ваши потребности.</p>
        </section>
    );
}

export default HeroSection;