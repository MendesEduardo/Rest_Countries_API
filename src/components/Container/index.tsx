import styles from './Container.module.scss';

interface Props{
    children: any
}

export default function Container({ children }: Props) {
    return (
        <section className={styles.container}>
            {children}
        </section>
    )
}
