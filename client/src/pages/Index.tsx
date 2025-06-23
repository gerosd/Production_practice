import styles from '../assets/styles/modules/index.module.scss';
import {type ReactElement} from "react";
import IndexHeader from "../components/index/IndexHeader";
import TopInfo from "../components/index/TopInfo";

function Index(): ReactElement {

    return (
        <>
            <IndexHeader styles={styles} />
            <TopInfo styles={styles} />
        </>
    )
}

export default Index;