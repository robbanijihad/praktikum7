import styles from "./addmovieform.module.css";
import { nanoid } from "nanoid";
import { useState } from "react";
function AddMovieForm(props) {
  const { movies, setMovies } = props;
  const [title, setTitle] = useState("");
  const [year, setYear] = useState("");
  const [type, setType] = useState("default");
  const [poster, setPoster] = useState("");
  function handleType (e){
    setType(e.target.value)
  }
  function handlePoster (e){
    setPoster(e.target.value)
  }
  function handleTitle (e){
    setTitle(e.target.value)
  }
  function handleYear (e){
    setYear(e.target.value)
  }
  function handleSubmit (e){
    e.preventDefault();
    const movie = {
      id: nanoid(),
      title: title,
      year: year,
      type: type,
      poster: poster,
    };
    setMovies([...movies, movie])
  }

console.log (title);
  return (
    <div className={styles.container}>
      <section className={styles.addmovieform}>
        <div className={styles.addmovieform__left}>
            <img
                className={styles.addmovieform__image}
                src="https://picsum.photos/536/354"
                alt="placeholder"
            />
        </div>
        <div className="addmovieform__right">
            <h1>ADD MOVIE</h1>
            <form onSubmit={handleSubmit}>
                <label className={styles.addmovieform__form}>
                    title
                    <input type="text" name="title" className={styles.addmovieform__input} onChange = {handleTitle} value = {title}/>
                </label>
                <label className={styles.addmovieform__form}>
                    year
                    <input type="number" name="year" onChange={handleYear} value = {year}/>
                </label>
                <label className={styles.addmovieform__form}>
                    type
                    <select value={type} onChange = {handleType}>
                      <option value="Action">Action</option>
                      <option value="comedy">comedy</option>
                      <option value="sex">sex</option>
                    </select>
                </label>
                <label className={styles.addmovieform__form}>
                    poster
                    <input type="text" name="poster" className={styles.addmovieform__input} onChange={handlePoster} value = {poster}/>
                </label>
                <input type="submit" value="Submit" />
            </form>
        </div>
      </section>
    </div>
  );
}

export default AddMovieForm;
