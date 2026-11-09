import css from './Loader.module.css';

export default function Loader() {
  return (
    <div className={css.wrapper} role="status" aria-live="polite">
      <span className={css.spinner} />
      <p className={css.text}>Loading notes...</p>
    </div>
  );
}
