import styles from '../styles/Directive.module.css';
interface DirectiveProps {
  name: string;
}

const Directive = ({ name }: DirectiveProps): JSX.Element => {
  return (
    <div>
      <button className={styles.directive}>{name}</button>
    </div>
  );
};

export default Directive;
