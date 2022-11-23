import { motion } from 'framer-motion';
import styles from './Ingressos.css';

function Ingressos() {
    return (
        <motion.div className={styles.divPage}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }} >
            <h1>Ingressos GANHAMO</h1>
        </motion.div>
    )
}
export default Ingressos;